import React, { useState, useRef, useEffect } from "react";
import { getBonusFromStat, parseIndexName } from "../../utils/battleFunctions";

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

  // Render Speed Cards
  const renderSpeeds = (props) => {
    const speeds = Object.keys(props.speed);
    return speeds.map((speed) => {
      return (
        <span className="text-xl">
          {parseIndexName(speed)}: {props.speed[speed]}
        </span>
      );
    });
  };

  // Ability score cards
  const AbilityCard = (props) => {
    const bonus = getBonusFromStat(props.stat);
    const getColor = (stat) => {
      if (stat > 10) return "bg-green-500";
      if (stat === 10) return "bg-yellow-500";
      return "bg-red-500";
    };
    return (
      <div
        className={`text-center border w-12 rounded-md ${getColor(props.stat)}`}
      >
        <h2>{props.name}</h2>
        <p>{props.stat}</p>
        <p>{bonus >= 0 ? "+ " + bonus : bonus}</p>
      </div>
    );
  };

  // Defense Cards
  const DefenseCard = (props) => {
    if (props.array.length < 1) return <></>;
    return (
      <div className="text-center border w-24 rounded-md bg-white">
        <h2 className="border-b bg-black text-white rounded-md">
          {props.name}
        </h2>
        {props.array.map((item, index) => {
          return (
            <p className="text-sm border" key={props.name + index}>
              {item.name ? item.name : parseIndexName(item)}
            </p>
          );
        })}
      </div>
    );
  };

  // Render Proficiencies
  const renderProficiencies = (props) => {
    return props.proficiencies.map((prof) => {
      return (
        <li className="flex justify-between">
          <span>{prof.proficiency.name}</span>
          <span>{prof.value >= 0 ? "+" + prof.value : prof.value}</span>
        </li>
      );
    });
  };

  // Render Actions
  const renderActions = (props) => {
    return props.actions.map(action => {
      return <div className="mt-2">
        <h3 className="bg-red-300">{action.name}</h3>
        <p className="bg-white">{action.desc}</p>
      </div>
    })
  }

  return (
    <div className="text-center">
      {/* Name Header */}
      <h1 className="text-center m-2 text-2xl text-red-800">{props.name}</h1>
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
      {/* Speeds */}
      <div className="px-6 flex flex-wrap justify-around mb-2">
        {renderSpeeds(props)}
      </div>
      {/* Ability Score Cards */}
      <h2 className="border-b">Ability Scores</h2>
      <div className="px-6 my-2 flex flex-wrap justify-around">
        <AbilityCard name="STR" stat={props.strength} />
        <AbilityCard name="DEX" stat={props.dexterity} />
        <AbilityCard name="CON" stat={props.constitution} />
        <AbilityCard name="INT" stat={props.intelligence} />
        <AbilityCard name="WIS" stat={props.wisdom} />
        <AbilityCard name="CHA" stat={props.charisma} />
      </div>
      {/* Defenses */}
      <h2 className="border-b">Defenses</h2>
      <div className="px-6 my-2 flex flex-wrap justify-around space-x-2">
        <DefenseCard
          name="Immune"
          array={props.damage_immunities.concat(props.condition_immunities)}
        />
        <DefenseCard name="Resistant" array={props.damage_resistances} />
        <DefenseCard name="Vulnerable" array={props.damage_vulnerabilities} />
      </div>
      {/* Proficiencies */}
      <h2 className="border-b">Proficiencies</h2>
      <ul className="px-10 my-2">{renderProficiencies(props)}</ul>
      {/* Proficiencies */}
      <h2 className="border-b">Actions</h2>
      <div className="px-10 my-2">{renderActions(props)}</div>
    </div>
  );
}

export default DisplayMonster;
