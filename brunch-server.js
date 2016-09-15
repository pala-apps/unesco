var express = require('express');
var app = express();
var Path = require('path');

module.exports = function startServer(port, path, callback) {
  app.use(express.static(Path.join(__dirname, path)));

  app.get( '*', function(req, res) {
    res.sendFile(Path.join(__dirname + '/public/index.html'));
  })
  var server = app.listen( process.env.PORT || port, callback)
}
