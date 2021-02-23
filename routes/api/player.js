/* eslint-disable new-cap */
const router = require("express").Router();
const playerController = require("../../controllers/playerController");

// route to create a new player
router.post("/create", playerController.createPlayer);
// route to get all player characters
router.get("/all/:id", playerController.getUserPlayers);

module.exports = router;