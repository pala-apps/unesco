import R from 'ramda'

export function addDistance( sites, userLocation ) {
  return sites.map( (site) =>  {
    return Object.assign({}, site, { distance: calculateDistance( userLocation, site ) })
  })
}

export function sortSites(sites, userLocation){
  const sortedSites = R.sort((siteA, siteB)=>{
    return siteA.distance - siteB.distance
  }, sites)
  return sortedSites
}

export function toRadians(degrees){
  return degrees * Math.PI / 180
}

export function calculateDistance(userLocation, siteLocation){
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
