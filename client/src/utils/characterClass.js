class Character {
  constructor(data, xPos, yPos) {
    // loop over data object to import values
    for (let key in data) {
      this[key] = data[key];
    }
    // give the new character a base initiative, health, and position
    this.type = "character"
    this.initiative = 0;
    this.current_hit_points = this.hit_points;
    this.xPos = xPos;
    this.yPos = yPos;
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

export default Character;
