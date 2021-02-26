export const rollDice = (type) => {
  return Math.ceil(Math.random() * type)
}

export const getBonusFromStat = (raw) => {
  return Math.floor((raw - 10) / 2)
}

export const parseIndexName = (index) => {
 const parsedName = index.split("-").map(string => {
   const newFirstLetter = string[0].toUpperCase();
   const newString = string.split("");
   newString[0] = newFirstLetter
   return newString.join("")
 })
 return parsedName.join(" ")
}

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
