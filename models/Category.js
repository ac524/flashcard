const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const serializeModelResult = require("../utils/serializeModelResult");

class Category extends Model {}

Category.getWithUserCountView = async function (userId, includeEmpty = true) {
  const categories = serializeModelResult(
    await this.findAll({
      attributes: {
        include: [
          [
            // Use plain SQL to get a count of all short books
            sequelize.literal(
              `(SELECT COUNT(*) FROM flashcards WHERE flashcards.category_id = category.id AND flashcards.user_id = ${parseInt(
                userId
              )})`
            ),
            "count",
          ],
        ],
      },
    })
  );

  return includeEmpty ? categories : categories.filter(cat => cat.count > 0);
};

Category.init(
  {
    /** columns here */
    name: DataTypes.STRING(100),
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
