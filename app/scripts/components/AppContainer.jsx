import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

import actions from '../actions/actions'

const AppContainer = ( props ) => {
  return(
    <div className="app-content">
      { props.children }
      <Nav
        hasSite={ !!props.siteId }
        view={ props.view }
      />
    </div>
  )
}

const mapStateToProps = (state, {params, location})=>{
  return {
    siteId: params.siteId || null,
    view: location.pathname.split('/')[1]
  }
}

export default connect( mapStateToProps )( AppContainer )
