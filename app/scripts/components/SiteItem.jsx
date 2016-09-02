import React from 'react';

let SiteItem = ( { site } ) => {

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="panel-body-content">
        
          <div className="media">
            <div className="media-body">
              <h3 className="media-heading"><a href="#">{ site.name }</a></h3>
              <small>{ site.country }</small>
              <ul>
                <li>Date Inscribed: { site.date_inscribed }</li>
                <li>Category: { site.category }</li>
                <li>Hectares: { site.hectares }</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}

export default SiteItem
