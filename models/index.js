const User = require("./User");
const Flashcard = require("./Flashcard");
const Category = require("./Category");

User.hasMany(Flashcard, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Flashcard.belongsTo(User, {
  foreignKey: "user_id",
});

Category.hasMany(Flashcard, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Flashcard.belongsTo(Category, {
  foreignKey: "category_id",
});

module.exports = { User, Flashcard, Category };
