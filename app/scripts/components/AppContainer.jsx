import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import SiteList from './SiteList'
import SiteFocused from './SiteFocused'
import SiteMap from './SiteMap'

import actions from '../actions/actions'



const AppContainer = ( props ) => {

  const removeFocus = ()=>{
    props.dispatch( actions.setFocusedSite( null ) )
  }
  const focusOnSite = ( site )=>{
    props.dispatch( actions.setFocusedSite(site.unique_number) )
  }

  let mainDisplay = null
  const displaySites = props.sites.slice(0,100)
  mainDisplay = <SiteMap center={props.userLocation} sites={displaySites}></SiteMap>
  // if(props.focusedSiteId){
  //   const focusedSite = props.sites.find((site)=>{
  //     return site.unique_number === props.focusedSiteId
  //   })
  //   mainDisplay = <SiteFocused site={ focusedSite } onReturnClick={ removeFocus } />
  // }else{
  //   const displaySites = props.sites.slice(0,100)
  //   mainDisplay = <SiteList sites={ displaySites } onPanelClick={ focusOnSite } />
  // }

  return(
    <div style= {{width:'100%', height:'100vh'}}>
      <Nav />
      { mainDisplay }
    </div>
  )
}


export default connect( state => state )( AppContainer )
