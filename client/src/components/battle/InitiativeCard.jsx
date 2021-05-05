import React, { useEffect, useRef, useState } from "react";
import HealthBar from "../battle/HealthBar.jsx";

function InitiativeCard(props) {
  // conditional class for monster and first
  const monster = props.type === "monster" ? true : false;
  // state to track initiative value
  const [initiative, setInitiative] = useState(0);
  const initiativeInput = useRef();

  //set initiative to match props
  useEffect(() => {
    setInitiative(props.initiative);
  }, [props.initiative]);

  // handler to update initiative
  const handleInitiativeChange = () => {
    const newInitiative = initiativeInput.current.value;
    setInitiative(newInitiative);
  };

  // current health
  const remainingHealth = (props.current_hit_points / props.hit_points) * 100;

  return (
    <li
      className={`border my-4 flex justify-between px-4 py-2 rounded-md cursor-pointer ${
        monster ? "border-red-800 bg-red-300 " : "border-green-800 bg-green-300 "
      }${props.first && "ring-4 ring-yellow-500 border-0"}`}
      onClick={() => props.onViewClick(props.name, props._id)}
    >
      {/* Display Name */}
      <dt
        className={`w-1/2 ${props.current_hit_points <= 0 && "line-through"} truncate`}
      >
        {props.name}
        <HealthBar health={remainingHealth} height={5}/>
      </dt>
      {/* Flexbox containing initiative input */}
      <div className="text-right flex justify-between mx-2">
        <label>Initiative</label>
        {/* On change update local state, on blur update global state */}
        <input
          className="w-12 mx-2 text-center"
          type="number"
          value={initiative}
          ref={initiativeInput}
          onChange={handleInitiativeChange}
          onBlur={() => props.onChange(initiative, props.name, props.id)}
        ></input>
      </div>
      {/* Button to delete combatant */}
      <button
        className="text-right hover:text-red-800"
        onClick={(e) => {
          e.stopPropagation()
          props.onClick(props._id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default InitiativeCard;
