import React from 'react'
import { Link } from 'react-router'

const MapLink = ({ siteId, children }) =>(
  <Link
    to={ `/map/site/${siteId}` }
    activeStyle={{
      color: 'red'
    }}
  >
    {children}
  </Link>
)

export default MapLink;
