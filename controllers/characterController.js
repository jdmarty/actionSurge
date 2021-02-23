const { Character } = require("../models");

// function to create a new player
async function createCharacter(req, res) {
  try {
    const newPlayer = await Character.create(req.body);
    res.json(newPlayer);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// function to get all characters for a user
async function getUserCharacters(req, res) {
  try {
    const userCharacters = await Character.find({ user_id: req.params.id });
    res.json(userCharacters);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// function to get a single character
async function getCharacter(req, res) {
  try {
    const userCharacter = await Character.findOne({ _id: req.params.id });
    res.json(userCharacter);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// function to update a single character
async function updateCharacter(req, res) {
  try {
    const updatedCharacter = await Character.updateOne({
      _id: req.params.id
    }, req.body);
    res.json(updatedCharacter);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = {
  createCharacter,
  getUserCharacters,
  getCharacter,
  updateCharacter
};
