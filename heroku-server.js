var express = require('express');
var app = express();
var Path = require('path');

app.use(express.static('public'));

app.get( '*', function(req, res) {
  res.sendFile(Path.join(__dirname + '/public/index.html'));
})


var server = app.listen( process.env.PORT || 3333);
