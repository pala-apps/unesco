import React from 'react'

function SiteHeader( {site, onClick, showingDetails} ){
  let mapButtonText = "More info"
  if( showingDetails ){
    mapButtonText = "See on map"
  }
  return(
    <div className="media">
      <div className="media-body">
        <h3 className="media-heading"> { site.name_en } </h3>
        <small>{ site.states_name_en }</small>
        <ul>
          <li>Date Inscribed: { site.date_inscribed }</li>
          <li>Category: { site.category }</li>
          <li>Hectares: { site.area_hectares }</li>
        </ul>
        <button onClick={onClick}> {mapButtonText} </button>
      </div>
    </div>
  )
}

export default SiteHeader
