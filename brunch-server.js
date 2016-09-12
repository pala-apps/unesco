var express = require('express');
var app = express();
var Path = require('path');

module.exports = function startServer(port, path, callback) {

  app.use(express.static(Path.join(__dirname, path)));
  var server = app.listen( process.env.PORT || port, callback);
}
