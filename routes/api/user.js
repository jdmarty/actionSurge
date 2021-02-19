/* eslint-disable new-cap */
const router = require("express").Router();
const userController = require("../../controllers/userController");

// route to create a new user
router.post("/create", userController.createUser);
// route to login a user
router.post("/login", userController.loginUser);
// route to logout a user
router.post("/logout", userController.logoutUser);

module.exports = router;
