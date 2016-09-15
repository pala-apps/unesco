import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children, view }) =>(
  <Link
    to={ `/${view}/${filter}` }
    activeStyle={{
      color: 'red'
    }}
  >
    {children}
  </Link>
)

export default FilterLink;
