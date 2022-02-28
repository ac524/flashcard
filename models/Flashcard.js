const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const serializeModelResult = require("../utils/serializeModelResult");

class Flashcard extends Model {}

Flashcard.getUserView = async function (user_id, category_id, random = false) {
  const where = {
    user_id,
  };

  if (category_id) {
    where.category_id = category_id;
  }

  return serializeModelResult(
    await Flashcard.findAll({
      where,
      order: random ? sequelize.literal("rand()") : [ ["id", "DESC"] ],
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
