import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from '../src/container/Home/Home';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


// initial state
const globalState = {
  totalOrder: 0
}

// reducer
const rootReducer = (state = globalState, action) => {
  if(action.type === 'ADD_ORDER') {
    return {
      totalOrder: state.totalOrder + 1
    }
  }
  if(action.type === 'MINUS_ORDER') {
    if(state.totalOrder > 0) {
      return {
        totalOrder: state.totalOrder - 1
      }
    }
  }

  return state;
}

// store
const storeRedux = createStore(rootReducer);

ReactDOM.render(
    <Provider store={storeRedux}>
      <Home></Home>
    </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
