export const rollDice = (type) => {
  return Math.ceil(Math.random() * type)
}

export const getBonusFromStat = (raw) => {
  return Math.floor((raw - 10) / 2)
}
