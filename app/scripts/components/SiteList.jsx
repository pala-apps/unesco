import React from 'react'
import SiteItem from './SiteItem'

let SiteList = ( props ) => {
  const panels = props.sites.map( (site) => {
    return ( <SiteItem key={site.unique_number} site={ site } onPanelClick={ props.onPanelClick } /> )
  })

  return (
    <div className="container">
      { panels }
    </div>
  )

}

export default SiteList
