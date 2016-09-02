import React from 'react'
import SiteItem from './SiteItem'

let SiteList = ( { sites } ) => {

  const panels = sites.map( (site) => {
    return ( <SiteItem key={site.id} site={ site } /> )
  })

  return (
    <div className="container">
      { panels }
    </div>
  )

}

export default SiteList
