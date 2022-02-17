const router = require('express').Router();
const { Flashcard } = require('../../models');

router.get('/', async (req, res) => {
  const flashcards = await Flashcard.findAll();

  res.json(flashcards);
});

module.exports = router;
