var Sequelize = require('sequelize');

function Tile(db){
  var Tile = db.define('Tile', {
    edge000: Sequelize.UUID,
    edge090: Sequelize.UUID,
    edge180: Sequelize.UUID,
    edge270: Sequelize.UUID,
    // edges: Sequelize.ARRAY(Sequelize.UUID), array of 0-3, alternative to separate NESW
    floor: Sequelize.UUID, //null if it is a pit? what if it is just plain cement?
    extra: Sequelize.ARRAY(Sequelize.UUID)
  });
  return Tile;
}


module.exports = Tile;



// should we have directions permanently
// associated with a number for this game? this would make
// calculating turns more straight forward, perhaps.
// could be 0, 1, 2, 3 or
// 0, 90, 180, 270
