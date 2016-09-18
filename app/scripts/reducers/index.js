
import { addDistance, sortSites } from '../distance_helpers/distance_helpers.js'

const initState = {
  sites: []
}




export default (state = initState, action) => {
    switch (action.type) {
      case "ADD_SITES":
        return Object.assign({}, state, {sites: action.sites})
      case "SET_USER_LOCATION":
        if(!state.sites){
          return Object.assign( {}, state, {userLocation: action.location})
        }
        const sitesWithDistance = addDistance( state.sites, action.location );
        const sortedSites = sortSites(sitesWithDistance)
        return Object.assign( {}, state, {userLocation: action.location, sites: sortedSites})
      case "ADD_SITE_IMAGES":
        const updatedSites = state.sites.map((site)=>{
          if(site.unique_number == action.siteId){
            return Object.assign({},site, {imageUrls: action.imageUrls})
          }
          return site
        })
        return Object.assign( {}, state, { sites: updatedSites })
      case "SET_MAP_CENTER":
        return Object.assign( {}, state, { mapCenter: action.center } )
      default:
        return state
    }
}
