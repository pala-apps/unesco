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
  }

}

export default actions
