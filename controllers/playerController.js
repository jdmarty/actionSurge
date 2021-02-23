const { Player } = require("../models");

// function to create a new player
async function createPlayer(req, res) {
  try {
    const newPlayer = await Player.create(req.body);
    res.json(newPlayer);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// function to get all characters for this user
async function getUserPlayers(req, res) {
  try {
    const userPlayers = await Player.find({ user_id: req.params.id });
    res.json(userPlayers);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = {
  createPlayer,
  getUserPlayers
};
