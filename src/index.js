import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'

import App from './components/App'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>
  ,document.querySelector('.container')
);
