var Sequelize = require('sequelize');

function Edge(db){
  var Edge = db.define('Edge', {
    type: Sequelize.STRING,
    reference: Sequelize.UUID
  });
  return Edge;
}

function Pusher(db){
  var Pusher = db.define('Pusher', {
    active: Sequelize.ARRAY(Sequelize.INTEGER) //registers on which this pusher is active. 1,3,5 or 2,4
  });
  return Pusher;
}

function Wall(db){
  var Wall = db.define('Wall', {
    lasers: Sequelize.INTEGER //number of lasers attached to wall. 0-3
  })
  return Wall;
}
