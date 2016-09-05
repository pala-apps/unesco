import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import SiteList from './SiteList'
import SiteFocused from './SiteFocused'

import actions from '../actions/actions'



const AppContainer = ( props ) => {

  const removeFocus = ()=>{
    props.dispatch( actions.setFocusedSite( null ) )
  }
  const focusOnSite = ( site )=>{
    props.dispatch( actions.setFocusedSite(site.unique_number) )
  }

  let mainDisplay = null
  if(props.focusedSiteId){
    const focusedSite = props.sites.find((site)=>{
      return site.unique_number === props.focusedSiteId
    })
    mainDisplay = <SiteFocused site={ focusedSite } onReturnClick={ removeFocus } />
  }else{
    mainDisplay = <SiteList sites={ props.sites } onPanelClick={ focusOnSite } />
  }

  return(
    <div>
      <Nav />
      { mainDisplay }
    </div>
  )
}


export default connect( state => state )( AppContainer )
