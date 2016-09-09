import React from 'react'

function SiteHeader( {site, onClickClose, showingDetails, onToggleView, showingMap} ){
  let distanceText = "Getting user location..."
  if( site.distance ) {
    distanceText = `${ ( site.distance  / 1000 ).toFixed(2) } km away`
  }

  let closeButton = null
  if(onClickClose){
    closeButton = <button className="btn btn-warning btn-default btn-default-split go-right" onClick={onClickClose}>
                    <i className="fa fa-times-circle"></i>
                    <span className="text-small text-muted"> Close</span>
                  </button>
  }
  let toggleButton = null
  if(onToggleView){
    if(showingMap){
      toggleButton = <button className="btn btn-default btn-default-split" onClick={onToggleView}>
                        <i className="fa fa-info-circle"></i>
                        <span className="text-small text-muted"> Site info</span>
                      </button>
    }else{
      toggleButton = <button className="btn btn-default btn-default-split" onClick={onToggleView}>
                      <i className="fa fa-map-marker"></i>
                      <span className="text-small text-muted"> See on map</span>
                     </button>
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
                <div className="col-md-9 col-xs-9">
                  <h3 className="media-heading"> { site.name_en } </h3>
                  <div className="text-muted text-small">{ distanceText }</div>
                  <small className="text-blue">{ site.states_name_en }</small>
                </div>
                <div className="col-md-3 col-xs-3">
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
          { closeButton }
          { toggleButton }
        </div>
      </div>
    </div>
  )
}

export default SiteHeader
