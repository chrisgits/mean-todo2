'use strict';

var express = require('express');
var router = express.Router();

router.get('/todos', function (req, res) {
  res.json({'todos': [{'lastname': 'Mannel'}, {'firstname': 'Chris'}, {'age': 34}]}); // serves json response
});

//TODO: Add POST route to create new entries

//TODO: Add PUT route to update existing entries

//TODO: Add DELETE route to delete existing entries

module.exports = router;
