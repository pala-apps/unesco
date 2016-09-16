import React from 'react'
import RouteLink from './RouteLink'

function SiteHeader( {site, showingDetails, canToggle, showingMap} ){
  let distanceText = "Getting user location..."
  if( site.distance ) {
    distanceText = `${ ( site.distance  / 1000 ).toFixed(2) } km away`
  }

  let toggleButton = null
  if(canToggle){
    if(showingMap){
      toggleButton = <RouteLink
                        view="detail"
                        path={ `/detail/site/${site.unique_number}` }
                      >
                        <button className="btn btn-default btn-block">
                            <i className="fa fa-info-circle"></i>
                            <span className="text-small text-muted"> Site info </span>
                        </button>
                      </RouteLink>
    }else{
      toggleButton = <RouteLink
                        className="btn btn-default btn-block"
                        view="map"
                        path={ `/map/site/${site.unique_number}` }
                      >
                        <button className="btn btn-default btn-block">
                          <i className="fa fa-map-marker"></i>
                          <span className="text-small text-muted"> See on map </span>
                        </button>
                     </RouteLink>
    }
  }

  const categeoryToIconName = {
    C: "university",
    N: "leaf",
    "C/N": "globe"
  }

  const countries = site.states_name_en.split(',').join(', ');

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
                  <small className="text-blue">{ countries }</small>
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
