import React, { useRef, useState } from "react";
import Select from "react-select";

function DiceRoller() {
  // Local states
  const [number, setNumber] = useState(1);
  const [type, setType] = useState(20);
  const [mod, setMod] = useState(0);
  const [rollType, setRollType] = useState("None");

  // References
  const numberRef = useRef();
  const typeRef = useRef();
  const modRef = useRef();

  // handle number of dice change
  const handleNumberChange = () => {
    setNumber(numberRef.current.value)
  }

  // handle dice type change
  const handleTypeChange = () => {
    setType(typeRef.current.value)
  }

  // handle modifier change
  const handleModChange = () => {
    setMod(modRef.current.value)
  }

  return (
    <div className="bg-blue-300 h-full">
      {/* Selection Header */}
      <div className="flex flex-wrap justify-around py-2 border">
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
            className="text-left w-12"
            max="1000"
            placeholder="Mod"
            ref={modRef}
            onChange={handleModChange}
            value={mod}
          ></input>
        </div>
        <button className="bg-yellow-500 rounded-md px-2">ROLL</button>
        <button className="bg-green-500 rounded-md px-2">ADV</button>
        <button className="bg-red-500 rounded-md px-2">DIS</button>
      </div>
      {/* Dice Box */}
      <div className="flex justify-around py-2 border border-red-800">

      </div>
    </div>
  );
}

export default DiceRoller;
