import React from 'react'
import { connect } from 'react-redux'
import { start } from '../actions'
import Button from '../components/Button'

const StartButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
)

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(start)
})

export default connect(
  null,
  mapDispatchToProps
)(StartButton)
