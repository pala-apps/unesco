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
    <div>
      <SiteHeader
        site={props.site}
        showingMap={false}
        onToggleView={props.onToggleView}
        onClickClose={props.onClickClose}
      />
      <div className='container'>
        <h4> { props.site.name_en } </h4>
        <p> {props.site.short_description_en}</p>
        { images }
      </div>
    </div>
  )
}


export default SiteFocused
