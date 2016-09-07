
import React from 'react'
// import MapGL from 'react-map-gl';
import GoogleMap from 'google-map-react';
import SiteMarker from './SiteMarker.jsx'

const SiteMap = ( props )=>{
  const markers = props.sites.map((site)=>{
     return <SiteMarker key={site.unique_number} lat={site.latitude} lng={site.longitude} text={'A'} />
  })

  console.log('markers', markers)
  return(
    <GoogleMap
     defaultCenter={ {lat: 59.938043, lng: 30.337157} }
     defaultZoom={9}>
     {markers}
    </GoogleMap>
  )
}

export default SiteMap
