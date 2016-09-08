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

  const displayMap =()=>{
    console.log("displaying map")
    props.dispatch( actions.toggleMap(true) )
  }

  const displayList=()=>{
    console.log("displaying list")
    props.dispatch( actions.toggleMap(false) )
  }

  let mainDisplay = null
  if(props.focusedSiteId){
    const focusedSite = props.sites.find((site)=>{
      return site.unique_number === props.focusedSiteId
    })
    mainDisplay = <SiteFocused site={ focusedSite } onReturnClick={ removeFocus } />
  }else{
    const displaySites = props.sites.slice(0,100)
    if(props.showMap){
      mainDisplay = <SiteMap  sites={displaySites} center={props.userLocation} />
    }
    else{
      mainDisplay = <SiteList sites={ displaySites } onPanelClick={ focusOnSite } />
    }
  }

  return(
    <div style= {{width:'100%', height:'100vh'}}>
      <Nav onClickList={displayList} onClickMap={displayMap}/>
      { mainDisplay }
    </div>
  )
}


export default connect( state => state )( AppContainer )
