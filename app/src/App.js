import React, { Component } from 'react';
import { connect } from 'react-redux'
import StartButton from './containers/StartButton'
import MovesList from './containers/MovesList'
import Footer from './components/Footer'
import { start, unsubscribeEvent } from './actions'

import GameErrorPage from './pages/GameError'

const resetterEndStates = ["win", "lose", "user disconnected"]

class App extends Component {

  componentDidUpdate() {
    const { game, unsubscribeEvents } = this.props
    if (resetterEndStates.indexOf(game.gameState) > -1) {
      unsubscribeEvents(["play", "playedresult" ])
    }
  }

  render() {
    if (!this.props.game) {
      return (<div>Loading...</div>)
    }

    const { gameState, moves } = this.props.game

    if (gameState === "busy") {
      return <GameErrorPage messageText={"Game is busy, someone else is playing. "} />

    } else if (gameState === "user disconnected") {
      return <GameErrorPage messageText={"The other player left the game."} />

    } else if (gameState === "starting") {
      return <div>Waiting for other player...</div>

    } else {
      return (<div>
        <StartButton />
        <MovesList list={moves} />
        <Footer />
      </div>)
    }
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
