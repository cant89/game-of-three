import React, { Component } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');

class App extends Component {

  componentDidMount(){

      socket.on('round', ()=>console.log("round arrived from server"));
  }

  render() {
    return (
      <div>
        <header>Play with the chance</header>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
