// import swi from './service_worker_init'
// swi()

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import sitesReducer  from './reducers'
import AppContainer from './components/AppContainer'
import { Provider } from 'react-redux';
import actions from './actions/actions'
let store = createStore(sitesReducer, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('app')
);

function getLocation() {
  navigator.geolocation.getCurrentPosition( locationSuccess )
}

function locationSuccess( location ) {
  store.dispatch( actions.setUserLocation( {latitude:location.coords.latitude, longitude:location.coords.longitude } ) )
}

let request = new XMLHttpRequest();
request.open("GET", "data/sites.json")
request.onload = function(){
  const sites = JSON.parse( request.responseText );
  store.dispatch( actions.addSites( sites ) )
  getLocation()
}
request.send();
