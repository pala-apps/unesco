import swi from './service_worker_init'
swi()

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import sitesReducer  from './reducers'
import AppContainer from './components/AppContainer'
import { Provider } from 'react-redux';
import actions from './actions/actions'
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

import SiteList from './components/SiteList';
import SiteMap from './components/SiteMap';
import SiteFocused from './components/SiteFocused';

let store = createStore(sitesReducer, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRedirect to="/list/all" />
        <Route path='list(/:filter)' component={SiteList} view="list"/>
        <Route path='map(/:filter)(/:siteId)' component={SiteMap} view="map"/>
        <Route path='detail/site/:siteId' component={SiteFocused} view="detail"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

function getLocation() {
  locationFromCache();
  navigator.geolocation.getCurrentPosition( locationSuccess )
}

function locationSuccess( location ) {
  const userPosition = {latitude:location.coords.latitude, longitude:location.coords.longitude }
  store.dispatch( actions.setUserLocation( userPosition ) )
  localStorage.setItem( 'userPosition', JSON.stringify( userPosition ))
}

function locationFromCache() {
  const lastUserPosition = localStorage.getItem( 'userPosition' );
  if (lastUserPosition) {
    store.dispatch( actions.setUserLocation( JSON.parse( lastUserPosition ) ) )
  }
}

let request = new XMLHttpRequest();
request.open("GET", "/data/sites.json")
request.onload = function(){
  const sites = JSON.parse( request.responseText );
  store.dispatch( actions.addSites( sites ) );
  getLocation()
}
request.send();
