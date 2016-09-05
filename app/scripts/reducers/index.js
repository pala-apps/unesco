const initState = {
  sites: []
}

export default (state = initState, action) => {
    switch (action.type) {
      case "ADD_SITES":
        return Object.assign({}, state, {sites: action.sites})
      default:
        return state
    }
}
