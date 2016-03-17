var Sequelize = require('sequelize');

function Edge(db){
  var Edge = db.define('Edge', {
    flavor: Sequelize.TEXT,
    lasers: Sequelize.INTEGER
  });
  return Edge;
}


module.exports = Edge;
