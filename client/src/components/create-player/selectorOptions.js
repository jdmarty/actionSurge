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

const levels = () => {
  let levels = [];
  for (let i=1; i <= 20; i++) {
    levels.push({value: i, label: i})
  }
  return levels
}

export const levelOptions = levels()