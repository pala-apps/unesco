import React from 'react'
import RouteLink from './RouteLink'
import { browserHistory } from 'react-router';

let Nav = ({ hasSite }) => {

  let navHeader = <a href="/" className="brand">
                    UNESCO
                  </a>

  if ( hasSite ) {
      navHeader = <button className="btn btn-simple" onClick={ browserHistory.goBack }>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    Back
                  </button>
  }


  return(
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        { navHeader }
      </div>
      <div className="navbar-right">
        <div className="btn-toggle">
          <RouteLink path="/list/all" classes="btn btn-toggle-left" activeClass="btn-background">
            <i className="fa fa-list-ul" aria-hidden="true"></i>
          </RouteLink>
          <RouteLink path="/map" classes="btn btn-toggle-right" activeClass="btn-background">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </RouteLink>
        </div>
      </div>
    </nav>
  )

}

export default Nav
