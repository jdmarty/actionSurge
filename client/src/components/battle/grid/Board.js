import React from "react"
import { render } from "react-dom"
import Square from "./Square"
import Token from "./Token"

function Board({squaresPerLine, combatants}) {
  // Create an array of squares to render
  const renderSquares = () => {
    const grid = []
    // loop until all squares are generated
    for (let i=0; i < squaresPerLine * squaresPerLine; i++) {
      if (combatants[i]) {
       const square = (
         <Square squaresPerLine={squaresPerLine} key={"square" + i}>
           <Token {...combatants[i]} />
         </Square>
       );
       grid.push(square)
      } else {
        const square = (
          <Square squaresPerLine={squaresPerLine} key={"square" + i} />
        );
        grid.push(square);
      }
    }
    return grid
  }
  return (
    <div className="flex flex-wrap" style={{ height: "90%" }}>
      {renderSquares()}
    </div>
  )
}

export default Board