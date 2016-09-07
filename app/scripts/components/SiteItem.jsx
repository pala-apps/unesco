import React from 'react';

let SiteItem = ( props ) => {
  const site = props.site
  return (
    <div className="panel panel-default" onClick={ () => { props.onPanelClick( site ) } }>
      <div className="panel-body">
        <div className="panel-body-content">

          <div className="media">
            <div className="media-body">
              <h3 className="media-heading"> { site.name_en } </h3>
              <small>{ site.states_name_en }</small>
              <ul>
                <li>Date Inscribed: { site.date_inscribed }</li>
                <li>Category: { site.category }</li>
                <li>Hectares: { site.area_hectares }</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}

export default SiteItem
