import React, { useEffect, useRef, useState } from "react";

function InitiativeCard(props) {
  // conditional class for monster and first
  const monster = props._id ? false : true;
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

  return (
    <li
      className={`border border-black my-4 flex justify-between px-4 py-2 rounded-md cursor-pointer ${
        monster ? "bg-red-300 " : "bg-green-300 "
      }${props.first && "ring-4 ring-blue-500"}`}
      onClick={() => props.onViewClick(props.name, props._id)}
    >
      {/* Display Name */}
      <dt className={`w-1/2 ${props.current_hit_points <= 0 && "line-through"}`}>{props.name}</dt>
      {/* Flexbox containing initiative input */}
      <div className="text-right flex justify-between">
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
        onClick={() => {
          props.onClick(props.name, props.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default InitiativeCard;
