import React from 'react'

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
      <button className={ classC } onClick={() => { props.filterSites( "C" ) }}>Cultural</button>
      <button className={ classAll } onClick={() => { props.filterSites( null ) }}>All</button>
      <button className={ classN } onClick={() => { props.filterSites( "N" ) }}>Natural</button>
    </div>
  )
}

export default SiteFilter
