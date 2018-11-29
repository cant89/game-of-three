const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const uniqid = require('uniqid');
require ('es7-object-polyfill');

var games = {
  pendingRoom: null,
  rooms: []
};

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

function emitWin(socket, roomId) {
  console.log("emitWin")
  endGame(socket, roomId, "win")
  endGame(socket.broadcast.to(roomId), roomId, "lose")
}

function emitLose(socket, roomId) {
  console.log("emitLose")
  endGame(socket, roomId, "lose")
  endGame(socket.broadcast.to(roomId), roomId, "win")
}

function emitPlay(socket, data) {
  console.log("emitPlay", socket.id, data)
  socket.emit("play", data)
}

function emitPlayedResult(socket, data) {
  console.log("emitPlayedResult", socket.id, data)
  socket.emit("playedresult", data)
}

function emitStarting(socket) {
  socket.emit("starting")
}

function emitEnd(socket, gameState) {
  console.log("emitEnd", socket.id, gameState)
  socket.emit("end", { gameState })
}

function startGame(socket, roomId) {
  console.log("ready to play", socket.id)
  let num;
  num = games.rooms[roomId].num = genRandomNum()
  emitPlay(socket, { num })
  emitPlayedResult(socket.broadcast.to(roomId), { num })
}

function onPlayed(socket, action, roomId) {
  let { num } = games.rooms[roomId]
  console.log("onPlayed", action, num)
  if (!isActionValid(action, num)) {
    emitLose(socket, roomId)
    return
  }

  let newNum
  newNum = games.rooms[roomId].num = getNextNum(num)
  if (newNum === 1) {
    emitWin(socket, roomId)
    return
  }

  const data = {
    num: newNum,
    prevNum : num,
    action
  }
  emitPlay(socket.broadcast, data)
  emitPlayedResult(socket, data)
}


function endGame(socket, roomId, gameState){
  console.log("endGame", roomId, gameState)
  emitEnd(socket, gameState)
  games.rooms[roomId] && delete games.rooms[roomId]
  games.pendingRoom = games.pendingRoom === roomId ? null : games.pendingRoom
}

io.on('connection', socket => {

  let roomId

  function addPlayer(){
    if (games.pendingRoom) {
      roomId = games.pendingRoom
      socket.join(roomId)
      games.pendingRoom = null
      startGame(socket, roomId)
  
    } else {
      roomId = uniqid()
      socket.join(roomId)
      games.pendingRoom = roomId
      games.rooms[roomId] = {}
      emitStarting(socket)
    }
  }
  
  socket.on('disconnect', () => endGame(io.in(roomId), roomId, 'user disconnected'))
  socket.on("played", ({ action }) => onPlayed(socket, action, roomId))
  socket.on('start', addPlayer)
});
