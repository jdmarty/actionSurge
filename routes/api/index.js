/* eslint-disable new-cap */
const router = require("express").Router();
const userRoutes = require("./user");
const playerRoutes = require("./player");

router.use("/user", userRoutes);
router.use("/character", playerRoutes);

module.exports = router;
