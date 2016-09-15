import React from 'react'
import ViewLink from './ViewLink'

let Nav = (props) => {
  let btnToggleClassLeft = "btn btn-toggle-left";
  let btnToggleClassRight = "btn btn-toggle-right";

  if( props.showMap ) {
    btnToggleClassRight += " btn-background"
  } else {
    btnToggleClassLeft += " btn-background"
  }

  return(
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a href="/" className="brand">
          UNESCO
        </a>
      </div>
      <div className="navbar-right">
        <div className="btn-toggle">
          <ViewLink view="/list"> <i className="fa fa-list-ul" aria-hidden="true"></i> </ViewLink>
          <ViewLink view="/map"> <i className="fa fa-map-marker" aria-hidden="true"></i> </ViewLink>
        </div>
      </div>
    </nav>
  )

}

{/*<button className={btnToggleClassLeft} onClick={props.onClickList}>
  <i className="fa fa-list-ul" aria-hidden="true"></i>
</button>
<button className={btnToggleClassRight} onClick={props.onClickMap}>
  <i className="fa fa-map-marker" aria-hidden="true"></i>
</button>*/}

export default Nav
