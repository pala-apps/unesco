import React from 'react';
import SiteHeader from './SiteHeader.jsx'

let SiteFocused = ( props )=> {
  let images = null
  if( props.site.imageUrls ){
    images = props.site.imageUrls.map((image,index)=>{
      return <img key={image} src={image} ></img>
    })
  }
  return (
    <div className='container'>
      <div className="panel-animate-top">
        <SiteHeader
          site={props.site}
          showingDetails={true}
          onClickClose={props.onClickClose}
        />
      </div>
      <h4> { props.site.name_en } </h4>
      <a onClick={ props.onReturnClick }> Back </a>
      <p> {props.site.short_description_en}</p>
      { images }
    </div>
  )
}


export default SiteFocused
