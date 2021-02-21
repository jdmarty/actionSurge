import React, { useState, useRef, useEffect } from "react";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_TOP } from "../../utils/actions";

function AbilitiesCard(props) {
  // State
  const [score, setScore] = useState(10);
  const [playerState, playerDispatch] = useCreatePlayerContext();

  // Reference
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
    playerDispatch({
      type: ADJUST_PLAYER_TOP,
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
    <div className="col-span-2">
      {/* Card Header */}
      <h3 className="bg-green-300 text-center">{props.type}</h3>
      {/* Card Body */}
      <div className="h-1/2 bg-blue-300 text-center">
        <input
          type="number"
          className="text-center text-3xl w-full h-full"
          name={props.type.toLowerCase()}
          value={score}
          ref={thisScore}
          onChange={handleChange}
        ></input>
      </div>
      {/* Card Footer */}
      <div className="bg-gray-300 text-center text-2xl">{renderBonus()}</div>
    </div>
  );
}

export default AbilitiesCard;
