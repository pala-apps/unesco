import sites from '../sites'

const initState = {
  sites: []
}

export default (state = initState, action) => {
    switch (action.type) {
      case "ADD_SITES":
        return Object.assign({}, state, {sites: action.sites})
      case "SET_FOCUSED_SITE":
        return Object.assign({}, state, {focusedSiteId: action.siteId})
      default:
        return state
    }
}
