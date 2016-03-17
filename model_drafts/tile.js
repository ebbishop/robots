var Sequelize = require('sequelize');

function Tile(db){
  var Tile = db.define('Tile', {
    edgeN: Sequelize.UUID,
    edgeE: Sequelize.UUID,
    edgeS: Sequelize.UUID,
    edgeW: Sequelize.UUID,
    // edges: Sequelize.ARRAY(Sequelize.UUID), alternative to NESW
    floor: Sequelize.UUID,
    extra: Sequelize.ARRAY(Sequelize.UUID)
  });
  return Tile;
}


module.exports = Tile;
