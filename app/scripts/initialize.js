import swi from './service_worker_init'
swi()

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import dummyReducer  from './reducers'
import DummyContainer from './components/DummyContainer'
import { Provider } from 'react-redux'
let store = createStore(dummyReducer);


render(
  <Provider store={store}>
    <DummyContainer/>
  </Provider>,
  document.getElementById('app')
);
