const actions = {
  addSites: function(sites){
    return {
      type: "ADD_SITES",
      sites
    }
  },
  setUserLocation: (location) => {
    return{
      type: "SET_USER_LOCATION",
      location
    }
  },
  addSiteImages:(siteId, imageUrls)=>{
    return{
      type:"ADD_SITE_IMAGES",
      siteId,
      imageUrls
    }
  },
  setMapCenter:(center)=>{
    return{
      type:"SET_MAP_CENTER",
      center
    }
  }

}

export default actions
