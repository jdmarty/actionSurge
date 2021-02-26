import React, { useState, useRef, useEffect } from "react";
import { getBonusFromStat } from "../../utils/battleFunctions"

function DisplayCharacter(props) {
  // state to track hitpoints
  const [hitPoints, setHitPoints] = useState(props.current_hit_points);

  // update hitpoints when props change
  useEffect(() => {
    setHitPoints(props.current_hit_points)
  }, [props.current_hit_points])

  // input references
  const hitPointsInput = useRef();

  // handle changes to hit points
  const handleChange = () => {
    // maintain hitpoints above 0
    let newHitPoints = hitPointsInput.current.value;
    if (newHitPoints < 0) newHitPoints = 0
    // set hit points locally and globally
    setHitPoints(newHitPoints)
    props.onChange(newHitPoints, props.name, props._id);
  }

  // render ability score cards
  const renderAbilityCard = (name, stat) => {
    const bonus = getBonusFromStat(stat)

    return (
      <div className="text-center border w-12">
        <h2>{name}</h2>
        <p>{stat}</p>
        <p>{bonus >= 0 ? "+ "+bonus : bonus}</p>
      </div>
    )
  }

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
      {/* Ability Score Cards */}
      <div className="px-6 flex flex-wrap justify-around">
        {renderAbilityCard("STR", props.strength)}
        {renderAbilityCard("DEX", props.dexterity)}
        {renderAbilityCard("CON", props.constitution)}
        {renderAbilityCard("INT", props.intelligence)}
        {renderAbilityCard("WIS", props.wisdom)}
        {renderAbilityCard("CHA", props.charisma)}
      </div>
    </>
  );
}

export default DisplayCharacter;
