import React, { useState, useRef, useEffect } from "react";
import {
  getBonusFromStat,
  parseIndexName,
  rollDice,
  skills,
} from "../../utils/battleFunctions";

function DisplayCharacter(props) {
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

  // Saving Throw Cards
  const SaveCard = (props) => {
    let bonus = getBonusFromStat(props.stat);
    if (props.proficient) bonus += props.profBonus;
    const getColor = (bonus) => {
      if (bonus > 0) return "bg-green-500";
      if (bonus === 0) return "bg-yellow-500";
      return "bg-red-500";
    };
    return (
      <div
        className={`hover:bg-white text-center w-12 shadow-xl rounded-md border cursor-pointer ${getColor(
          bonus
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
        <p className="bg-gray-800 text-white rounded w-3/4 mx-auto transform translate-y-1 border border-black">
          {bonus >= 0 ? "+ " + bonus : bonus}
        </p>
      </div>
    );
  };

  // Render Save Cards
  const renderSaveCards = () => {
    // array of all stats
    const stats = [
      "strength",
      "dexterity",
      "constitution",
      "intelligence",
      "wisdom",
      "charisma",
    ];
    // map these stats to an array of save cards
    return stats.map((stat, index) => {
      return (
        <SaveCard
          name={stat.slice(0, 3).toUpperCase()}
          stat={props[stat]}
          proficient={props.save_proficiencies.includes(stat)}
          profBonus={props.proficiency}
          key={"save" + index}
          onClick={props.setDice}
        />
      );
    });
  };

  // Defense Cards
  const DefenseCard = (props) => {
    if (props.array.length < 1) return <></>;
    return (
      <div className="text-center border w-24 rounded-md bg-white">
        <h2 className="border-b bg-black text-white rounded-t-md">
          {props.name}
        </h2>
        {props.array.map((item, index) => {
          return (
            <p className="text-sm" key={props.name + index}>
              {parseIndexName(item)}
            </p>
          );
        })}
      </div>
    );
  };

  // Skill Cards
  const renderSkillCards = (props) => {
    return skills.map((skill) => {
      const baseBonus = getBonusFromStat(props[skill.base]);
      const bonus = props.skill_expertise.includes(skill.value)
        ? baseBonus + props.proficiency * 2
        : props.skill_proficiencies.includes(skill.value)
        ? baseBonus + props.proficiency
        : baseBonus;
      return (
        <li
          className="flex justify-between rounded-md hover:bg-gray-800 hover:text-gray-300 cursor-pointer px-2"
          onClick={() => {
            const result = rollDice(20);
            props.setDice({
              number: 1,
              type: 20,
              mod: bonus,
              rolls: [result],
              result: result + bonus
            });
          }}
          key={skill.label}
        >
          <span>{skill.base.slice(0, 3).toUpperCase()}</span>
          <span>{skill.label}</span>
          <span>{bonus >= 0 ? "+" + bonus : bonus}</span>
        </li>
      );
    });
  };

  // Render Spells and equipment
  const renderOtherCards = (array) => {
    return array.map((item) => {
      return (
        <li className="bg-white my-2 px-2 rounded-md" key={item}>
          {parseIndexName(item)}
        </li>
      );
    });
  };

  return (
    <div className="text-center">
      {/* Name Header */}
      <h1 className="m-2 text-2xl">
        {props.name}{" "}
        {props.classType &&
          ` - Lvl ${props.level + " "}${parseIndexName(props.classType)}`}
      </h1>
      {/* Hit Points and Armor Class */}
      <div className="m-2 flex flex-wrap justify-around">
        {/* Hit Points */}
        <div className="flex text-red-500 text-2xl">
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
        <div className="flex text-2xl relative">
          <i className="fas fa-2x fa-shield"></i>
          <span className="absolute text-white" style={{ right: "25%" }}>
            {props.armor_class}
          </span>
        </div>
        {/* Speed */}
        <span className="text-black text-2xl">{props.speed + " ft"}</span>
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
      {/* Saving Throws */}
      <h2 className="bg-gray-800 text-white mt-4">- Saving Throws -</h2>
      <div className="px-6 my-2 flex flex-wrap justify-around">
        {renderSaveCards()}
      </div>
      {/* Defenses */}
      <h2 className="bg-gray-800 text-white mt-4">- Defenses -</h2>
      <div className="px-6 my-2 flex flex-wrap justify-around space-x-2">
        <DefenseCard
          name="Immune"
          array={props.damage_immunities.concat(props.condition_immunities)}
        />
        <DefenseCard name="Resistant" array={props.damage_resistances} />
        <DefenseCard name="Vulnerable" array={props.damage_vulnerabilities} />
      </div>

      {/* Skills */}
      <h2 className="bg-gray-800 text-white mt-4">- Skills -</h2>
      <ul className="px-10 my-2">{renderSkillCards(props)}</ul>
      {/* Weapons */}
      <h2 className="bg-gray-800 text-white mt-4">- Weapons -</h2>
      <ul className="px-10 my-2 flex flex-wrap justify-around space-x-2">
        {renderOtherCards(props.weapons)}
      </ul>
      {/* Spells */}
      <h2 className="bg-gray-800 text-white mt-4">- Spells -</h2>
      <ul className="px-10 my-2 flex flex-wrap justify-around space-x-2">
        {renderOtherCards(props.spells)}
      </ul>
      {/* Potions */}
      <h2 className="bg-gray-800 text-white mt-4">- Potions -</h2>
      <ul className="px-10 my-2 flex flex-wrap justify-around space-x-2">
        {renderOtherCards(props.potions)}
      </ul>
      {/* Armor */}
      <h2 className="bg-gray-800 text-white mt-4">- Armor -</h2>
      <ul className="px-10 my-2 flex flex-wrap justify-around space-x-2">
        {renderOtherCards(props.armor)}
      </ul>
    </div>
  );
}

export default DisplayCharacter;
