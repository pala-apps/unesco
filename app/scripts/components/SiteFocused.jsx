import React from 'react';
import SiteHeader from './SiteHeader.jsx'

let SiteFocused = ( props )=> {
  let images = null
  if( props.site.imageUrls ){
    images = props.site.imageUrls.map((image,index)=>{
      return <img className="img-responsive" key={image} src={image} ></img>
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
        { images }
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="panel-body-content">
              <h4 className="text-muted text-small">Description</h4>
              <div dangerouslySetInnerHTML={{__html: props.site.short_description_en}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SiteFocused
