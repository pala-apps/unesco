import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import SiteList from './SiteList'
import SiteFocused from './SiteFocused'
import SiteMap from './SiteMap'

import actions from '../actions/actions'



const AppContainer = ( props ) => {

  const removeFocus = ()=>{
    props.dispatch( actions.setFocusedSite( null ) )
  }
  const focusOnSite = ( site )=>{
    props.dispatch( actions.setFocusedSite(site.unique_number) )

    let request = new XMLHttpRequest();
    const tagArray = site.name_en.split(" ")
    const restrictedWords = ["and", "or", "the", "of", "in"]
    console.log('tagArray', tagArray)
    const filteredTagArray = tagArray.filter((text)=>{
      const isRestrictedWord = restrictedWords.some((wordToRemove)=>{
        return wordToRemove === text
      })
      return !isRestrictedWord
    })
    console.log('filteredTagArray', filteredTagArray)
    const tagString = filteredTagArray.join(',')
    console.log('tagString', filteredTagArray)
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c1b8a45db98de911a8b6038483f5de85&safe_search=1&per_page=20&format=json&nojsoncallback=1&sort=interestingness-asc&tags=${tagString}&tag_mode=all`
    request.open("GET", url)
    request.onload = function(e){
      console.log('e', e)
      console.log('image request', request.responseText)
      const imageDetails = JSON.parse( request.responseText );
      const filteredImageDetails = imageDetails.photos.photo.slice(0,4);
      console.log('filtered images', filteredImageDetails);
      const imageUrls = filteredImageDetails.map((details)=>{
        return `https://farm${details.farm}.staticflickr.com/${details.server}/${details.id}_${details.secret}.jpg`
      })
      console.log('imageUrls', imageUrls);
      props.dispatch( actions.addSiteImages( site.unique_number, imageUrls ) )

    }
    request.send();
  }

  const displayMap =()=>{
    console.log("displaying map")
    props.dispatch( actions.toggleMap(true) )
  }

  const displayList=()=>{
    console.log("displaying list")
    props.dispatch( actions.toggleMap(false) )
  }

  const getFocusedSite=(sites, id)=>{
    if(!id){return null}
    return sites.find((site)=>{
      return site.unique_number === id
    })
  }

  let mainDisplay = null


  if(props.showMap){
    mainDisplay = <SiteMap
      sites={ props.sites }
      userCenter={ props.userLocation }
      focusedSite={ getFocusedSite(props.sites, props.focusedSiteId) }
      onMarkerClick={ focusOnSite }
    />
  }
  else{
    if(props.focusedSiteId){
      mainDisplay = <SiteFocused site={ getFocusedSite(props.sites, props.focusedSiteId) } onReturnClick={ removeFocus } />
    }else{
      const displaySites = props.sites.slice(0,100)
      mainDisplay = <SiteList sites={ displaySites } onPanelClick={ focusOnSite } />
    }

  }

  return(
    <div className="app-content">
      { mainDisplay }
      <Nav onClickList={displayList} onClickMap={displayMap}/>
    </div>
  )
}


export default connect( state => state )( AppContainer )
