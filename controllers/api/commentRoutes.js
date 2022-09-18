const router = require("express").Router();
const { Article, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// GET article page
router.get("/", withAuth, async (req, res) => {
  try {
    const data = await Comment.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Article,
        },
      ],
    });

    const comment = data.get({ plain: true });

    res.render("comment", {
      comment,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const data = await Comment.create({
      date_created: Date.now(),
      content: req.body.content,
      article_id: req.body.article_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const data = await Comment.update(
      {
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!data) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

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
