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

it( "should handle SET_USER_LOCATION", () => {
  const action = {
    type: "SET_USER_LOCATION",
    location: { latitude: 1, longitude: 2 }
  }
  expect( reducer({}, action).userLocation ).toEqual( { latitude: 1, longitude: 2 } )
})
