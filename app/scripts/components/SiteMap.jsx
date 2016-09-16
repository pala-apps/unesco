import React from 'react'
import GoogleMap from 'google-map-react';
import SiteMarker from './SiteMarker.jsx';
import UserMarker from './UserMarker.jsx';
import SiteHeader from './SiteHeader.jsx';
import Animation from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { getFocusedSite } from '../focused_site_helpers/focused_site_helpers.js'


const createMapOptions = (maps)=>{
    return {
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    }
  }

const SiteMap = ( props )=>{

  const markers = props.sites.slice(0,50).map((site)=>{
     return <SiteMarker
      key={site.unique_number}
      site={site}
      lat={site.latitude}
      lng={site.longitude}
      onMarkerClick={props.onMarkerClick}
    />
  })

  let siteInfo = null
  let center = {lat: props.userCenter.latitude, lng: props.userCenter.longitude}
  if(props.focusedSite){
    siteInfo = (
      <div className="panel-animate-top">
      <SiteHeader
        site={props.focusedSite}
        showingMap={true}
        canToggle={true}
      />
      </div>
    )
    center = {lat: props.focusedSite.latitude, lng: props.focusedSite.longitude}
  }

  return(
      <div className="map">
        <GoogleMap
        bootstrapURLKeys={{
          key: "AIzaSyDGZ1kk00sBmLijYR0pArzDkW4ybT09GA0"
        }}
         options= { createMapOptions }
         center={ center }
         zoom={5}>
         {markers}
         <UserMarker
           lat={props.userCenter.latitude}
           lng={props.userCenter.longitude}
          />
        </GoogleMap>
        <Animation
          transitionName="slide-top"
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 300 }
          >
        { siteInfo }
        </Animation>
      </div>
  )
}

SiteMap.defaultProps = { userCenter: {latitude:1, longitude:1} };

const mapStateToProps = (state, { params, route } )=>{
  return {
    sites: state.sites,
    view: route.view,
    filter: params.filter,
    userCenter: state.userLocation,
    focusedSite: getFocusedSite(state.sites, params.siteId)
  }
}

export default connect( mapStateToProps )( SiteMap )
