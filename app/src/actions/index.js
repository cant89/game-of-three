const NEW_EVENT = "NEW_EVENT"
export const subscribeEvent = ({ event, isOnce = false }) => ({
  event,
  handle: NEW_EVENT,
  isOnce
})

export const emitEvent = ({ event, data = {} }) => ({
  event,
  emit: true,
  data
})

export const unsubscribeEvent = ({ event }) => ({
  event,
  leave: true
})

export const play = ({ event, data = {} }) => dispatch => {
  dispatch(emitEvent({ event, data }))
}

export const start = dispatch => {
  dispatch(subscribeEvent({ event: "starting", isOnce: true }))
  dispatch(subscribeEvent({ event: "busy", isOnce: true }))
  dispatch(subscribeEvent({ event: "end", isOnce: true }))
  dispatch(subscribeEvent({ event: "play" }))
  dispatch(subscribeEvent({ event: "playedresult" }))
  dispatch(emitEvent({ event: "start" }))
}
