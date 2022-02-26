const sequelize = require("../config/connection");
const { User, Flashcard, Category } = require("../models");

const userData = require("./userData.json");
const flashcardData = require("./flashcardData.json");
const categoryData = require("./categoryData.json");

/**
 * Leaving for future reference
 */
// const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  /**
   * Leaving for future reference
   */

  for (const flashcard of flashcardData) {
    const flashcardData = {
      ...flashcard,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    };
    await Flashcard.create(flashcardData);
  }

  process.exit(0);
};

seedDatabase();
