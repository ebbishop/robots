var Sequelize = require('sequelize');

function Floor (db) {
  var Floor = db.define('Floor', {
    type: Sequelize.UUID
  });
}


function ConveyorBelt(db){
  var ConveyorBelt = db.define('ConveyorBelt', {
    direction: Sequelize.TEXT,  //n,s,e,w
    magnitude: Sequelize.INTEGER
  });
}

function TurnBelt(db){
  var TurnBelt = db.define('TurnBelt', {
    direction: Sequelize.TEXT, //up, down
    rotation: Sequelize.TEXT, //clock, counterclock
    magnitude: Sequelize.INTEGER
  });
}

