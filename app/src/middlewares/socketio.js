import io from 'socket.io-client';

export default function socketioMiddleware(host) {
  const socket = io(host);

  return ({ dispatch }) => next => action => {
    if (typeof action === 'function') {
      return next(action);
    }

    const {
      event,
      emit,
      leave,
      isOnce,
      handle,
      data,
      ...rest
    } = action;
    
    if (!event) {
      return next(action);
    }

    if (leave) {
      return socket.removeListener(event);
    }

    if (emit) {
      return socket.emit(event, data || {})
    }

    let handleEvent = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = data => {
        dispatch({
          type: `${handle}:${event.toUpperCase()}`,
          ...data,
          ...rest
        });
      }
    }
    return isOnce
      ? socket.once(event, handleEvent)
      : socket.on(event, handleEvent)
  };
}