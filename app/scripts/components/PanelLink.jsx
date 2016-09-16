import React from 'react'
import { Link } from 'react-router'

const PanelLink = ({ siteId, children, view }) =>(
  <Link
    to={ `/detail/site/${siteId}` }
    activeStyle={{
      color: 'red'
    }}
  >
    {children}
  </Link>
)

export default PanelLink;
