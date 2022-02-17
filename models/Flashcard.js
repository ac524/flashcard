const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Flashcard extends Model {

}

Flashcard.init(
  {
    /** columns here */
    question: DataTypes.STRING(500),
    answer: DataTypes.STRING(500)
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'flashcard',
  }
);

module.exports = Flashcard;