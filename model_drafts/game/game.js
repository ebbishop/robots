var Sequelize = require('sequelize');
var firebaseHelper = require('../../firebase');

function Game(db){
  var Game = db.define('Game', {
    key: Sequelize.TEXT, //key for firebase connection
    robots:
    cards:

    turn: Sequelize.INTEGER, //0, -90, 90, 180
    travel: Sequelize.INTEGER, //+1, -1, 0  - or maybe boolean
    magnitude: Sequelize.INTEGER, //0,1,2,3
    priority: Sequelize.INTEGER //10 - 840
  });
  return Game;
}

module.exports = Game;