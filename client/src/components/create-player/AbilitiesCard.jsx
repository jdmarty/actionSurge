import React, { useState, useRef } from "react";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_TOP } from "../../utils/actions";

function AbilitiesCard(props) {
  // Global and Local State
  const [characterState, characterDispatch] = useCreateCharacterContext();
  const [score, setScore] = useState(characterState[props.type.toLowerCase()]);


  // Reference to input
  const thisScore = useRef()

  // Change handler
  const handleChange = e => {
    if (thisScore.current.value > 30) {
      setScore(30)
      return
    }

    if (thisScore.current.value < 0) {
      setScore(0);
      return;
    }

    setScore(thisScore.current.value)
    characterDispatch({
      type: ADJUST_CHARACTER_TOP,
      target: props.type.toLowerCase(),
      value: Number(thisScore.current.value),
    });
  }

  const renderBonus = () => {
    const bonus = Math.floor((score-10) /2);
    if (bonus >= 0) return "+" + bonus
    else return bonus
  }

  return (
    <div className="w-24 my-2">
      {/* Card Header */}
      <h3 className="bg-green-700 text-white text-center border rounded-md rounded-b-none">
        {props.type}
      </h3>
      {/* Card Body */}
      <div className="text-center">
        <input
          type="number"
          className="text-center text-3xl w-full"
          name={props.type.toLowerCase()}
          value={score}
          ref={thisScore}
          onChange={handleChange}
        ></input>
      </div>
      {/* Card Footer */}
      <div className="bg-gray-700 text-white text-center text-2xl border rounded-md rounded-t-none">
        {renderBonus()}
      </div>
    </div>
  );
}

export default AbilitiesCard;
