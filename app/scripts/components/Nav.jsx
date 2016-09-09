import React from 'react'

let Nav = (props) => {
  let buttons = null;
  if(props.isFocused){
    buttons = <div>
      <button onClick={props.onClickBack}> All Sites </button>
    </div>
  }else{
    buttons = <div>
      <button onClick={props.onClickList}> ListView </button>
      <button onClick={props.onClickMap}> MapView </button>
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
