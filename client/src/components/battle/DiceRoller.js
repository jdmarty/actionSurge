import React, { useRef, useState } from "react";
import { rollDice } from "../../utils/battleFunctions";
import DiceBox from "./DiceBox";

function DiceRoller() {
  // Local states
  const [number, setNumber] = useState(1);
  const [type, setType] = useState("20");
  const [mod, setMod] = useState(0);
  const [rolls, setRolls] = useState(["20"]);
  const [result, setResult] = useState(0);

  // References
  const numberRef = useRef();
  const typeRef = useRef();
  const modRef = useRef();

  // handle number of dice change
  const handleNumberChange = () => {
    // set the number of dice
    setNumber(Number(numberRef.current.value));
    // create an empty array of the given length and fill
    const newRolls = new Array(Number(numberRef.current.value)).fill(type);
    setRolls(newRolls);
    setResult("");
  };

  // handle dice type change
  const handleTypeChange = () => {
    // set the type of dice
    setType(typeRef.current.value);
    // create an empty array of the given length and fill
    const newRolls = new Array(number).fill(typeRef.current.value);
    setRolls(newRolls);
    setResult("");
  };

  // handle modifier change
  const handleModChange = () => {
    setMod(Number(modRef.current.value));
    setResult("");
  };

  // handle dice rolls
  const handleRoll = () => {
    // map the dice type array into values
    const newRolls = rolls.map((roll) => {
      const diceType = Number(type);
      return rollDice(diceType);
    });
    setRolls(newRolls);
    // sum up dice and modifier to get result
    const newResult = newRolls.reduce((a, b) => a + b, 0) + mod;
    setResult(newResult);
  };

  // handle roll with advantage
  const handleAdvRoll = () => {
    // set roller for 2d20 rolls
    setNumber(2);
    setType(20);
    // roll two dice and set the result to the higher value
    const newRolls = [rollDice(20), rollDice(20)];
    const newResult = Math.max(...newRolls) + mod;
    // set the new rolls and results
    setRolls(newRolls);
    setResult(newResult);
  };

  // handle roll with disadvantage
  const handleDisRoll = () => {
    // set the roller for two d20 rolls
    setNumber(2);
    setType(20);
    // roll two dice and set the result to the lower value
    const newRolls = [rollDice(20), rollDice(20)];
    const newResult = Math.min(...newRolls) + mod;
    // set the new rolls and results
    setRolls(newRolls);
    setResult(newResult);
  };

  // handle single dice roll
  const handleSingleRoll = (e, index) => {
    const newRolls = [...rolls]
    // change the roll at the target index
    newRolls[index] = rollDice(type);
    setRolls(newRolls)
    // sum up all number values in the rolls array
    const newResult = newRolls.reduce((a,b) => {
      if (typeof b == "string") return a
      else return a + b
    }, 0)
    setResult(newResult)
  }

  return (
    <>
      {/* Selection Header */}
      <div className="flex flex-wrap justify-around py-2">
        {/* Inputs */}
        <div className="p-2 flex justify-center space-x-2">
          {/* Dice Number Input */}
          <input
            type="number"
            className="text-right"
            min="0"
            max="100"
            placeholder="Num"
            ref={numberRef}
            onChange={handleNumberChange}
            value={number}
          ></input>
          <span>D</span>
          {/* Dice Type Input */}
          <select ref={typeRef} onChange={handleTypeChange} value={type}>
            <option value={20}>20</option>
            <option value={12}>12</option>
            <option value={10}>10</option>
            <option value={8}>8</option>
            <option value={6}>6</option>
            <option value={4}>4</option>
          </select>
          <dt>{mod >= 0 ? "+" : ""}</dt>
          {/* Dice Modifier Input */}
          <input
            type="number"
            className="text-center w-12"
            max="1000"
            placeholder="Mod"
            ref={modRef}
            onChange={handleModChange}
            value={mod}
          ></input>
        </div>
        <div className="p-2 flex justify-center space-x-2">
          <button
            className="bg-yellow-500 rounded-md px-2"
            onClick={handleRoll}
          >
            ROLL
          </button>
          <button
            className="bg-green-500 rounded-md px-2"
            onClick={handleAdvRoll}
          >
            ADV
          </button>
          <button
            className="bg-red-500 rounded-md px-2"
            onClick={handleDisRoll}
          >
            DIS
          </button>
        </div>
      </div>
      {/* Dice Box */}
      <DiceBox rolls={rolls} result={result} mod={mod} onClick={handleSingleRoll}/>
    </>
  );
}

export default DiceRoller;
