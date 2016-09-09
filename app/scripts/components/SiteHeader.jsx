import React from 'react'

function SiteHeader( {site, onClickClose, showingDetails} ){
  let closeButton = null
  if(onClickClose){
    closeButton = <button onClick={onClickClose}> Close X </button>
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
                { closeButton }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader
