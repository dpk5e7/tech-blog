const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// This file contains all the database interaction for the User model

// Create a new User
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update the user's password
router.put("/password/", withAuth, async (req, res) => {
  try {
    // need to verify that the current password matches.
    const dbUserData = await User.findByPk(req.session.user_id);
    const validPassword = await dbUserData.checkPassword(
      req.body.currentPassword
    );
    if (validPassword) {
      const userData = await User.update(
        {
          password: req.body.newPassword,
        },
        {
          where: {
            id: req.session.user_id,
          },
          individualHooks: true,
        }
      );

      if (userData) {
        res.status(200).json(userData);
      } else {
        res.status(404).json({ message: "No user found with this id!" });
      }
    } else {
      res.status(400).json({ message: "Incorrect current password!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout the user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
