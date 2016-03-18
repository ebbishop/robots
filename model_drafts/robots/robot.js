var Sequelize = require('sequelize');

function Robot (db) {
  var Robot = db.define('Robot', {
    name: Sequelize.STRING,
    start: Sequelize.INTEGER,
    damage: Sequelize.INTEGER,
    lives: Sequelize.INTEGER,
    flags: Sequelize.INTEGER,
    location: Sequelize.ARRAY(Sequelize.INTEGER), //current x, y coordinates on the board
    active: Sequelize.BOOLEAN, //defaults to true, false if powered down
    direction: Sequelize.INTEGER, //direction currently facing


    prePlayCards: Sequelize.ARRAY(Sequelize.UUID), //array of cards available to be played prior to a turn
    registeredCard: Sequelize.ARRAY(Sequelize.UUID), //array of cards chosen
    ready: Sequelize.BOOLEAN, //toggled to on when ready for next turn
  });

  return Robot;
}


module.exports = Robot;
