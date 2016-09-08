import React from 'react'

let Nav = (props) => {

  return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="/" className="brand">
            UNESCO
          </a>
        </div>
        <div className="navbar-right">
          <button onClick={props.onClickList}> ListView </button>
          <button onClick={props.onClickMap}> MapView </button>
        </div>
      </div>
    </nav>
  )

}

export default Nav
