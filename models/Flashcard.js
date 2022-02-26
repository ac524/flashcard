const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const serializeModelResult = require("../utils/serializeModelResult");

class Flashcard extends Model {}

Flashcard.getUserView = async function (user_id) {
  return serializeModelResult(
    await Flashcard.findAll({
      where: {
        user_id,
      },
    })
  );
};

Flashcard.init(
  {
    /** columns here */
    question: DataTypes.STRING(500),
    answer: DataTypes.STRING(500),
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "flashcard",
  }
);

module.exports = Flashcard;
