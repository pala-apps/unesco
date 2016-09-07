
import React from 'react'
// import MapGL from 'react-map-gl';
import GoogleMap from 'google-map-react';
import SiteMarker from './SiteMarker.jsx'

const SiteMap = ( props )=>{
  const markers = props.sites.map((site)=>{
     return <SiteMarker name={site.name_en} key={site.unique_number} lat={site.latitude} lng={site.longitude} text={'A'} />
  })

  console.log('markers', markers)
  return(
    <GoogleMap
     center={ {lat: props.center.latitude, lng: props.center.longitude} }
     zoom={5}>
     {markers}
    </GoogleMap>
  )
}

SiteMap.defaultProps = { center: {latitude:1, longitude:1} };

export default SiteMap
