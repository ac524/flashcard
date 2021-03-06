const withAuth = require("../utils/auth");

const router = require("express").Router();
const { Flashcard, Category } = require("../models");
const serializeModelResult = require("../utils/serializeModelResult");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("homepage", {
      ...req.viewData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/my/flashcards");
    return;
  }

  res.render("login", { ...req.viewData });
});

router.get("/my/quiz", withAuth, async (req, res) => {
  const flashcards = await Flashcard.getUserView(req.session.user_id);

  res.render("user-quiz", {
    ...req.viewData,
    flashcards,
  });
});

router.get("/my/quiz/cat/:catId", withAuth, async (req, res) => {
  const flashcards = await Flashcard.getUserView(
    req.session.user_id,
    req.params.catId
  );

  res.render("user-quiz", {
    ...req.viewData,
    flashcards,
  });
});

router.get("/my/flashcards", withAuth, async (req, res) => {
  const flashcards = await Flashcard.getUserView(req.session.user_id);
  const categories = serializeModelResult( await Category.findAll() );

  res.render("user-flashcards", {
    ...req.viewData,
    flashcards,
    categories
  });
});

module.exports = router;
