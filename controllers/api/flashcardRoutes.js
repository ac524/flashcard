const router = require("express").Router();
const { Flashcard } = require("../../models");
const withApiAuth = require("../../utils/authApi");

router.get("/", withApiAuth, async (req, res) => {
  const flashcards = await Flashcard.findAll({
    where: {
      user_id: req.session.user_id,
    },
  });

  res.json(flashcards);
});

router.post("/", withApiAuth, async (req, res) => {
  const flashcards = await Flashcard.create({
    ...req.body,
    user_id: req.session.user_id,
  });

  res.json(flashcards);
});

module.exports = router;
