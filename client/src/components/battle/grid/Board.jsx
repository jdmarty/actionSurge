import React from "react";
import Square from "./Square.jsx";
import Token from "./Token.jsx";

function Board({ spl, combatants, mover, setMover, move, firstCombatant }) {
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
      // check if that combatant if the first combatant
      const isFirst = (thisToken, firstToken) => {
        if (thisToken._id && thisToken._id === firstToken._id) return true
        if (thisToken.name === firstToken.name) return true
        return false
      }
      // if there is a combatant there, render a token, otherwise an empty square
      if (isTokenHere) {
        grid.push(
          <Square spl={spl} onMouseUp={() => move(x, y)} key={i}>
            <Token
              {...isTokenHere}
              first={isFirst(isTokenHere, firstCombatant)}
              mover={mover}
              onMouseDown={setMover}
              spl={spl}
            />
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
    <div className="flex flex-wrap" style={{ height: "88%" }}>
      {renderBoard()}
    </div>
  );
}

export default Board;
