var Sequelize = require('sequelize');

function Board (db){
  var Board = db.define('Board', {
    name: Sequelize.TEXT,
    x00y00: Sequelize.UUID,
    x00y01: Sequelize.UUID,
    x00y02: Sequelize.UUID,
    x00y03: Sequelize.UUID,
    x00y04: Sequelize.UUID,
    x00y05: Sequelize.UUID,
    x00y06: Sequelize.UUID,
    x00y07: Sequelize.UUID,
    x00y08: Sequelize.UUID,
    x00y09: Sequelize.UUID,
    x00y10: Sequelize.UUID,
    x00y11: Sequelize.UUID,
    x01y00: Sequelize.UUID,
    x01y01: Sequelize.UUID,
    x01y02: Sequelize.UUID,
    x01y03: Sequelize.UUID,
    x01y04: Sequelize.UUID,
    x01y05: Sequelize.UUID,
    x01y06: Sequelize.UUID,
    x01y07: Sequelize.UUID,
    x01y08: Sequelize.UUID,
    x01y09: Sequelize.UUID,
    x01y10: Sequelize.UUID,
    x01y11: Sequelize.UUID,
    x02y00: Sequelize.UUID,
    x02y01: Sequelize.UUID,
    x02y02: Sequelize.UUID,
    x02y03: Sequelize.UUID,
    x02y04: Sequelize.UUID,
    x02y05: Sequelize.UUID,
    x02y06: Sequelize.UUID,
    x02y07: Sequelize.UUID,
    x02y08: Sequelize.UUID,
    x02y09: Sequelize.UUID,
    x02y10: Sequelize.UUID,
    x02y11: Sequelize.UUID,
    x03y00: Sequelize.UUID,
    x03y01: Sequelize.UUID,
    x03y02: Sequelize.UUID,
    x03y03: Sequelize.UUID,
    x03y04: Sequelize.UUID,
    x03y05: Sequelize.UUID,
    x03y06: Sequelize.UUID,
    x03y07: Sequelize.UUID,
    x03y08: Sequelize.UUID,
    x03y09: Sequelize.UUID,
    x03y10: Sequelize.UUID,
    x03y11: Sequelize.UUID,
    x04y00: Sequelize.UUID,
    x04y01: Sequelize.UUID,
    x04y02: Sequelize.UUID,
    x04y03: Sequelize.UUID,
    x04y04: Sequelize.UUID,
    x04y05: Sequelize.UUID,
    x04y06: Sequelize.UUID,
    x04y07: Sequelize.UUID,
    x04y08: Sequelize.UUID,
    x04y09: Sequelize.UUID,
    x04y10: Sequelize.UUID,
    x04y11: Sequelize.UUID,
    x05y00: Sequelize.UUID,
    x05y01: Sequelize.UUID,
    x05y02: Sequelize.UUID,
    x05y03: Sequelize.UUID,
    x05y04: Sequelize.UUID,
    x05y05: Sequelize.UUID,
    x05y06: Sequelize.UUID,
    x05y07: Sequelize.UUID,
    x05y08: Sequelize.UUID,
    x05y09: Sequelize.UUID,
    x05y10: Sequelize.UUID,
    x05y11: Sequelize.UUID,
    x06y00: Sequelize.UUID,
    x06y01: Sequelize.UUID,
    x06y02: Sequelize.UUID,
    x06y03: Sequelize.UUID,
    x06y04: Sequelize.UUID,
    x06y05: Sequelize.UUID,
    x06y06: Sequelize.UUID,
    x06y07: Sequelize.UUID,
    x06y08: Sequelize.UUID,
    x06y09: Sequelize.UUID,
    x06y10: Sequelize.UUID,
    x06y11: Sequelize.UUID,
    x07y00: Sequelize.UUID,
    x07y01: Sequelize.UUID,
    x07y02: Sequelize.UUID,
    x07y03: Sequelize.UUID,
    x07y04: Sequelize.UUID,
    x07y05: Sequelize.UUID,
    x07y06: Sequelize.UUID,
    x07y07: Sequelize.UUID,
    x07y08: Sequelize.UUID,
    x07y09: Sequelize.UUID,
    x07y10: Sequelize.UUID,
    x07y11: Sequelize.UUID,
    x08y00: Sequelize.UUID,
    x08y01: Sequelize.UUID,
    x08y02: Sequelize.UUID,
    x08y03: Sequelize.UUID,
    x08y04: Sequelize.UUID,
    x08y05: Sequelize.UUID,
    x08y06: Sequelize.UUID,
    x08y07: Sequelize.UUID,
    x08y08: Sequelize.UUID,
    x08y09: Sequelize.UUID,
    x08y10: Sequelize.UUID,
    x08y11: Sequelize.UUID,
    x09y00: Sequelize.UUID,
    x09y01: Sequelize.UUID,
    x09y02: Sequelize.UUID,
    x09y03: Sequelize.UUID,
    x09y04: Sequelize.UUID,
    x09y05: Sequelize.UUID,
    x09y06: Sequelize.UUID,
    x09y07: Sequelize.UUID,
    x09y08: Sequelize.UUID,
    x09y09: Sequelize.UUID,
    x09y10: Sequelize.UUID,
    x09y11: Sequelize.UUID,
    x10y00: Sequelize.UUID,
    x10y01: Sequelize.UUID,
    x10y02: Sequelize.UUID,
    x10y03: Sequelize.UUID,
    x10y04: Sequelize.UUID,
    x10y05: Sequelize.UUID,
    x10y06: Sequelize.UUID,
    x10y07: Sequelize.UUID,
    x10y08: Sequelize.UUID,
    x10y09: Sequelize.UUID,
    x10y10: Sequelize.UUID,
    x10y11: Sequelize.UUID,
    x11y00: Sequelize.UUID,
    x11y01: Sequelize.UUID,
    x11y02: Sequelize.UUID,
    x11y03: Sequelize.UUID,
    x11y04: Sequelize.UUID,
    x11y05: Sequelize.UUID,
    x11y06: Sequelize.UUID,
    x11y07: Sequelize.UUID,
    x11y08: Sequelize.UUID,
    x11y09: Sequelize.UUID,
    x11y10: Sequelize.UUID,
    x11y11: Sequelize.UUID,
  });
  return Board;
}