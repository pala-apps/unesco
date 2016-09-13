import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFilter from './SiteFilter'
import { AutoSizer, VirtualScroll } from 'react-virtualized';


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
      <VirtualScroll
        width={100}
        height={800}
        rowHeight={150}
        rowCount={panels.length}
        rowRenderer={
          ({ index }) => panels[index] // Could also be a DOM element
        }
      />
    </div>
  )

}

export default SiteList
