toolbox.router.get('/data/sites.json', toolbox.fastest);

toolbox.router.get('/(.*)', toolbox.cacheFirst, {
  origin: "https://fonts.googleapis.com",
  cache: {name: 'font-cache'}
})

toolbox.router.get('/(.*)', toolbox.cacheFirst, {
  origin: "https://fonts.gstatic.com",
  cache: {name: 'font-cache'}
})
