export const raceOptions = [
  { value: "dragonborn", label: "Dragonborn" },
  { value: "dwarf", label: "Dwarf" },
  { value: "elf", label: "Elf" },
  { value: "gnome", label: "Gnome" },
  { value: "half-elf", label: "Half-Elf" },
  { value: "half-orc", label: "Half-Orc" },
  { value: "halfling", label: "Halfling" },
  { value: "human", label: "Human" },
  { value: "tiefling", label: "Tiefling" },
];

export const classOptions = [
  { value: "barbarian", label: "Barbarian" },
  { value: "bard", label: "Bard" },
  { value: "cleric", label: "Cleric" },
  { value: "druid", label: "Druid" },
  { value: "fighter", label: "Fighter" },
  { value: "monk", label: "Monk" },
  { value: "paladin", label: "Paladin" },
  { value: "ranger", label: "Ranger" },
  { value: "rogue", label: "Rogue" },
  { value: "sorcerer", label: "Sorcerer" },
  { value: "warlock", label: "Warlock" },
  { value: "wizard", label: "Wizard" },
];

export const subraceOptions = {
  dragonborn: [{ value: "", label: "None" }],
  "half-elf": [{ value: "", label: "None" }],
  "half-orc": [{ value: "", label: "None" }],
  human: [{ value: "", label: "None" }],
  tiefling: [{ value: "", label: "None" }],
  dwarf: [{ value: "hill-dwarf", label: "Hill Dwarf" }],
  elf: [{ value: "high-elf", label: "High Elf" }],
  gnome: [{ value: "rock-gnome", label: "Rock Gnome" }],
  halfling: [{ value: "lightfoot-halfling", label: "Lightfoot Halfling" }],
};

export const subclassOptions = {
  barbarian: [
    { value: "berserker", label: "Berserker" },
    { value: "", label: "None" },
  ],
  bard: [
    { value: "lore", label: "Lore" },
    { value: "", label: "None" },
  ],
  cleric: [
    { value: "life", label: "Life" },
    { value: "", label: "None" },
  ],
  druid: [
    { value: "land", label: "Land" },
    { value: "", label: "None" },
  ],
  fighter: [
    { value: "champion", label: "Champion" },
    { value: "", label: "None" },
  ],
  monk: [
    { value: "open-hand", label: "Open Hand" },
    { value: "", label: "None" },
  ],
  paladin: [
    { value: "devotion", label: "Devotion" },
    { value: "", label: "None" },
  ],
  ranger: [
    { value: "hunter", label: "Hunter" },
    { value: "", label: "None" },
  ],
  rogue: [
    { value: "thief", label: "Thief" },
    { value: "", label: "None" },
  ],
  sorcerer: [
    { value: "draconic", label: "Draconic" },
    { value: "", label: "None" },
  ],
  warlock: [
    { value: "fiend", label: "Fiend" },
    { value: "", label: "None" },
  ],
  wizard: [
    { value: "evocation", label: "Evocation" },
    { value: "", label: "None" },
  ],
};

const levels = () => {
  let levels = [];
  for (let i = 1; i <= 20; i++) {
    levels.push({ value: i, label: i });
  }
  return levels;
};

export const levelOptions = levels();

export const damageTypes = [
  { value: "acid", label: "Acid" },
  { value: "bludgeoning", label: "Bludgeoning" },
  { value: "cold", label: "Cold" },
  { value: "fire", label: "Force" },
  { value: "lightning", label: "Lightning" },
  { value: "necrotic", label: "Necrotic" },
  { value: "piercing", label: "Piercing" },
  { value: "poison", label: "Poison" },
  { value: "psychic", label: "Psychic" },
  { value: "radiant", label: "Radiant" },
  { value: "slashing", label: "Slashing" },
  { value: "thunder", label: "Thunder" },
];

export const conditions = [
  { value: "blinded", label: "Blinded" },
  { value: "charmed", label: "Charmed" },
  { value: "deafened", label: "Deafened" },
  { value: "exhaustion", label: "Exhaustion" },
  { value: "frightened", label: "Frightened" },
  { value: "grappled", label: "Grappled" },
  { value: "incapacitated", label: "incapacitated" },
  { value: "paralyzed", label: "Paralyzed" },
  { value: "petrified", label: "Petrified" },
  { value: "poisoned", label: "Poisoned" },
  { value: "prone", label: "Prone" },
  { value: "restrained", label: "Restrained" },
  { value: "stunned", label: "Stunned" },
  { value: "unconscious", label: "Unconscious" },
];

export const skills = [
  { value: "acrobatics", label: "Acrobatics", base: "dexterity" },
  { value: "animal-handling", label: "Animal Handling", base: "wisdom" },
  { value: "arcana", label: "Arcana", base: "intelligence" },
  { value: "athletics", label: "Athletics", base: "strength" },
  { value: "deception", label: "Deception", base: "charisma" },
  { value: "history", label: "History", base: "intelligence" },
  { value: "insight", label: "Insight", base: "wisdom" },
  { value: "intimidation", label: "Intimidation", base: "charisma" },
  { value: "investigation", label: "Investigation", base: "intelligence" },
  { value: "medicine", label: "Medicine", base: "wisdom" },
  { value: "nature", label: "Nature", base: "intelligence" },
  { value: "perception", label: "Perception", base: "wisdom" },
  { value: "performance", label: "Performance", base: "charisma" },
  { value: "persuasion", label: "Persuasion", base: "charisma" },
  { value: "religion", label: "Religion", base: "intelligence" },
  { value: "sleight-of-hand", label: "Sleight of Hand", base: "dexterity" },
  { value: "stealth", label: "Stealth", base: "dexterity" },
  { value: "survival", label: "Survival", base: "wisdom" },
];
