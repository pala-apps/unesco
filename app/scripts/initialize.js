import swi from './service_worker_init'
swi()

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import sitesReducer  from './reducers'
import AppContainer from './components/AppContainer'
import { Provider } from 'react-redux';
import actions from './actions/actions'
let store = createStore(sitesReducer);

render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('app')
);

let request = new XMLHttpRequest();
console.log("setting of request")
request.open("GET", "data/sites.json")
request.onload = function(){
  // console.log("got the stites", request.responseText );
  const sites = JSON.parse( request.responseText );
  store.dispatch( actions.addSites( sites ) )
}
request.send();
