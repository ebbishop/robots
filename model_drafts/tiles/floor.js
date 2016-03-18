var Sequelize = require('sequelize');

function Floor (db) {
  var Floor = db.define('Floor', {
    type: Sequelize.TEXT, //belt, gear, wrench
    reference: Sequelize.UUID //particular one of type
  });
  return Floor;
}

// how do we deal with pits? they are a yes/no kind of thing and override everything else.


function ConveyorBelt(db){
  var ConveyorBelt = db.define('ConveyorBelt', {
    exitto: Sequelize.INTEGER,  //0 - 270
    enterfrom: Sequelize.ARRAY(Sequelize.INTEGER), //array of 1- numbers, 0-270
    magnitude: Sequelize.INTEGER, //1,2
  });
  return ConveyorBelt;
}

function Gear(db){
  var Gear = db.define('Gear', {
    direction: Sequelize.INTEGER //clockwise = +1 or counterclockwise = -1
  });
  return Gear;
}

function Wrench(db){
  var Wrench = db.define('Wrench', {
    count: Sequelize.INTEGER //1 or 2
  });
  return Wrench;
}

module.exports = {
  Floor: Floor,
  ConveyorBelt: ConveyorBelt,
  Gear: Gear,
  Wrench: Wrench
};
