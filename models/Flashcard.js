const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Flashcard extends Model {

}

Flashcard.init(
  {
    /** columns here */
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'flashcard',
  }
);

module.exports = Flashcard;