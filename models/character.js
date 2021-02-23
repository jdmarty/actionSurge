const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  user_id: String,
  name: {
    type: String,
    trim: true,
    required: "A name is required",
  },

  hit_points: {
    type: Number,
    validate: [(num) => num > 0, "Hit points must be greater than 0"],
  },

  armor_class: {
    type: Number,
    validate: [(num) => num >= 0, "Armor class must be greater than 0"],
  },

  race: {
    type: String,
    required: "A race is required",
  },

  subrace: String,

  classType: {
    type: String,
    required: "A class is required",
  },

  subclass: String,

  level: {
    type: Number,
    required: "A level is required",
  },

  proficiency: Number,

  strength: Number,

  dexterity: Number,

  constitution: Number,

  intelligence: Number,

  wisdom: Number,

  charisma: Number,

  save_proficiencies: [String],

  damage_immunities: [String],

  damage_resistances: [String],

  damage_vulnerabilities: [String],

  condition_immunities: [String],

  skill_proficiencies: [String],

  skill_expertise: [String],

  spells: [String],

  weapons: [String],

  armor: [String],

  potions: [String]
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
