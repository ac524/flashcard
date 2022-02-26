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

router.put("/:cardId", withApiAuth, async (req, res) => {

  console.log("hello", req.body);

  const updateResult = await Flashcard.update({
    ...req.body
  }, {
    where: {
      id: req.params.cardId,
      user_id: req.session.user_id
    }
  });

  console.log(updateResult);

  res.json( updateResult );
});

module.exports = router;
