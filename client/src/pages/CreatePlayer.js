import React from "react";
import SubmitButton from "../components/SubmitButton"

function CreatePlayer() {
  return (
    // Main grid
    <div className="py-9 md:px-9 sm:px-36 px-4 flex justify-center">
      <div className="grid grid-cols-12 w-full">
        {/* Top Row : Name */}
        {/* Name Input */}
        <div className="bg-gray-900 col-span-10 border px-2 py-2">
          {/* Name Input with attached label */}
          <div className="grid grid-cols-12">
            <label
              htmlFor="player-name"
              className="col-span-1 py-1 text-center block text-lg font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="player-name"
              className="col-span-11 text-black p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
              placeholder="Player Name"
              required
            ></input>
          </div>
        </div>
        {/* Submit Button */}
        <div className="bg-gray-900 col-span-2 border text-center py-2">
          <SubmitButton text="Create" />
        </div>
        {/* Middle Row */}
        {/* Character Details */}
        <div className="bg-gray-900 col-span-3 border">
          {/* Character Basics */}
          <div className="grid grid-cols-2 gap-4 p-4">
            {/* Image Container */}
            <div className="col-span-2 h-24 bg-red-300"></div>
            {/* Race Selector */}
            <div className="col-span-1">
              <label htmlFor="race" className="text-gray-500">
                Race
              </label>
              <select name="race" className="w-full">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="col-span-1">
              <label htmlFor="race" className="text-gray-500">
                Sub-Race
              </label>
              <select name="race" className="w-full">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            {/* Level Selector */}
            <div className="col-span-1">
              <label htmlFor="level" className="text-gray-500">
                Class
              </label>
              <select name="level" className="w-full">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="col-span-1">
              <label htmlFor="race" className="text-gray-500">
                Sub-Class
              </label>
              <select name="race" className="w-full">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>
        {/* Player Stats */}
        <div className="bg-gray-900 col-span-6 border">
          {/* Abilities Grid */}
          <div className="grid grid-cols-6 gap-6 h-full py-6 px-2">
            {/* Strength Card */}
            <div className="bg-red-300 col-span-2">
              {/* Card Header */}
              <h3 className="h-1/4 bg-green-300 text-center">Strength</h3>
              {/* Card Body */}
              <div className="h-1/2 bg-blue-300 text-center">
                <input type="number" className="text-center text-3xl w-full h-full"></input>
              </div>
              {/* Card Footer */}
              <div className="h-1/4 bg-gray-300 text-center">Bonus</div>
            </div>
            {/* Dex Card */}
            <div className="bg-red-300 col-span-2"></div>
            {/* Con Card */}
            <div className="bg-red-300 col-span-2"></div>
            {/* Int Card */}
            <div className="bg-red-300 col-span-2"></div>
            {/* Wis Card */}
            <div className="bg-red-300 col-span-2"></div>
            {/* Cha Card */}
            <div className="bg-red-300 col-span-2"></div>
            {/* Saves Row */}
            <div className="bg-red-300 col-span-6"></div>
          </div>
        </div>
        <div className="bg-gray-900 col-span-3 border"></div>
        {/* Bottom Row: Skills, Spells, and Weapons */}
        <div className="bg-gray-900 h-12 col-span-3 border"></div>
        <div className="bg-gray-900 h-12 col-span-6 border"></div>
        <div className="bg-gray-900 h-12 col-span-3 border"></div>
      </div>
    </div>
  );
}

export default CreatePlayer;
