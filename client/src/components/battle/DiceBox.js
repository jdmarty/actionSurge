import React from "react";
import { rollDice } from "../../utils/battleFunctions";

function DiceBox(props) {
  // Component for a single di
  const Di = (props) => {
    return <div className={"bg-white m-2 p-2 hover:bg-black hover:text-white border-2 border-white"+props.animation}>{props.roll}</div>
  }

  // render a group of divs to represent dice
  const renderDice = () => {
    return props.rolls.map((roll) => {
      if (typeof roll === "string") {
        return <Di roll={"d"+roll} animation=""/>
      } else {
        return <Di roll={roll} animation="diceSpin"/>;
      }
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-wrap justify-around py-2 border border-red-800 overflow-auto col-span-8">
        {renderDice()}
      </div>
      <div className="border border-red-800 col-span-2 py-2">
        <h3 className="text-center py-2">Modifier</h3>
        <p className="text-center">{props.mod >= 0 ? "+"+ props.mod : props.mod}</p>
      </div>
      <div className="border border-red-800 col-span-2 py-2">
        <h3 className="text-center py-2">Result</h3>
        <p className="text-center">{props.result}</p>
      </div>
    </div>
  );
}

export default DiceBox;
