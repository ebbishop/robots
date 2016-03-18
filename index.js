var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var pg = require('pg');

var testDB = new Sequelize('postgres://postgres:1234@localhost:5432/testDB', {});
testDB.authenticate()
.then(function(){
  console.log('Database connected!');
})
.catch(function(err){
  console.error(err.message, "problem connecting?");
});

app.listen(3000, function(){
  console.log('listening on 3000');
});
