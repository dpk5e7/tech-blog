const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// This file contains all the database interaction for the Comment model

// Create a new comment associated with an article
router.post("/", withAuth, async (req, res) => {
  try {
    const data = await Comment.create({
      date_created: Date.now(),
      content: req.body.content,
      article_id: req.body.articleID,
      user_id: req.session.user_id,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a comment
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const data = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!data) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
