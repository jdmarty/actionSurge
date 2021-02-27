import React from "react"
import Square from "./Square"
import Token from "./Token"

function Board({spl, combatants}) {
  // render a square with or without a piece
  const renderSquare = (i, [tokenX, tokenY]) => {
    const x = i % spl;
    const y = Math.floor(i / spl);
    const isTokenHere = x === tokenX && y === tokenY
    const token = isTokenHere ? <Token /> : null
    return token
  }
  // pull out the x and y position of each

  // Create an array of squares to render
  const renderBoard = () => {
    const grid = []
    // loop until all squares are generated
    for (let i=0; i < spl * spl; i++) {
      const x = i % spl;
      const y = Math.floor(i / spl);
      // look in the combatants array for a combatant at that position
      const isTokenHere = combatants.find((combatant) => {
        return combatant.xPos === x && combatant.yPos === y
      })
      // if there is a combatant there, render a token, otherwise an empty square
      if (isTokenHere) {
        grid.push(<Square spl={spl}><Token {...isTokenHere} /></Square>)
      } else {
        grid.push(<Square spl={spl} />)
      }
    }
    return grid
  }
  // return a flexbox containing the prescribed number of squares
  return (
    <div className="flex flex-wrap" style={{ height: "90%" }}>
      {renderBoard()}
    </div>
  )
}

export default Board