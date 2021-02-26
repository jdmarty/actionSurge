import React, { useState, useRef, useEffect } from "react";

function DisplayMonster(props) {
  // state to track hitpoints
  const [hitPoints, setHitPoints] = useState(props.current_hit_points);

  // update hitpoints when props change
  useEffect(() => {
    setHitPoints(props.current_hit_points);
  }, [props.current_hit_points]);

  // input references
  const hitPointsInput = useRef();

  // handle changes to hit points
  const handleChange = () => {
    // maintain hitpoints above 0
    let newHitPoints = hitPointsInput.current.value;
    if (newHitPoints < 0) newHitPoints = 0;
    // set hit points locally and globally
    setHitPoints(newHitPoints);
    props.onChange(newHitPoints, props.name, props._id);
  };

  return (
    <>
      {/* Name Header */}
      <h1 className="text-center m-2 text-2xl">{props.name}</h1>
      {/* Hit Points and Armor Class */}
      <div className="px-6 flex flex-wrap justify-around">
        {/* Hit Points */}
        <div className="text-center flex text-red-500 text-2xl">
          <i className="fas fa-2x fa-heart"></i>
          <input
            className="mx-2 w-16 text-center bg-transparent"
            type="number"
            ref={hitPointsInput}
            value={hitPoints}
            onChange={handleChange}
          ></input>
          <span className="font-bold">/ {props.hit_points}</span>
        </div>
        {/* Armor Class */}
        <div className="text-center flex text-2xl relative">
          <i className="fas fa-2x fa-shield"></i>
          <span className="absolute text-white" style={{ right: "25%" }}>
            {props.armor_class}
          </span>
        </div>
      </div>
    </>
  );
}

export default DisplayMonster;
