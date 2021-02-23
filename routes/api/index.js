/* eslint-disable new-cap */
const router = require("express").Router();
const userRoutes = require("./user");
const characterRoutes = require("./character");

router.use("/user", userRoutes);
router.use("/character", characterRoutes);

module.exports = router;
