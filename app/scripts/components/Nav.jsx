import React from 'react'

let Nav = (props) => {

  return(
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a href="/" className="brand">
          UNESCO
        </a>
      </div>
      <div className="navbar-right">
        <div className="btn-toggle">
          <button className="btn btn-toggle-left" onClick={props.onClickList}>
            <i className="fa fa-list-ul" aria-hidden="true"></i>
          </button>
          <button className="btn btn-toggle-right" onClick={props.onClickMap}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  )

}

export default Nav
