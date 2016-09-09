import React from 'react'

let Nav = (props) => {
  let buttons = null;
  let btnToggleClassLeft = "btn btn-toggle-left";
  let btnToggleClassRight = "btn btn-toggle-right";

  if( props.showMap ) {
    btnToggleClassRight += " btn-background"
  } else {
    btnToggleClassLeft += " btn-background"
  }

  if(props.isFocused){
    buttons = <div>
      <button onClick={props.onClickBack}> All Sites </button>
    </div>
  }else{
    buttons = <div className="btn-toggle">
      <button className={btnToggleClassLeft} onClick={props.onClickList}>
        <i className="fa fa-list-ul" aria-hidden="true"></i>
      </button>
      <button className={btnToggleClassRight} onClick={props.onClickMap}>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
      </button>
    </div>
  }


  return(
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a href="/" className="brand">
          UNESCO
        </a>
      </div>
      <div className="navbar-right">
        {buttons}
      </div>
    </nav>
  )

}

export default Nav
