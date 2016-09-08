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

  const getFocusedSite=(sites, id)=>{
    if(!id){return null}
    return sites.find((site)=>{
      return site.unique_number === id
    })
  }

  let mainDisplay = null


  if(props.showMap){
    mainDisplay = <SiteMap
      sites={ props.sites }
      userCenter={ props.userLocation }
      focusedSite={ getFocusedSite(props.sites, props.focusedSiteId) }
      onMarkerClick={ focusOnSite }
    />
  }
  else{
    if(props.focusedSiteId){
      mainDisplay = <SiteFocused site={ getFocusedSite(props.sites, props.focusedSiteId) } onReturnClick={ removeFocus } />
    }else{
      const displaySites = props.sites.slice(0,100)
      mainDisplay = <SiteList sites={ displaySites } onPanelClick={ focusOnSite } />
    }

  }

  return(
    <div style= {{width:'100%', height:'500px'}}>
      <Nav onClickList={displayList} onClickMap={displayMap}/>
      { mainDisplay }
    </div>
  )
}


export default connect( state => state )( AppContainer )
