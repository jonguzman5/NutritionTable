import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider list={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
