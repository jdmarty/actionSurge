import { v4 as uuid } from "uuid";

class Monster {
  constructor(data, combatants, xPos, yPos) {
    // loop over data object to import values
    for (let key in data) {
      this[key] = data[key];
    }
    // check for duplicate names in the combatants array
    let modifier = 1;
    const originalName = this.name;
    while (combatants.find((monster) => monster.name === this.name)) {
      this.name = `${originalName} (${modifier})`;
      modifier++;
    }
    // give the new monster a base initiative, health, and position
    this._id = uuid();
    this.type = "monster"
    this.initiative = 0;
    this.current_hit_points = this.hit_points;
    this.xPos = xPos;
    this.yPos = yPos;
    // give the new monster a max speed from their best movement option
    let maxSpeed = 0;
    for (let type in this.speed) {
      const speedInFt = parseInt(this.speed[type].split(" ")[0]);
      if (speedInFt > maxSpeed) maxSpeed = speedInFt;
    }
    this.maxSpeed = maxSpeed;
  }

  // function to update hit points to a set value
  setHP(value) {
    this.current_hit_points = value;
  }

  // function to update position
  setPos(x, y) {
    this.xPos = x;
    this.yPos = y;
  }

  // function to set initiative to a set value
  setInitiative(value) {
    this.initiative = value;
  }
}

export default Monster;
