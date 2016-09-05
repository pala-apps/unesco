const initState = {
  sites: [
    {
      id: 208,
      name: "Cultural Landscape and Archaeological Remains of the Bamiyan Valley",
      description: "<p>The cultural landscape and archaeological remains of the Bamiyan Valley represent the artistic and religious developments which from the 1st to the 13th centuries characterized ancient Bakhtria, integrating various cultural influences into the Gandhara school of Buddhist art. The area contains numerous Buddhist monastic ensembles and sanctuaries, as well as fortified edifices from the Islamic period. The site is also testimony to the tragic destruction by the Taliban of the two standing Buddha statues, which shook the world in March 2001.</p>",
      date_inscribed: 2003,
      lng: 67.82525,
      lat: 34.84694,
      hectares: 158.9265,
      category: "Cultural",
      country: "Afghanistan",
      region: "Asia and the Pacific",
      iso_code: "af"
    },
    {
      id: 211,
      name: "Minaret and Archaeological Remains of Jam",
      description: "<p>The 65m-tall Minaret of Jam is a graceful, soaring structure, dating back to the 12th century. Covered in elaborate brickwork with a blue tile inscription at the top, it is noteworthy for the quality of its architecture and decoration, which represent the culmination of an architectural and artistic tradition in this region. Its impact is heightened by its dramatic setting, a deep river valley between towering mountains in the heart of the Ghur province.</p>",
      date_inscribed: 2002,
      lng: 64.51605556,
      lat: 34.39655556,
      hectares: 70,
      category: "Cultural",
      country: "Afghanistan",
      region: "Asia and the Pacific",
      iso_code: "af"
    }
  ]
}

export default (state = initState, action) => {
    switch (action.type) {
      case "ADD_SITES":
        return Object.assign({}, state, {sites: action.sites})
      default:
        return state
    }
}
