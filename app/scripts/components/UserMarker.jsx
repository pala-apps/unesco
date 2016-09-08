import React, {PropTypes, Component} from 'react';

const UserMarker = (props)=>{
  return(
    <div onClick={ () => { props.onMarkerClick( props.site ) } } className="marker">
      <div className="marker-circle-user"></div>
    </div>
  )
}

export default UserMarker
