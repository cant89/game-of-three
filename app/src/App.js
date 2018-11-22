import React, { Component } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nums: [],
      gameState: "ready"
    }
  }

  actions = [-1,0,1]
  resetterEndStates = ["win", "lose", "user disconnected"]

  componentDidMount(){
    socket.once("busy", ()=>this.updateGameState({status:"busy"}))
  }
  
  startGame = () => {
    socket.on('play', this.onPlay);
    socket.once('end', this.updateGameState)
    socket.emit('start')
    this.updateGameState({status:"waiting"})
  }

  updateGameState = ({ status })=>{
    let newState = {
      gameState: status
    }
    if(this.resetterEndStates.indexOf(status) > -1)
      newState.nums = []

    this.setState(newState)
  }

  onPlay = (num)=>{
    this.setState({
      nums: [...this.state.nums, num],
      gameState: "playing"
    }, ()=>{
      console.log(this.state)
    })
  }

  handlePlay = (action)=>{
    this.setState({
      gameState: "waiting"
    }, () => {
      socket.emit("played", action)
    })    
  }

  render() {

    const {gameState, nums} = this.state
    console.log(this.state)

    return (
      <div>
        <header>Play with the chance</header>
        <main>

          {gameState==="busy"
            ? <div>Game is busy, someone else is playing. Please wait.</div>
            : <div>
                <button onClick={this.startGame}>Start</button>
                {this.actions.map(action=>(
                  <button 
                    onClick={()=>this.handlePlay(action)}>
                    {action}
                  </button>)
                )}
              </div>
          }

          <ul>
            {nums.map(num=>(
              <li>{num}</li>
              ))}
          </ul>
          
        </main>
      </div>
    );
  }
}

export default App;
