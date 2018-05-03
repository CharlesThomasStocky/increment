import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //FUCKING DEFAULT
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; 
import { incre } from './reducers/incReducers.js'; //FUCKING NAMED 
import { combineReducers, createStore } from 'redux';

console.log(typeof(incre))

const store = createStore({
  incre
}) 

store.dispatch({
  type: 'INCRE',
});

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();
