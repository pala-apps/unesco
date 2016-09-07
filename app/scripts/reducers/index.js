import R from 'ramda'

const initState = {
  sites: []
}

function sortSites(sites, userLocation){
  const sortedSites = R.sort((siteA, siteB)=>{
    return calculateDistance(userLocation, siteA) - calculateDistance(userLocation, siteB)
  }, sites)
  return sortedSites
}

function toRadians(degrees){
  return degrees * Math.PI / 180
}

function calculateDistance(userLocation, siteLocation){
  let R = 6371e3; // metres
  let lat1 = userLocation.latitude
  let lon1 = userLocation.longitude
  let lat2 = siteLocation.latitude
  let lon2 = siteLocation.longitude
  let φ1 = toRadians( lat1 );
  let φ2 = toRadians( lat2 );
  let Δφ = toRadians(lat2-lat1);
  let Δλ = toRadians(lon2-lon1);

  let a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  let d = R * c;
  return d
}

export default (state = initState, action) => {
    switch (action.type) {
      case "ADD_SITES":
        return Object.assign({}, state, {sites: action.sites})
      case "SET_FOCUSED_SITE":
        return Object.assign({}, state, {focusedSiteId: action.siteId})
      case "SET_USER_LOCATION":
        const sortedSites = sortSites(state.sites, action.location)
        return Object.assign( {}, state, {userLocation: action.location, sites: sortedSites})
      default:
        return state
    }
}
