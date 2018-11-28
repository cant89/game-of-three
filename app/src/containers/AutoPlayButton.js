import AutoPlayButton from '../components/AutoPlayButton'
import { connect } from 'react-redux'
import { play } from '../actions'

const mapStateToProps = ({ game: { gameState, num } }) => ({
  gameState,
  num
})

const mapDispatchToProps = dispatch => ({
  autoPlay: action => dispatch(play({
    event: "played",
    data: { action }
  }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoPlayButton)