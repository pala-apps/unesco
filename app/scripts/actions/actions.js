const actions = {
  filterSites: function(category) {
    return {
      type: "FILTER_SITES",
      category
    }
  },
  addSites: function(sites){
    return {
      type: "ADD_SITES",
      sites
    }
  },
  setFocusedSite:function(siteId){
    return{
      type: "SET_FOCUSED_SITE",
      siteId
    }
  },
  setUserLocation: (location) => {
    return{
      type: "SET_USER_LOCATION",
      location
    }
  },
  toggleMap:(show)=>{
    return{
      type:"TOGGLE_MAP",
      show
    }
  },
  addSiteImages:(siteId, imageUrls)=>{
    return{
      type:"ADD_SITE_IMAGES",
      siteId,
      imageUrls
    }
  }

}

export default actions
