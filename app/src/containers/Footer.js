
import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = state => ({
  gameState: state.game.gameState
})

export default connect(
  mapStateToProps
)(Footer)
