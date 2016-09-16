import React from 'react'
import { Link } from 'react-router'

const ViewFocusLink = ({ view,siteId, children }) =>(
  <Link
    to={ `/${view}/site/${siteId}` }
    activeStyle={{
      color: 'red'
    }}
  >
    {children}
  </Link>
)

export default ViewFocusLink;
