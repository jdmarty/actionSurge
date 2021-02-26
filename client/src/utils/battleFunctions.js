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
