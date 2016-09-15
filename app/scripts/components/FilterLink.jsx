import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children }) =>(
  <Link
    to={ filter }
    activeStyle={{
      color: 'red'
    }}
  >
    {children}
  </Link>
)

export default FilterLink;
