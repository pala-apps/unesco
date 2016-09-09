import React from 'react'
import SiteItem from './SiteItem'
import SiteHeader from './SiteHeader'



let SiteList = ( props ) => {
  const panels = props.sites.map( (site) => {
    return (
      <div key={site.unique_number} className="panel panel-default" onClick={ () => { props.onPanelClick( site ) } }>
        <div className="panel-body">
          <div className="panel-body-content">
            <SiteHeader
              site={ site }
              onClick={ ()=>{ props.onPanelClick(site)} }
              showingDetails={false} />
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      { panels }
    </div>
  )

}

export default SiteList
