import React from 'react'
import FilterLink from './FilterLink'

let SiteFilter = ( props ) => {

  const filter = props.filter

  let classN = "btn btn-split"
  let classAll = "btn btn-split"
  let classC = "btn btn-split"

  if( !filter ) {
    classAll += " btn-split-chosen"
  }

  if( filter === "N") {
    classN += " btn-split-chosen"
  }

  if( filter === "C") {
    classC += " btn-split-chosen"
  }

  return (
    <div className="btn-group">
      <FilterLink filter="cultural"> Cultural </FilterLink>
      <FilterLink filter="all"> All </FilterLink>
      <FilterLink filter="natural"> Natural </FilterLink>
    </div>
  )
}

export default SiteFilter

{/*<button className={ classC } onClick={() => { props.filterSites( "C" ) }}>Cultural</button>
<button className={ classAll } onClick={() => { props.filterSites( null ) }}>All</button>
<button className={ classN } onClick={() => { props.filterSites( "N" ) }}>Natural</button>*/}
