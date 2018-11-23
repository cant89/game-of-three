import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import reducers from './reducers'
// import * as serviceWorker from './serviceWorker';

const initialState = {    
    moves: [],
    gameState: "ready"
}

const store = createStore(reducers, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
