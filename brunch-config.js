module.exports = {
  files: {
    javascripts: {
      entryPoints: {
        'app/scripts/initialize.js': 'scripts/bundle.js',
      },
    },
    stylesheets: {joinTo: 'styles/main.css'}
  },

  plugins: {
    babel: {presets: ['es2015', 'react']},
    swPrecache: {
      'swFileName': 'sw.js',
      'options': {
        'staticFileGlobs': [
           'public/styles/main.css',
           'public/scripts/bundle.js',
           'public/index.html'
        ],
        'navigateFallback': 'index.html',
        'stripPrefix' : 'public/',
        importScripts: [
          'sw/sw-toolbox.js',
          'sw/sw-toolbox-config.js'
        ]
      }
    },
    gzip:{
      paths:{
        javascript: 'scripts',
        stylesheet: 'styles'
      },
      removeOriginalFiles: false,
      renameGzipFilesToOriginalFiles: false
    }
  }
};
