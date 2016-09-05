import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import SiteList from './SiteList'
import SiteFocused from './SiteFocused'

import actions from '../actions/actions'

// import {bindActionCreators} from 'redux'

let AppContainer = ( props ) => {

  const focusOnSite = ( site )=>{
    props.dispatch( actions.setFocusedSite(site.unique_number) )
  }
  console.log('rendering')
  let mainDisplay = null
  if(props.focusedSiteId){
    const focusedSite = props.sites.find((site)=>{
      return site.unique_number === props.focusedSiteId
    })
    console.log('focused Site', focusedSite)
    mainDisplay = <SiteFocused site={ focusedSite } onPanelClick={ focusOnSite } />
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

// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

AppContainer = connect( state => state )( AppContainer )

export default AppContainer
