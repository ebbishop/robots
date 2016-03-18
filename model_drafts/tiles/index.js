var Sequelize = require('sequelize');

var pgp = require('pg-promise')();
// var testDB = pgp('postgres://postgres:1234@localhost:5432/testDB');
var testDB = new Sequelize('postgres://localhost:5432/testDB', {});

testDB.authenticate()
.then(function(){
  console.log('Database connected!');
})
.catch(function(err){
  console.error(err.message, "problem connecting?");
});
