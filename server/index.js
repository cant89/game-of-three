const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const uniqid = require('uniqid');

let game
resetGame()

server.listen(3001, () => console.log('listening on *:3001'));

function genRandomNum() {
  return Math.floor(Math.random() * 100)
}

function getNextNum(num) {
  console.log("getNextNum")
  return Math.round(num / 3)
}

function isActionValid(action, num) {
  const op = (num + action) / 3
  return op === Math.round(op)
}

function resetGame(){
  game = {
    players: 0,
    playing: false
  }
}

function emitWin(socket) {
  console.log("emitWin")
  emitEnd(socket, "win")
  emitEnd(socket.broadcast, "lose")
}

function emitLose(socket) {
  console.log("emitLose")
  emitEnd(socket, "lose")
  emitEnd(socket.broadcast, "win")
}

function emitPlay(socket, data) {
  console.log("emitPlay", socket.id)
  socket.emit("play", data)
}

function emitEnd(socket, status){
  console.log("emitEnd", socket.id, status)
  socket.emit("end", {status})
  console.log(game)
  resetGame()
}

function emitBusy(socket){
  socket.emit("busy")
}

function startGame(socket){
  console.log("ready to play", socket.id)
  game.playing = true
  game.num = genRandomNum()
  emitPlay(socket, {num: game.num})
}

function onPlayed(socket, action){
  console.log("onPlayed", socket.id)
  if(!game.playing) 
    return

  if (!isActionValid(action, game.num)){
    emitLose(socket)
    return
  }
  const prevNum = game.num
  game.num = getNextNum(game.num)
  game.num === 1 
    ? emitWin(socket)
    : emitPlay(socket.broadcast, { 
      num: game.num,
      prevNum, 
      action
    })
}

function userDisconnected(socket){
  emitEnd(io, 'user disconnected')
  resetGame()
}

function addPlayer(socket) {

  console.log(socket.id)

  if (game.playing) {
    emitBusy(socket)
    return
  }

  game.players++
  console.log(socket._events)
  game.players === 2 && startGame(socket)
}

io.on('connection', socket => {
  console.log('new player');
  socket.on("played", action=>onPlayed(socket, action))
  socket.once('disconnect', ()=>userDisconnected(socket))
  socket.on('start', ()=>addPlayer(socket))  
});