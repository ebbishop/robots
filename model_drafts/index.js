var Sequelize = require('sequelize');

var testDB = new Sequelize('testDB', 'postgres');

testDB.authenticate()
.then(function(){
  console.log('Database connected!');
})
.catch(function(err){
  console.error(err.message, "problem connecting?");
});
