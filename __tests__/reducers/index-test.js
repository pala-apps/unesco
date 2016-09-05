import reducer from '../../app/scripts/reducers/index'


it("should handle ADD_SITES ", () => {
  const sites = [
    {name: "A Site"}
  ]
  const action = {
    type: "ADD_SITES",
    sites
  }

  expect( reducer({}, action) ).toEqual( { sites: sites } )

})
