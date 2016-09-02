import React from 'react'

let Nav = () => {

  return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="/" className="brand">
            UNESCO
          </a>
          <button id="toggleNav" type="button" className="navbar-toggle collapsed">
            <i className="icon-menu"></i>
          </button>
        </div>
      </div>
    </nav>
  )

}

export default Nav
