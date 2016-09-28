'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');

//entire public folder served at base url
app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router); //used with imported router from src/api/index.js

app.listen(3000, function () {
  console.log("The server is running on port 3000!");
});
