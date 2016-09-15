import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFilter from './SiteFilter'
import { AutoSizer, VirtualScroll } from 'react-virtualized';


let SiteList = ( props ) => {
  const panels = props.sites.map( (site) => {
    const large = site.name_en > 50
    return (
      <div className="full-height" key={site.unique_number} onClick={ () => { props.onPanelClick( site ) } }>
        <SiteHeader
          large={ large }
          site={ site }
        />
      </div>
    )
  })

  return (
    <div className="container">
      <SiteFilter filter={props.filter} filterSites={ props.filterSites } view={props.view} />
      <VirtualScroll
        width={100}
        height={800}
        rowHeight={165}
        rowCount={panels.length}
        rowRenderer={
          ({ index }) => panels[index] // Could also be a DOM element
        }
      />
    </div>
  )

}

export default SiteList
