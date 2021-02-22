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

export const weapons = [
  {
    value: "club",
    label: "Club",
    url: "/api/equipment/club",
  },
  {
    value: "dagger",
    label: "Dagger",
    url: "/api/equipment/dagger",
  },
  {
    value: "greatclub",
    label: "Greatclub",
    url: "/api/equipment/greatclub",
  },
  {
    value: "handaxe",
    label: "Handaxe",
    url: "/api/equipment/handaxe",
  },
  {
    value: "javelin",
    label: "Javelin",
    url: "/api/equipment/javelin",
  },
  {
    value: "light-hammer",
    label: "Light hammer",
    url: "/api/equipment/light-hammer",
  },
  {
    value: "mace",
    label: "Mace",
    url: "/api/equipment/mace",
  },
  {
    value: "quarterstaff",
    label: "Quarterstaff",
    url: "/api/equipment/quarterstaff",
  },
  {
    value: "sickle",
    label: "Sickle",
    url: "/api/equipment/sickle",
  },
  {
    value: "spear",
    label: "Spear",
    url: "/api/equipment/spear",
  },
  {
    value: "crossbow-light",
    label: "Crossbow, light",
    url: "/api/equipment/crossbow-light",
  },
  {
    value: "dart",
    label: "Dart",
    url: "/api/equipment/dart",
  },
  {
    value: "shortbow",
    label: "Shortbow",
    url: "/api/equipment/shortbow",
  },
  {
    value: "sling",
    label: "Sling",
    url: "/api/equipment/sling",
  },
  {
    value: "battleaxe",
    label: "Battleaxe",
    url: "/api/equipment/battleaxe",
  },
  {
    value: "flail",
    label: "Flail",
    url: "/api/equipment/flail",
  },
  {
    value: "glaive",
    label: "Glaive",
    url: "/api/equipment/glaive",
  },
  {
    value: "greataxe",
    label: "Greataxe",
    url: "/api/equipment/greataxe",
  },
  {
    value: "greatsword",
    label: "Greatsword",
    url: "/api/equipment/greatsword",
  },
  {
    value: "halberd",
    label: "Halberd",
    url: "/api/equipment/halberd",
  },
  {
    value: "lance",
    label: "Lance",
    url: "/api/equipment/lance",
  },
  {
    value: "longsword",
    label: "Longsword",
    url: "/api/equipment/longsword",
  },
  {
    value: "maul",
    label: "Maul",
    url: "/api/equipment/maul",
  },
  {
    value: "morningstar",
    label: "Morningstar",
    url: "/api/equipment/morningstar",
  },
  {
    value: "pike",
    label: "Pike",
    url: "/api/equipment/pike",
  },
  {
    value: "rapier",
    label: "Rapier",
    url: "/api/equipment/rapier",
  },
  {
    value: "scimitar",
    label: "Scimitar",
    url: "/api/equipment/scimitar",
  },
  {
    value: "shortsword",
    label: "Shortsword",
    url: "/api/equipment/shortsword",
  },
  {
    value: "trident",
    label: "Trident",
    url: "/api/equipment/trident",
  },
  {
    value: "war-pick",
    label: "War pick",
    url: "/api/equipment/war-pick",
  },
  {
    value: "warhammer",
    label: "Warhammer",
    url: "/api/equipment/warhammer",
  },
  {
    value: "whip",
    label: "Whip",
    url: "/api/equipment/whip",
  },
  {
    value: "blowgun",
    label: "Blowgun",
    url: "/api/equipment/blowgun",
  },
  {
    value: "crossbow-hand",
    label: "Crossbow, hand",
    url: "/api/equipment/crossbow-hand",
  },
  {
    value: "crossbow-heavy",
    label: "Crossbow, heavy",
    url: "/api/equipment/crossbow-heavy",
  },
  {
    value: "longbow",
    label: "Longbow",
    url: "/api/equipment/longbow",
  },
  {
    value: "net",
    label: "Net",
    url: "/api/equipment/net",
  },
  {
    value: "berserker-axe",
    label: "Berserker Axe",
    url: "/api/magic-items/berserker-axe",
  },
  {
    value: "dagger-of-venom",
    label: "Dagger of Venom",
    url: "/api/magic-items/dagger-of-venom",
  },
  {
    value: "dancing-sword",
    label: "Dancing Sword",
    url: "/api/magic-items/dancing-sword",
  },
  {
    value: "defender",
    label: "Defender",
    url: "/api/magic-items/defender",
  },
  {
    value: "dragon-slayer",
    label: "Dragon Slayer",
    url: "/api/magic-items/dragon-slayer",
  },
  {
    value: "dwarven-thrower",
    label: "Dwarven Thrower",
    url: "/api/magic-items/dwarven-thrower",
  },
  {
    value: "flame-tongue",
    label: "Flame Tongue",
    url: "/api/magic-items/flame-tongue",
  },
  {
    value: "frost-brand",
    label: "Frost Brand",
    url: "/api/magic-items/frost-brand",
  },
  {
    value: "giant-slayer",
    label: "Giant Slayer",
    url: "/api/magic-items/giant-slayer",
  },
  {
    value: "hammer-of-thunderbolts",
    label: "Hammer of Thunderbolts",
    url: "/api/magic-items/hammer-of-thunderbolts",
  },
  {
    value: "holy-avenger",
    label: "Holy Avenger",
    url: "/api/magic-items/holy-avenger",
  },
  {
    value: "javelin-of-lightning",
    label: "Javelin of Lightning",
    url: "/api/magic-items/javelin-of-lightning",
  },
  {
    value: "luck-blade",
    label: "Luck Blade",
    url: "/api/magic-items/luck-blade",
  },
  {
    value: "mace-of-disruption",
    label: "Mace of Disruption",
    url: "/api/magic-items/mace-of-disruption",
  },
  {
    value: "mace-of-smiting",
    label: "Mace of Smiting",
    url: "/api/magic-items/mace-of-smiting",
  },
  {
    value: "mace-of-terror",
    label: "Mace of Terror",
    url: "/api/magic-items/mace-of-terror",
  },
  {
    value: "nine-lives-stealer",
    label: "Nine Lives Stealer",
    url: "/api/magic-items/nine-lives-stealer",
  },
  {
    value: "oathbow",
    label: "Oathbow",
    url: "/api/magic-items/oathbow",
  },
  {
    value: "scimitar-of-speed",
    label: "Scimitar of Speed",
    url: "/api/magic-items/scimitar-of-speed",
  },
  {
    value: "sun-blade",
    label: "Sun Blade",
    url: "/api/magic-items/sun-blade",
  },
  {
    value: "sword-of-life-stealing",
    label: "Sword of Life Stealing",
    url: "/api/magic-items/sword-of-life-stealing",
  },
  {
    value: "sword-of-sharpness",
    label: "Sword of Sharpness",
    url: "/api/magic-items/sword-of-sharpness",
  },
  {
    value: "sword-of-wounding",
    label: "Sword of Wounding",
    url: "/api/magic-items/sword-of-wounding",
  },
  {
    value: "trident-of-fish-command",
    label: "Trident of Fish Command",
    url: "/api/magic-items/trident-of-fish-command",
  },
  {
    value: "vicious-weapon",
    label: "Vicious Weapon",
    url: "/api/magic-items/vicious-weapon",
  },
  {
    value: "vorpal-sword",
    label: "Vorpal Sword",
    url: "/api/magic-items/vorpal-sword",
  },
];

export const armor = [
  {
    value: "padded",
    label: "Padded",
    url: "/api/equipment/padded",
  },
  {
    value: "leather",
    label: "Leather",
    url: "/api/equipment/leather",
  },
  {
    value: "studded-leather",
    label: "Studded Leather",
    url: "/api/equipment/studded-leather",
  },
  {
    value: "hide",
    label: "Hide",
    url: "/api/equipment/hide",
  },
  {
    value: "chain-shirt",
    label: "Chain Shirt",
    url: "/api/equipment/chain-shirt",
  },
  {
    value: "scale-mail",
    label: "Scale Mail",
    url: "/api/equipment/scale-mail",
  },
  {
    value: "breastplate",
    label: "Breastplate",
    url: "/api/equipment/breastplate",
  },
  {
    value: "half-plate",
    label: "Half Plate",
    url: "/api/equipment/half-plate",
  },
  {
    value: "ring-mail",
    label: "Ring Mail",
    url: "/api/equipment/ring-mail",
  },
  {
    value: "chain-mail",
    label: "Chain Mail",
    url: "/api/equipment/chain-mail",
  },
  {
    value: "splint",
    label: "Splint",
    url: "/api/equipment/splint",
  },
  {
    value: "plate",
    label: "Plate",
    url: "/api/equipment/plate",
  },
  {
    value: "shield",
    label: "Shield",
    url: "/api/equipment/shield",
  },
  {
    value: "adamantine-armor",
    label: "Adamantine Armor",
    url: "/api/magic-items/adamantine-armor",
  },
  {
    value: "animated-shield",
    label: "Animated Shield",
    url: "/api/magic-items/animated-shield",
  },
  {
    value: "armor",
    label: "Armor, +1, +2, or +3",
    url: "/api/magic-items/armor",
  },
  {
    value: "armor-of-invulnerability",
    label: "Armor of Invulnerability",
    url: "/api/magic-items/armor-of-invulnerability",
  },
  {
    value: "armor-of-resistance",
    label: "Armor of Resistance",
    url: "/api/magic-items/armor-of-resistance",
  },
  {
    value: "armor-of-vulnerability",
    label: "Armor of Vulnerability",
    url: "/api/magic-items/armor-of-vulnerability",
  },
  {
    value: "arrow-catching-shield",
    label: "Arrow-Catching Shield",
    url: "/api/magic-items/arrow-catching-shield",
  },
  {
    value: "demon-armor",
    label: "Demon Armor",
    url: "/api/magic-items/demon-armor",
  },
  {
    value: "dragon-scale-mail",
    label: "Dragon Scale Mail",
    url: "/api/magic-items/dragon-scale-mail",
  },
  {
    value: "dwarven-plate",
    label: "Dwarven Plate",
    url: "/api/magic-items/dwarven-plate",
  },
  {
    value: "elven-chain",
    label: "Elven Chain",
    url: "/api/magic-items/elven-chain",
  },
  {
    value: "glamoured-studded-leather",
    label: "Glamoured Studded Leather",
    url: "/api/magic-items/glamoured-studded-leather",
  },
  {
    value: "mithral-armor",
    label: "Mithral Armor",
    url: "/api/magic-items/mithral-armor",
  },
  {
    value: "plate-armor-of-etherealness",
    label: "Plate Armor of Etherealness",
    url: "/api/magic-items/plate-armor-of-etherealness",
  },
  {
    value: "shield-of-missile-attraction",
    label: "Shield of Missile Attraction",
    url: "/api/magic-items/shield-of-missile-attraction",
  },
  {
    value: "spellguard-shield",
    label: "Spellguard Shield",
    url: "/api/magic-items/spellguard-shield",
  },
];

export const potions = [
  {
    value: "oil-of-etherealness",
    label: "Oil of Etherealness",
    url: "/api/magic-items/oil-of-etherealness",
  },
  {
    value: "oil-of-sharpness",
    label: "Oil of Sharpness",
    url: "/api/magic-items/oil-of-sharpness",
  },
  {
    value: "oil-of-slipperiness",
    label: "Oil of Slipperiness",
    url: "/api/magic-items/oil-of-slipperiness",
  },
  {
    value: "philter-of-love",
    label: "Philter of Love",
    url: "/api/magic-items/philter-of-love",
  },
  {
    value: "potion-of-animal-friendship",
    label: "Potion of Animal Friendship",
    url: "/api/magic-items/potion-of-animal-friendship",
  },
  {
    value: "potion-of-clairvoyance",
    label: "Potion of Clairvoyance",
    url: "/api/magic-items/potion-of-clairvoyance",
  },
  {
    value: "potion-of-climbing",
    label: "Potion of Climbing",
    url: "/api/magic-items/potion-of-climbing",
  },
  {
    value: "potion-of-diminution",
    label: "Potion of Diminution",
    url: "/api/magic-items/potion-of-diminution",
  },
  {
    value: "potion-of-flying",
    label: "Potion of Flying",
    url: "/api/magic-items/potion-of-flying",
  },
  {
    value: "potion-of-gaseous-form",
    label: "Potion of Gaseous Form",
    url: "/api/magic-items/potion-of-gaseous-form",
  },
  {
    value: "potion-of-giant-strength",
    label: "Potion of Giant Strength",
    url: "/api/magic-items/potion-of-giant-strength",
  },
  {
    value: "potion-of-growth",
    label: "Potion of Growth",
    url: "/api/magic-items/potion-of-growth",
  },
  {
    value: "potion-of-healing",
    label: "Potion of Healing",
    url: "/api/magic-items/potion-of-healing",
  },
  {
    value: "potion-of-heroism",
    label: "Potion of Heroism",
    url: "/api/magic-items/potion-of-heroism",
  },
  {
    value: "potion-of-invisibility",
    label: "Potion of Invisibility",
    url: "/api/magic-items/potion-of-invisibility",
  },
  {
    value: "potion-of-mind-reading",
    label: "Potion of Mind Reading",
    url: "/api/magic-items/potion-of-mind-reading",
  },
  {
    value: "potion-of-poison",
    label: "Potion of Poison",
    url: "/api/magic-items/potion-of-poison",
  },
  {
    value: "potion-of-resistance",
    label: "Potion of Resistance",
    url: "/api/magic-items/potion-of-resistance",
  },
  {
    value: "potion-of-speed",
    label: "Potion of Speed",
    url: "/api/magic-items/potion-of-speed",
  },
  {
    index: "potion-of-water-breathing",
    label: "Potion of Water Breathing",
    url: "/api/magic-items/potion-of-water-breathing",
  },
];
