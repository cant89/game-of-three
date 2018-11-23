import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import Button from './components/Button'
import MovesList from './components/MovesList'
import Footer from './components/Footer'

const socket = openSocket('http://localhost:3001');
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moves: [],
      gameState: "ready"
    }
  }

  actions = [-1, 0, 1]
  resetterEndStates = ["win", "lose", "user disconnected"]

  componentDidMount() {
    socket.once("busy", () => this.updateGameState({ status: "busy" }))
  }

  startGame = () => {
    socket.on('play', this.onPlay);
    socket.once('end', this.updateGameState)
    socket.emit('start')
    this.updateGameState({ status: "waiting" })
  }

  updateGameState = ({ status }) => {
    let newState = {
      gameState: status
    }
    if (this.resetterEndStates.indexOf(status) > -1){
      newState.moves = []
      socket.removeAllListeners('play')
    }

    this.setState(newState)
  }

  getNextNum = (num)=>{
    return Math.round(num / 3)
  }

  onPlay = (move) => {
    console.log("onPlay")
    const { moves } = this.state
    this.setState({
      moves: [...moves, { ...move, mine: false}],
      gameState: "playing"
    })
  }

  handlePlay = (action) => {
    console.log("handlePlay")
    const { moves } = this.state
    const prevNum = moves[moves.length-1].num

    const move = {
      prevNum,
      action,
      num: this.getNextNum(prevNum+action)
    }
    
    this.setState({
      gameState: "waiting",
      moves: [...moves, { ...move, mine: true}],
    }, () => {
      socket.emit("played", action)
    })
  }

  render() {
    const { gameState, moves } = this.state

    return (
        <main>
          {gameState === "busy"
            ? <div>Game is busy, someone else is playing. Please wait.</div>
            : <Button onClick={this.startGame}>Start</Button>
          }
          <MovesList list={moves} />
          <Footer />
        </main>
    );
  }
}

export default App;
