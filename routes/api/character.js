/* eslint-disable new-cap */
const router = require("express").Router();
const playerController = require("../../controllers/characterController");

// route to create a new player
router.post("/create", playerController.createCharacter);
// route to get a single player character
router.get("/:id", playerController.getCharacter);
// route to get all player characters
router.get("/user/:id", playerController.getUserCharacters);
// route to update a player
router.put("/:id", playerController.updateCharacter);


module.exports = router;