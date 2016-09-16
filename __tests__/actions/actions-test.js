import actions from '../../app/scripts/actions/actions'

it('adds sites', () => {
  const expectedAction = { type:"ADD_SITES", sites: [ {name:"A Site"} ] }
  expect(actions.addSites([{name:"A Site"}])).toEqual( expectedAction  );
});

it( 'sets user location', () => {
  const expectedAction = { type:"SET_USER_LOCATION", location: { latitude: 1, longitude: 2 } };
  expect( actions.setUserLocation( { latitude: 1, longitude: 2 } )).toEqual( expectedAction );
});
