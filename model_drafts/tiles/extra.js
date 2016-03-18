var Sequelize = require('sequelize');

function Extra(db){
  var Extra = db.define('Extra', {
    type: Sequelize.STRING,
    reference: Sequelize.UUID
  });
  return Extra;
}

function Laser(db){
  var Laser = db.define('Laser', {
    count: Sequelize.INTEGER, //1-3
    entersfrom: Sequelize.STRING, //not sure if these are necessary. maybe for drawing and/or calculating when it hits an obstacle
    exitsto: Sequelize.STRING
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
