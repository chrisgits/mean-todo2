'use strict';

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function (req, res) {
  Todo.find({}, function (err, todos) { //pulls Todo model using find() method
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.json({'todos': todos});
  });
});

//TODO: Add POST route to create new entries
router.post('/todos', function (req, res) {
  var todo = req.body;
  Todo.create(todo, function (err, todo) {  //Todo model create method
    if (err) {
      return res.status(500).json({err: err.message}); //err handling
    }
    res.json({'todo': todo, message: 'Todo Created'});
  });
});

//TODO: Add PUT route to update existing entries

//TODO: Add DELETE route to delete existing entries

module.exports = router;
