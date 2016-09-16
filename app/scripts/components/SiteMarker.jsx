import React, {PropTypes, Component} from 'react';
import RouteLink from './RouteLink'

const SiteMarker = (props)=>{
  return(
    <RouteLink path={ `/map/site/${props.site.unique_number}` } >
      <div className="marker">
        <div className="marker-circle"></div>
        <div className="marker-triangle"></div>
      </div>
    </RouteLink>
  )
}

export default SiteMarker
