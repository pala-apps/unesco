import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import SiteList from './SiteList'

let AppContainer = ( state, { dispatch }) => {

  return(
    <div>
      <Nav />
      <SiteList sites={ state.sites } />
    </div>
  )
}

AppContainer = connect( state => state )( AppContainer )

export default AppContainer
