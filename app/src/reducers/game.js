const game = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'NEW_EVENT:STARTING':
      return {
        ...state,
        gameState: "starting"
      }
    case 'NEW_EVENT:PLAY':
      return {
        ...state,
        moves: action.prevNum !== undefined && action.action !== undefined
          ? [...state.moves, {
            ...action,
            mine: false
          }]
          : state.moves,
        num: action.num,
        gameState: "playing"
      }
    case 'NEW_EVENT:PLAYEDRESULT':
      return {
        ...state,
        moves: action.prevNum !== undefined && action.action !== undefined
          ? [...state.moves, {
            ...action,
            mine: true
          }]
          : state.moves,
        num: action.num,
        gameState: "waiting"
      }
    case 'NEW_EVENT:END':
      return {
        moves: [],
        gameState: action.gameState
      }
    case 'NEW_EVENT:BUSY':
      return {
        ...state,
        gameState: "busy"
      }
    default:
      return state
  }
}

export default game


