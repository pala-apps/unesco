import React, {PropTypes, Component} from 'react';

import {greatPlaceStyle} from './SiteMarkerStyles.js';

const SiteMarker = (props)=>{
  return(
    <div style={greatPlaceStyle}>
        { props.name }  
    </div>
  )
}

export default SiteMarker
