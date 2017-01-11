'use strict'
// modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var engine = require('ejs-mate');
var routes = require('./routes/index.js');

// ejs boilerplate
app.engine('ejs', engine)

// for css styling
app.use('/static', express.static(__dirname + '/src/public'));

// view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/templates');

// routes
app.use('/', routes);

// server
app.listen(3000, function() {
  console.log("starting ig server on port 3000");
});
