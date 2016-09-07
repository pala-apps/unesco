import actions from '../../app/scripts/actions/actions'

it('adds sites', () => {
  const expectedAction = { type:"ADD_SITES", sites: [ {name:"A Site"} ] }
  expect(actions.addSites([{name:"A Site"}])).toEqual( expectedAction  );
});

it('sets focusesed site', () => {
  const expectedAction = { type:"SET_FOCUSED_SITE", siteId: 1 }
  expect(actions.setFocusedSite(1)).toEqual( expectedAction  );
});
