import React from 'react'
import ViewFocusLink from './ViewFocusLink'

function SiteHeader( {site, showingDetails, onToggleView, showingMap} ){
  let distanceText = "Getting user location..."
  if( site.distance ) {
    distanceText = `${ ( site.distance  / 1000 ).toFixed(2) } km away`
  }

  let toggleButton = null
  if(onToggleView){
    if(showingMap){
      toggleButton = <ViewFocusLink
                        view="detail"
                        siteId= { site.unique_number }
                      >
                        <button className="btn btn-default btn-default-split">
                            <i className="fa fa-info-circle"></i>
                            <span className="text-small text-muted"> Site info </span>
                        </button>
                      </ViewFocusLink>
    }else{
      toggleButton = <ViewFocusLink
                        className="btn btn-default btn-default-split"
                        view="map"
                        siteId= { site.unique_number }
                      >
                        <button className="btn btn-default btn-default-split">
                          <i className="fa fa-map-marker"></i>
                          <span className="text-small text-muted"> See on map </span>
                        </button>
                     </ViewFocusLink>
    }
  }

  const categeoryToIconName = {
    C: "university",
    N: "leaf",
    "C/N": "globe"
  }

  return(
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="panel-body-content">
          <div className="media">
            <div className="media-body">
              <div className="row">
                <div className="col-xs-9">
                  <h3 className="media-heading"> { site.name_en } </h3>
                  <div className="text-muted text-small">{ distanceText }</div>
                  <small className="text-blue">{ site.states_name_en }</small>
                </div>
                <div className="col-xs-3">
                  <div className="icon-round">
                    <i className={"fa fa-"+categeoryToIconName[site.category_short]}></i>
                  </div>
                  <div className="text-small text-muted text-right">{ site.category }</div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-body-footer">
          { toggleButton }
        </div>
      </div>
    </div>
  )
}

export default SiteHeader

// if(showingMap){
//   toggleButton = <button className="btn btn-default btn-default-split" onClick={onToggleView}>
//                     <i className="fa fa-info-circle"></i>
//                     <span className="text-small text-muted"> Site info </span>
//                   </button>
// }else{
//   toggleButton = <button className="btn btn-default btn-default-split" onClick={onToggleView}>
//                   <i className="fa fa-map-marker"></i>
//                   <span className="text-small text-muted"> See on map </span>
//                  </button>
// }
