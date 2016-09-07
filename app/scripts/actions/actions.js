const actions = {
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
  }

}

export default actions
