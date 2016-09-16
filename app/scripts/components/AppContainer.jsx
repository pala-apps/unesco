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
      />
    </div>
  )
}

const mapStateToProps = (state, {params})=>{
  return {
    siteId: params.siteId || null,
  }
}

export default connect( mapStateToProps )( AppContainer )
