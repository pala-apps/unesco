var express = require('express');
var app = express();
var Path = require('path');


app.get( '/', function( req, res ) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static( Path.join(__dirname, 'public' )));
var server = app.listen( process.env.PORT || 3333);
