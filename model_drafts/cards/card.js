var Sequelize = require('sequelize');

function Card(db){
  var Card = db.define('Card', {
    type: Sequelize.TEXT,
    priority: Sequelize.INTEGER //10 - 840
  });
  return Card;
}

module.exports = Card;
