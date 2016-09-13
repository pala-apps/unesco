import React from 'react'

let SiteFilter = ( props ) => {

  return (
    <div>
    <button onClick={() => { props.filterSites( "C" ) }}>Cultural</button>
      <button onClick={() => { props.filterSites( null ) }}>All</button>
      <button onClick={() => { props.filterSites( "N" ) }}>Natual</button>
    </div>
  )

}

export default SiteFilter
