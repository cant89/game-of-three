import { connect } from 'react-redux'
import MovesList from '../components/MovesList'

const mapStateToProps = ({ game }) => ({
  list: game.moves,
  gameState: game.gameState
})

export default connect(
  mapStateToProps
)(MovesList);