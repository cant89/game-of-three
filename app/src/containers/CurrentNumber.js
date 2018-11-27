
import React from 'react'
import { connect } from 'react-redux'
import CurrentNumber from '../components/CurrentNumber'

const mapStateToProps = state => ({
  num: state.game.num
})

export default connect(
  mapStateToProps
)(CurrentNumber)
