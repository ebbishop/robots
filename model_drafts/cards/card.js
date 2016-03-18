var Sequelize = require('sequelize');

function ProgramCard(db){
  var ProgramCard = db.define('ProgramCard', {
    name: Sequelize.TEXT,
    turn: Sequelize.INTEGER, //0, -90, 90, 180
    travel: Sequelize.INTEGER, //+1, -1, 0  - or maybe boolean
    magnitude: Sequelize.INTEGER, //0,1,2,3
    priority: Sequelize.INTEGER //10 - 840
  });
  return ProgramCard;
}

module.exports = ProgramCard;
