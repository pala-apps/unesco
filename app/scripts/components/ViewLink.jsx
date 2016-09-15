import React from 'react'
import { Link } from 'react-router'

const ViewLink = ({ view, children }) =>(
  <Link
    to={ view }
    activeStyle={{
      color: 'red'
    }}
  >
    {children}
  </Link>
)

export default ViewLink;


{/*<button className={btnToggleClassLeft} onClick={props.onClickList}>
  <i className="fa fa-list-ul" aria-hidden="true"></i>
</button>*/}
