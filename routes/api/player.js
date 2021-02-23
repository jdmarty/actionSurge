/* eslint-disable new-cap */
const router = require("express").Router();
const playerController = require("../../controllers/userController");

// route to create a new player
router.post("/create", playerController.createUser);

module.exports = router;