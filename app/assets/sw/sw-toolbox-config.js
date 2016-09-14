toolbox.router.get('/data/sites.json', toolbox.fastest);

toolbox.router.get('/(.*)', toolbox.cacheFirst, {
  origin: "https://fonts.googleapis.com",
  cache: {name: 'font-cache'}
})

toolbox.router.get('/(.*)', toolbox.cacheFirst, {
  origin: "https://fonts.gstatic.com",
  cache: {name: 'font-cache'}
})

toolbox.router.get('/services/rest', toolbox.cacheFirst, {
  origin: "https://api.flickr.com",
  cache: {name: 'flickr-cache'}
})

toolbox.router.get('/(.*)', toolbox.cacheFirst, {
  origin: /^https:\/\/farm[0-9]*.staticflickr.com/,
  cache: {name: 'flickr-cache'}
})
