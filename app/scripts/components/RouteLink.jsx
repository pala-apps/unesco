import React from 'react'
import { Link } from 'react-router'

const RouteLink = ({ children, path, classes, activeClass }) =>(
  <Link
    to={ path }
    className={ classes }
    activeClassName={ activeClass }
  >
    {children}
  </Link>
)

export default RouteLink;
