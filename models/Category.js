const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Category extends Model {}

Category.init(
  {
    /** columns here */
    name: DataTypes.STRING(100)
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
