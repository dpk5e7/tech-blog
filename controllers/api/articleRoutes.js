const router = require("express").Router();
const { Article, User } = require("../../models");
const withAuth = require("../../utils/auth");

// This file contains all the database interaction for the Article model

// GET article page
router.get("/:id", withAuth, async (req, res) => {
  try {
    const data = await Article.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    const article = data.get({ plain: true });

    res.render("article", {
      article,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new article
router.post("/", withAuth, async (req, res) => {
  try {
    const data = await Article.create({
      title: req.body.title,
      date_created: Date.now(),
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update an article
router.put("/:id", withAuth, async (req, res) => {
  try {
    const data = await Article.update(
      {
        id: req.params.id,
        title: req.body.title,
        date_created: req.body.dateCreated,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!data) {
      res.status(404).json({ message: "No article found with this id!" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete an article.  Can only be deleted by the article's owner.
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const data = await Article.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!data) {
      res.status(404).json({ message: "No article found with this id!" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
