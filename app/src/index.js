import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import reducers from './reducers'
import thunk from 'redux-thunk';
import socketioMiddleware from './middlewares/socketio'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  game: {
    moves: [],
    gameState: "ready"
  }
}

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunk,
      socketioMiddleware('http://localhost:3001')
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
