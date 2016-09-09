import React from 'react'

function SiteHeader( {site, onClick, showingDetails} ){
  let mapButtonText = "More info"
  if( showingDetails ){
    mapButtonText = "See on map"
  }
  return(
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="panel-body-content">
          <div className="media">
            <div className="media-body">
              <h3 className="media-heading"> { site.name_en } </h3>
              <small>{ site.states_name_en }</small>
              <div className="">
              <button onClick={onClick}> {mapButtonText} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader
