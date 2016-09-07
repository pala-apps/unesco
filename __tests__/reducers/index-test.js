import reducer from '../../app/scripts/reducers/index'

it("should handle ADD_SITES ", () => {
  const sites = [
    {name: "A Site"}
  ]
  const action = {
    type: "ADD_SITES",
    sites
  }
  expect( reducer({}, action).sites ).toEqual( sites )
})

it("should handle SET_FOCUSED_SITE ", () => {
  const action = {
    type: "SET_FOCUSED_SITE",
    siteId: 1
  }
  expect( reducer({}, action).focusedSiteId ).toEqual( 1 )
})
