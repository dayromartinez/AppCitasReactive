import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, connect } from 'react-redux';
import store from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);