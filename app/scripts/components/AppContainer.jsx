import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import SiteList from './SiteList'
import SiteFocused from './SiteFocused'
import SiteMap from './SiteMap'

import actions from '../actions/actions'

const AppContainer = ( props ) => {

  const removeFocusDisplayMap =()=>{
    removeFocus()
    displayMap()
  }

  const removeFocusDisplayList =()=>{
    removeFocus()
    displayList()
  }

  const removeFocus = ()=>{
    props.dispatch( actions.setFocusedSite( null ) )
  }
  const focusOnSite = (site)=>{
    props.dispatch( actions.setFocusedSite(site.unique_number) )
  }

  const addSiteImages = ( site )=>{
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
    props.dispatch( actions.toggleMap(true) )
  }

  const displayList=()=>{
    props.dispatch( actions.toggleMap(false) )
  }

  const getFocusedSite=(sites, id)=>{
    if(!id){return null}
    const site = sites.find((site)=>{
      return site.unique_number === Number(id)
    })
    return site
  }

  const displaySitesBy = ( category ) => {
    return props.sites.filter( ( site ) => {
      if ( site.category.toLowerCase() === category ) {
        return site
      }
    })
  }

  const getSites = () => {
    if ( props.filter === 'all' ) {
      return props.sites
    }
    return displaySitesBy( props.filter )
  }

  let mainDisplay = null
  if(props.view === "map"){
    mainDisplay = <SiteMap
      sites={ props.sites }
      userCenter={ props.userLocation }
      focusedSite={ getFocusedSite(props.sites, props.siteId) }
      onMarkerClick={ focusOnSite }
      onClickClose={ removeFocus }
      onToggleView={ displayList }
    />
  }
  else{
    if(props.sites && props.sites.length > 0 && props.siteId){
      const site = getFocusedSite(props.sites, props.siteId)
      mainDisplay = <SiteFocused
        site={ site }
        onToggleView={ displayMap }
        onClickClose={ removeFocus }
        beforeMount= { addSiteImages }
      />
    }else{
      mainDisplay = <SiteList
      sites={ getSites() }
      onPanelClick={ focusOnSite }
      view={props.view}
      />
    }

  }

  return(
    <div className="app-content">
      { mainDisplay }
      <Nav
        hasSite={ !!props.siteId }
        showMap={ props.showMap }
        onClickList={removeFocusDisplayList}
        onClickMap={removeFocusDisplayMap}
      />
    </div>
  )
}

const mapStateToProps = (state, { params })=>{
  return Object.assign({},state, {
    filter: params.filter || "all",
    view: params.view || "list",
    siteId: params.siteId || null,
  })
}

export default connect( mapStateToProps )( AppContainer )
