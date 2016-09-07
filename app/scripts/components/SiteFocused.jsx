import React from 'react';

let SiteFocused = ( props )=> {
  return (
    <div>
      <h4> { props.site.name_en } </h4>
      <a onClick={ props.onReturnClick }> back </a>
      <p> {props.site.short_description_en}</p>
    </div>
  )
}


export default SiteFocused
