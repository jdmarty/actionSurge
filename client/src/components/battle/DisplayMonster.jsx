import React, { useState, useRef, useEffect } from "react";
import {
  getBonusFromStat,
  parseIndexName,
  rollDice,
} from "../../utils/battleFunctions";

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
    props.onChange(newHitPoints, props._id);
  };

  // Render Speed Cards
  const renderSpeeds = (props) => {
    const speeds = Object.keys(props.speed);
    return speeds.map((speed, index) => {
      return (
        <span className="text-xl" key={"speed" + index}>
          {parseIndexName(speed)}: {props.speed[speed]}
        </span>
      );
    });
  };

  // Ability score cards
  const AbilityCard = (props) => {
    const bonus = getBonusFromStat(props.stat);
    const getColor = (stat) => {
      if (stat > 11) return "bg-green-500";
      if (stat === 10 || stat === 11) return "bg-yellow-500";
      return "bg-red-500";
    };
    return (
      <div
        className={`hover:bg-white text-center w-12 shadow-xl rounded-md border cursor-pointer ${getColor(
          props.stat
        )}`}
        onClick={() => {
          const result = rollDice(20);
          props.onClick({
            number: 1,
            type: 20,
            mod: bonus,
            rolls: [result],
            result: result + bonus,
          });
        }}
      >
        <h2 className="font-bold">{props.name}</h2>
        <p>{props.stat}</p>
        <p className="bg-gray-800 text-white rounded w-3/4 mx-auto transform translate-y-1 border border-black">
          {bonus >= 0 ? "+ " + bonus : bonus}
        </p>
      </div>
    );
  };

  // Defense Cards
  const DefenseCard = (props) => {
    if (props.array.length < 1) return <></>;
    return (
      <div className="text-center border w-32 rounded-md bg-white">
        <h2 className="border-b bg-black text-white rounded-t-md">
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
        <li
          className="flex justify-between cursor-pointer rounded-md hover:bg-gray-800 hover:text-gray-300 px-2"
          key={prof.proficiency.name.length * Math.random()}
          onClick={() => {
            const result = rollDice(20);
            props.setDice({
              number: 1,
              type: 20,
              mod: prof.value,
              rolls: [result],
              result: result + prof.value,
            });
          }}
        >
          <span>{prof.proficiency.name}</span>
          <span>{prof.value >= 0 ? "+" + prof.value : prof.value}</span>
        </li>
      );
    });
  };

  // Render Actions
  const renderActions = (array) => {
    // check if there is a viable array to map
    if (!array) return;
    return array.map((action) => {
      // determine recharge condition
      const findRecharge = (action) => {
        if (!action.usage) return "";
        if (action.usage.type === "recharge after rest")
          return " (recharge on rest)";
        if (action.usage.type === "per day")
          return ` (${action.usage.times} per day)`;
        if (action.usage.type === "recharge on roll")
          return ` (recharge on ${action.usage.min_value}+ / ${action.usage.dice})`;
        return "";
      };
      // generate card
      return (
        <div
          className="mt-2 shadow-lg"
          key={action.name.length * Math.random()}
        >
          <h3 className="bg-red-900 rounded-t-md text-white py-1">
            {action.name}
            {findRecharge(action)}
          </h3>
          <p className="bg-white p-2">{action.desc}</p>
          <div className="bg-gray-300 flex justify-around rounded-b-md border cursor-pointer">
            {/* Add an attack roll option if one is available */}
            {action.attack_bonus && (
              <div
                className="flex-auto hover:text-red-900 hover:font-bold border"
                onClick={() => {
                  const result = rollDice(20);
                  props.setDice({
                    number: 1,
                    type: 20,
                    mod: action.attack_bonus,
                    rolls: [result],
                    result: result + action.attack_bonus,
                  });
                }}
              >
                Attack Roll
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  // Render spells
  const renderSpells = (array) => {
    // check if the monster knows any spells
    const spellcastingAbility = array.find((el) => el.spellcasting);
    if (!spellcastingAbility) return;
    // render a list of spells
    return spellcastingAbility.spellcasting.spells.map((spell, index) => {
      return (
        <div
          className="flex justify-between text-center cursor-pointer rounded-md hover:bg-gray-800 hover:text-gray-300 px-2"
          onClick={() => props.viewSpell(spell.url)}
          key={"spell"+index}
        >
          <span>{spell.name}</span>
          {/* Render either spell level or usage rate */}
          {!spell.usage && (
            <span>{spell.level > 0 ? `Level ${spell.level}` : "Cantrip"}</span>
          )}
          {spell.usage && (
            <span>
              {spell.usage.times}
              {" " + spell.usage.type}
            </span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="text-center">
      {/* Name Header */}
      <h1 className="text-center m-2 text-2xl text-red-800">{props.name}</h1>
      {/* Hit Points and Armor Class */}
      <div className="px-6 flex flex-wrap justify-around">
        {/* Hit Points */}
        <div className="text-center flex text-red-500 text-2xl">
          {hitPoints > 0 ? (
            <i className="fas fa-2x fa-heart"></i>
          ) : (
            <i className="fas fa-2x fa-skull text-black"></i>
          )}
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
      <h2 className="bg-gray-800 text-white">- Ability Scores -</h2>
      <div className="px-6 my-2 flex flex-wrap justify-around">
        <AbilityCard name="STR" stat={props.strength} onClick={props.setDice} />
        <AbilityCard
          name="DEX"
          stat={props.dexterity}
          onClick={props.setDice}
        />
        <AbilityCard
          name="CON"
          stat={props.constitution}
          onClick={props.setDice}
        />
        <AbilityCard
          name="INT"
          stat={props.intelligence}
          onClick={props.setDice}
        />
        <AbilityCard name="WIS" stat={props.wisdom} onClick={props.setDice} />
        <AbilityCard name="CHA" stat={props.charisma} onClick={props.setDice} />
      </div>
      {/* Defenses */}
      <h2 className="bg-gray-800 text-white">- Defenses -</h2>
      <div className="px-6 my-2 flex flex-wrap justify-around space-x-2">
        <DefenseCard
          name="Immune"
          array={props.damage_immunities.concat(props.condition_immunities)}
        />
        <DefenseCard name="Resistant" array={props.damage_resistances} />
        <DefenseCard name="Vulnerable" array={props.damage_vulnerabilities} />
      </div>
      {/* Proficiencies */}
      <h2 className="bg-gray-800 text-white">- Proficiencies -</h2>
      <ul className="px-10 my-2">{renderProficiencies(props)}</ul>
      {/* Actions */}
      <h2 className="bg-gray-800 text-white">- Actions -</h2>
      <div className="px-10 my-2">{renderActions(props.actions)}</div>
      {/* Special Abilities */}
      <h2 className="bg-gray-800 text-white">- Special Abilities -</h2>
      <div className="px-10 my-2">{renderActions(props.special_abilities)}</div>
      {/* Spells */}
      <h2 className="bg-gray-800 text-white">- Spells -</h2>
      <div className="px-10 my-2">{renderSpells(props.special_abilities)}</div>
    </div>
  );
}

export default DisplayMonster;
