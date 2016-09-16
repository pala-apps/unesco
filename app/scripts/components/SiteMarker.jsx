import React, {PropTypes, Component} from 'react';
import MapLink from './MapLink'

const SiteMarker = (props)=>{
  return(
    <MapLink siteId={props.site.unique_number}>
      <div className="marker">
        <div className="marker-circle"></div>
        <div className="marker-triangle"></div>
      </div>
    </MapLink>
  )
}

export default SiteMarker
