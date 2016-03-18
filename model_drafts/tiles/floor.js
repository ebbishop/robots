var Sequelize = require('sequelize');

function Floor (db) {
  var Floor = db.define('Floor', {
    type: Sequelize.TEXT,
    reference: Sequelize.UUID
  });
  return Floor;
}

// how do we deal with pits? they are a yes/no kind of thing and override everything else.


function ConveyorBelt(db){
  var ConveyorBelt = db.define('ConveyorBelt', {
    exitto: Sequelize.TEXT,  //n,s,e,w
    enterfrom: Sequelize.ARRAY(Sequelize.TEXT), //array of one or two letters
    magnitude: Sequelize.INTEGER, //1,2
  });
  return ConveyorBelt;
}

function Gear(db){
  var Gear = db.define('Gear', {
    direction: Sequelize.TEXT //clockwise or counterclockwise
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
