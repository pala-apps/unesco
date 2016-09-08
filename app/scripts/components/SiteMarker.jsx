import React, {PropTypes, Component} from 'react';

const SiteMarker = (props)=>{
  return(
    <div onClick={ () => { props.onMarkerClick( props.site ) } } className="marker">
      <div className="marker-circle"></div>
      <div className="marker-triangle"></div>
    </div>
  )
}

export default SiteMarker
