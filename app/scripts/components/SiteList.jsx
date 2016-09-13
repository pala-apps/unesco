import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFilter from './SiteFilter'

let SiteList = ( props ) => {
  const panels = props.sites.map( (site) => {
    return (
      <div key={site.unique_number} onClick={ () => { props.onPanelClick( site ) } }>
        <SiteHeader
          site={ site }
        />
      </div>
    )
  })

  return (
    <div className="container">
      <SiteFilter filterSites={ props.filterSites } />
      { panels }
    </div>
  )

}

export default SiteList
