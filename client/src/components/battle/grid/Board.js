import React from "react";
import Square from "./Square";
import Token from "./Token";

function Board({ spl, combatants, mover, setMover, move }) {
  // check if the mover is active
  const active = mover.name ? true : false

  // Create an array of squares to render
  const renderBoard = () => {
    const grid = [];
    // loop until all squares are generated
    for (let i = 0; i < spl * spl; i++) {
      const x = i % spl;
      const y = Math.floor(i / spl);
      // look in the combatants array for a combatant at that position
      const isTokenHere = combatants.find((combatant) => {
        return combatant.xPos === x && combatant.yPos === y;
      });
      // if there is a combatant there, render a token, otherwise an empty square
      if (isTokenHere) {
        grid.push(
          <Square spl={spl} onMouseUp={() => move(x, y)} key={i}>
            <Token {...isTokenHere} onMouseDown={setMover} mover={mover}/>
          </Square>
        );
      } else {
        grid.push(
          <Square
            spl={spl}
            onMouseUp={() => move(x, y)}
            key={i}
            active={active}
          />
        );
      }
    }
    return grid;
  };
  // return a flexbox containing the prescribed number of squares
  return (
    <div className="flex flex-wrap" style={{ height: "90%" }}>
      {renderBoard()}
    </div>
  );
}

export default Board;
