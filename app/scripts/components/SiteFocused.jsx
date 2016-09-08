import React from 'react';

let SiteFocused = ( props )=> {
  let images = null
  if( props.site.imageUrls ){
    images = props.site.imageUrls.map((image,index)=>{
      return <img key={image} src={image} ></img>
    })
  }
  return (
    <div>
      <h4> { props.site.name_en } </h4>
      <a onClick={ props.onReturnClick }> back </a>
      <p> {props.site.short_description_en}</p>
      { images }
    </div>
  )
}


export default SiteFocused
