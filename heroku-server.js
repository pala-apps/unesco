var express = require('express');
var app = express();
var Path = require('path');


app.use(express.static( Path.join(__dirname, 'public' )));
var server = app.listen( process.env.PORT || 3333);
