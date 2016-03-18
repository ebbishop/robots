var Sequelize = require('sequelize');

function Player (db) {
  var Player = db.define('Player', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    robot: Sequelize.UUID,
    currentRoom: Sequelize.STRING, //either a specific room name or lobby
  	customBoards: Sequelize.ARRAY(Sequelize.UUID)
  });

  return Player;
}


module.exports = Player;
