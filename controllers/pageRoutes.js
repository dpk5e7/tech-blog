const router = require("express").Router();
const { Article, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all articles for homepage
router.get("/", async (req, res) => {
  try {
    const data = await Article.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const articles = data.map((article) => article.get({ plain: true }));

    res.render("homepage", {
      articles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all articles for a user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const data = await Article.findAll({
      include: [
        {
          model: User,
        },
      ],
      where: {
        user_id: req.session.user_id,
      },
    });

    const articles = data.map((article) => article.get({ plain: true }));

    res.render("dashboard", {
      articles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET the edit article page for the user
router.get("/article/:id", async (req, res) => {
  try {
    const data = await Article.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["id", "date_created", "content"],
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
      ],
    });

    const article = data.get({ plain: true });

    res.render("article", {
      article,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET the edit article page for the user
router.get("/editArticle/:id", withAuth, async (req, res) => {
  try {
    const data = await Article.findByPk(req.params.id, {
      where: {
        user_id: req.session.user_id,
      },
    });

    const article = data.get({ plain: true });

    res.render("editArticle", {
      article,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET the create article page
router.get("/createArticle/", withAuth, async (req, res) => {
  try {
    res.render("createArticle", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET the delete article page for the user
router.get("/deleteArticle/:id", withAuth, async (req, res) => {
  try {
    const data = await Article.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
      where: {
        user_id: req.session.user_id,
      },
    });

    const article = data.get({ plain: true });

    res.render("deleteArticle", {
      article,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET the change password page
router.get("/changePassword/", withAuth, async (req, res) => {
  try {
    const data = await User.findByPk(req.session.user_id);

    const user = data.get({ plain: true });

    res.render("changePassword", {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
    } else {
      res.render("login", {
        logged_in: req.session.logged_in,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create Account
router.get("/createAccount", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
    } else {
      res.render("createAccount", {
        logged_in: req.session.logged_in,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
