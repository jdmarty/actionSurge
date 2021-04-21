const monsterAPI = {
  // call to create a new monster from API data
  createNewMonster: function(monsterData, currentCombatants, squaresPerLine) {
    const newMonster = { ...monsterData };
    //check for duplicates and update name accordingly
    let modifier = 1;
    const originalName = newMonster.name;
    while (
      currentCombatants.find((monster) => monster.name === newMonster.name)
    ) {
      newMonster.name = `${originalName} (${modifier})`;
      modifier++;
    }
    // give the new monster a base initiative, health, and position
    newMonster.initiative = 0;
    newMonster.current_hit_points = newMonster.hit_points;
    newMonster.xPos = currentCombatants.length % squaresPerLine;
    newMonster.yPos = Math.floor(currentCombatants.length / squaresPerLine);
    // give the new monster a max speed from their best movement option
    let maxSpeed = 0;
    for (let type in newMonster.speed) {
      const speedInFt = parseInt(newMonster.speed[type].split(" ")[0])
      if (speedInFt > maxSpeed) maxSpeed = speedInFt
    }
    newMonster.maxSpeed = maxSpeed
    // return the finished monster
    return newMonster
  },

  // call to update a monster's HP with a set value
  setMonsterHP: function(monsterData, value) {
    console.log(value)
    return {...monsterData, current_hit_points: Number(value)}
  }
}
export default monsterAPI