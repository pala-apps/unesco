import React from 'react'
import RouteLink from './RouteLink'

let SiteFilter = ( props ) => {

  return (
    <div className="btn-group">
      <RouteLink path={ `/${props.view}/cultural` } classes="btn btn-split" activeClass="btn-split-chosen"> Cultural </RouteLink>
      <RouteLink path={ `/${props.view}/all` } classes="btn btn-split" activeClass="btn-split-chosen"> All </RouteLink>
      <RouteLink path={ `/${props.view}/natural` } classes="btn btn-split" activeClass="btn-split-chosen"> Natural </RouteLink>
    </div>
  )
}

export default SiteFilter
