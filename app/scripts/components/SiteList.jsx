import React from 'react'
import SiteItem from './SiteItem'
import SiteHeader from './SiteHeader'



let SiteList = ( props ) => {
  const panels = props.sites.map( (site) => {
    return (
      <div key={site.unique_number} onClick={ () => { props.onPanelClick( site ) } }>
        <SiteHeader
          site={ site }
          onClick={ ()=>{ props.onPanelClick(site)} }
          showingDetails={false} />
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
