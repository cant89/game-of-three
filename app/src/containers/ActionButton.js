
import { connect } from 'react-redux'
import { play } from '../actions'
import CircularButton from '../components/CircularButton'

const mapStateToProps = state => {
  return { gameState: state }
}

const mapDispatchToProps = dispatch => ({
  onClick: action => dispatch(play({
    event: "played",
    data: { action }
  }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CircularButton)