
import React from 'react'
// import MapGL from 'react-map-gl';
import GoogleMap from 'google-map-react';
import SiteMarker from './SiteMarker.jsx'

const createMapOptions = (maps)=>{
    return {
      // panControl: false,
      // mapTypeControl: false,
      // scrollwheel: false,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    }
  }

const SiteMap = ( props )=>{
  const markers = props.sites.map((site)=>{
     return <SiteMarker name={site.name_en} key={site.unique_number} lat={site.latitude} lng={site.longitude} text={'A'} />
  })

  console.log('markers', markers)
  return(
    <GoogleMap
     options= { createMapOptions }
     center={ {lat: props.center.latitude, lng: props.center.longitude} }
     zoom={5}>
     {markers}
    </GoogleMap>
  )
}

SiteMap.defaultProps = { center: {latitude:1, longitude:1} };

export default SiteMap
