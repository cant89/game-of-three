import { connect } from 'react-redux'
import MovesList from '../components/MovesList'

const mapStateToProps = state => ({
  list: state.game.moves
})

export default connect(
  mapStateToProps
)(MovesList);