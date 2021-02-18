const router = require("express").Router();
const userController = require("../../controllers/userController")

// route to create a new user
router.post("/", userController.createUser)

//Test route
router.get("/", userController.test)

module.exports = router