import React, { Component } from 'react';
import SiteHeader from './SiteHeader.jsx';
import { connect } from 'react-redux';
import actions from '../actions/actions';
import { getFocusedSite } from '../focused_site_helpers/focused_site_helpers.js'

let SiteFocused = (props)=>{
  if(!props.site){return null}
  if(!props.site.imageUrls){
    addSiteImages( props.site, props.dispatch )
  }
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
        canToggle={true}
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


const addSiteImages = ( site, dispatch )=>{
  if(!site){return null}
  console.log('adding site images')
  let request = new XMLHttpRequest();
  const tagArray = site.name_en.split(" ")
  const restrictedWords = ["and", "or", "the", "of", "in"]
  const filteredTagArray = tagArray.filter((text)=>{
    const isRestrictedWord = restrictedWords.some((wordToRemove)=>{
      return wordToRemove === text
    })
    return !isRestrictedWord
  })
  const tagString = filteredTagArray.join(',')
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c1b8a45db98de911a8b6038483f5de85&safe_search=1&per_page=20&format=json&nojsoncallback=1&sort=interestingness-asc&tags=${tagString}&per_page=20&content_type=1&sort=relevance`
  request.open("GET", url)
  request.onload = function(e){
    const imageDetails = JSON.parse( request.responseText );
    const filteredImageDetails = imageDetails.photos.photo.slice(0,4);
    const imageUrls = filteredImageDetails.map((details)=>{
      return `https://farm${details.farm}.staticflickr.com/${details.server}/${details.id}_${details.secret}.jpg`
    })
    dispatch( actions.addSiteImages( site.unique_number, imageUrls ) )

  }
  request.send();
}

const mapStateToProps = (state, { params, route } )=>{
  return {
    site: getFocusedSite(state.sites, params.siteId)
  }
}

const mapDispatchToProps = (dispatch)=>{
  return { dispatch: dispatch }
}


export default connect( mapStateToProps, mapDispatchToProps )( SiteFocused )
