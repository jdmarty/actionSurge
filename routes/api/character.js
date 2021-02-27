/* eslint-disable new-cap */
const router = require("express").Router();
const playerController = require("../../controllers/characterController");

// route to create a new player
router.post("/create", playerController.createCharacter);
// route to get a single user character
router.get("/:id", playerController.getCharacter);
// route to get all user characters
router.get("/user/:id", playerController.getUserCharacters);
// route to update a character
router.put("/:id", playerController.updateCharacter);
// route to delete a character
router.delete("/:id", playerController.deleteCharacter);


module.exports = router;