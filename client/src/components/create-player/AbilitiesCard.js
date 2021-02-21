import React, { useState, useRef } from "react";

function AbilitiesCard(props) {
  const [score, setScore] = useState(10);

  const thisScore = useRef()

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
