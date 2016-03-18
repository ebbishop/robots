var Sequelize = require('sequelize');

function Floor (db) {
  var Floor = db.define('Floor', {
    type: Sequelize.TEXT;
  });
}


function ConveyorBelt(db){
  var ConveyorBelt = db.define('ConveyorBelt', {
    exitto: Sequelize.TEXT,  //n,s,e,w
    magnitude: Sequelize.INTEGER, //1,2
    inputs: Sequelize.INTEGER, //1,2
    turns: Sequelize.INTEGER
  });
}

function TurnBelt(db){
  var TurnBelt = db.define('TurnBelt', {
    direction: Sequelize.TEXT, //up, down
    rotation: Sequelize.TEXT, //clock, counterclock
    magnitude: Sequelize.INTEGER
  });
}


function
