var Sequelize = require('sequelize');

function Extra(db){
  var Extra = db.define('Extra', {
    type: Sequelize.STRING, //flag or laser
    reference: Sequelize.UUID //particular one
  });
  return Extra;
}

function Laser(db){
  var Laser = db.define('Laser', {
    count: Sequelize.INTEGER, //1-3
    entersfrom: Sequelize.INTEGER, //0 - 270
    exitsto: Sequelize.INTEGER //0-270
  });
  return Laser;
}

function Flag(db){
  var Flag = db.define('Flag', {
    number: Sequelize.INTEGER //1-8
  });
  return Flag;
}

module.exports = {
  Extra: Extra,
  Laser: Laser,
  Flag: Flag
};
