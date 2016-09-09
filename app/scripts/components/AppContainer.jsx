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
      onClickClose={ removeFocus }
    />
  }
  else{
    if(props.focusedSiteId){
      mainDisplay = <SiteFocused
        site={ getFocusedSite(props.sites, props.focusedSiteId) }
        onReturnClick={ removeFocus }
        onClickClose={ removeFocus }
      />
    }else{
      const displaySites = props.sites.slice(0,100)
      mainDisplay = <SiteList sites={ displaySites } onPanelClick={ focusOnSite } />
    }

  }

  return(
    <div className="app-content">
      { mainDisplay }
      <Nav
        showMap={ props.showMap }
        onClickList={displayList}
        onClickMap={displayMap}
      />
    </div>
  )
}


export default connect( state => state )( AppContainer )
