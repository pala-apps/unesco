import actions from '../../app/scripts/actions/actions'

it('adds sites', () => {
  const expectedAction = { type:"ADD_SITES", sites: [ {name:"A Site"} ] }
  expect(actions.addSites([{name:"A Site"}])).toEqual( expectedAction  );
});
