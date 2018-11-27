import React, { Component } from 'react';
import { connect } from 'react-redux'
import { start, unsubscribeEvent } from './actions'
import GameEndPage from './pages/GameEnd'
import GameStartingPage from './pages/GameStarting'
import GameStartPage from './pages/GameStart'
import GamePlayingPage from './pages/GamePlaying'

class App extends Component {

  componentDidUpdate() {
    const { game, unsubscribeEvents } = this.props
    if (resetterEndStates.indexOf(game.gameState) > -1) {
      unsubscribeEvents(["play", "playedresult"])
    }
  }

  render() {
    const { gameState } = this.props.game
    let result = null;

    switch (gameState) {
      case gameStates.ready:
        result = <GameStartPage />
        break;
      case gameStates.busy:
        result = <GameEndPage messageText={"Game is busy, someone else is playing. "} />
        break;
      case gameStates.userDisconnected:
        result = <GameEndPage messageText={"The other player left the game."} />
        break;
      case gameStates.starting:
        result = <GameStartingPage />
        break;
      case gameStates.win:
        result = <GameEndPage messageText={"You won!"} />
        break;
      case gameStates.lose:
        result = <GameEndPage messageText={"You lose..."} />
        break;
      default:
        result = <GamePlayingPage />
    }

    return (
      <main className={this.props.className}>
        {result}
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(start),
  unsubscribeEvents: events => {
    events.map(event =>
      dispatch(unsubscribeEvent({ event }))
    )
  }
})

const mapStateToProps = state => ({
  game: state.game
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export const gameStates = {
  ready: "ready",
  busy: "busy",
  starting: "starting",
  waiting: "waiting",
  playing: "playing",
  win: "win",
  lose: "lose",
  userDisconnected: "user disconnected"
}
const resetterEndStates = ["win", "lose", "user disconnected"]