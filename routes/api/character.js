/* eslint-disable new-cap */
const router = require("express").Router();
const playerController = require("../../controllers/characterController");

// route to create a new player
router.post("/create", playerController.createCharacter);
// route to get all player characters
router.get("/user/:id", playerController.getUserCharacters);

module.exports = router;