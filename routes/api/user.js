/* eslint-disable new-cap */
const router = require("express").Router();
const userController = require("../../controllers/userController");

// route to create a new user
router.post("/create", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);

module.exports = router;
