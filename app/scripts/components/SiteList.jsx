import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFilter from './SiteFilter'
import { AutoSizer, VirtualScroll } from 'react-virtualized';
import RouteLink from './RouteLink';
import { connect } from 'react-redux';

let SiteList = ( props ) => {
  const panels = props.sites.map( (site) => {
    const large = site.name_en > 50
    return (
      <div className="full-height" key={site.unique_number}>
        <RouteLink path={ `/detail/site/${site.unique_number}` } siteId={site.unique_number} view={props.view} >
          <SiteHeader
            large={ large }
            site={ site }
            canToggle={false}
          />
        </RouteLink>
      </div>
    )
  })

  return (
    <div className="container">
      <SiteFilter filter={props.filter} view={props.view} />
      <VirtualScroll
        width={100}
        height={800}
        rowHeight={180}
        rowCount={panels.length}
        rowRenderer={
          ({ index }) => panels[index] // Could also be a DOM element
        }
      />
    </div>
  )

}


const filterSites = (sites, filter) => {
  if ( filter === 'all' ) {
    return sites
  }

  return sites.filter( ( site ) => {
    return site.category.toLowerCase() === filter
  })
}

const mapStateToProps = (state, { params, route } )=>{
  return {
    sites: filterSites( state.sites, params.filter ),
    view: route.view,
    filter: params.filter
  }
}

export default connect( mapStateToProps )( SiteList )
