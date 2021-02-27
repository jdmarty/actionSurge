import React from "react";

function DiceBox(props) {
  // Component for a single di
  const Di = (props) => {
    return (
      <span
        className={
          "bg-indigo-800 text-white m-2 p-2 hover:bg-white hover:text-black border-2 border-white text-center rounded-md cursor-pointer " +
          props.animation
        }
        style={{ minWidth: 50 }}
        onClick={(e) => props.onClick(e, props.index)}
      >
        {props.roll}
      </span>
    );
  };

  // render a group of divs to represent dice
  const renderDice = () => {
    // map out and array of dice
    return props.rolls.map((roll, index) => {
      if (typeof roll === "string") {
        return (
          <Di
            roll={"d" + roll}
            animation=""
            key={"di" + index}
            index={index}
            onClick={props.onClick}
          />
        );
      } else {
        return (
          <Di
            roll={roll}
            animation="diceSpin"
            key={"di" + index}
            index={index}
            onClick={props.onClick}
          />
        );
      }
    });
  };

  return (
    <div className="grid grid-cols-12 text-white">
      <div className="flex flex-wrap justify-around py-2 overflow-auto col-span-8">
        {renderDice()}
      </div>
      <div className="col-span-2 py-2 text-center">
        <h3>Modifier</h3>
        <p>{props.mod >= 0 ? "+" + props.mod : props.mod}</p>
      </div>
      <div className="col-span-2 py-2 text-center">
        <h3>Result</h3>
        <p>{props.result}</p>
      </div>
    </div>
  );
}

export default DiceBox;
