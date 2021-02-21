import React from "react";
// Components
import SubmitButton from "../components/SubmitButton";
import AbilitiesCard from "../components/create-player/AbilitiesCard";
import SavesCard from "../components/create-player/SavesCard";
import SingleSelector from "../components/create-player/SingleSelector"
// Options
import { raceOptions, classOptions, levelOptions } from "../components/create-player/selectorOptions"
// Context
import { CreatePlayerProvider } from "../utils/CreatePlayerState"

function CreatePlayer() {
  return (
    <CreatePlayerProvider>
      {/* Main Grid */}
      <form className="py-9 md:px-9 sm:px-36 px-4 flex justify-center">
        {/* Main Grid */}
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
                <SingleSelector label="Race" options={raceOptions} type="race"/>
              </div>
              {/* Subrace Selector */}
              <div className="col-span-1">
                <label htmlFor="subrace" className="text-gray-500">
                  Sub-Race
                </label>
                <select name="subrace" className="w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              {/* Level Selector */}
              <div className="col-span-1">
                <SingleSelector label="Class" options={classOptions} type="classType"/>
              </div>

              <div className="col-span-1">
                <label htmlFor="subclass" className="text-gray-500">
                  Sub-Class
                </label>
                <select name="subclass" className="w-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="col-span-2">
                <SingleSelector label="Level" options={levelOptions} type="level"/>
              </div>
            </div>
          </div>
          {/* Player Stats */}
          <div className="bg-gray-900 col-span-6 border">
            {/* Abilities Grid */}
            <div className="grid grid-cols-6 gap-6 h-full py-6 px-2">
              <AbilitiesCard type="Strength" />
              {/* Dex Card */}
              <AbilitiesCard type="Dexterity" />
              {/* Con Card */}
              <AbilitiesCard type="Constitution" />
              {/* Int Card */}
              <AbilitiesCard type="Intelligence" />
              {/* Wis Card */}
              <AbilitiesCard type="Wisdom" />
              {/* Cha Card */}
              <AbilitiesCard type="Charisma" />
              {/* Saves Row */}
              <div className="bg-red-300 col-span-6">
                <h1 className="text-center bg-green-300">
                  SAVES (Check marks indicate proficiency)
                </h1>
                <div className="grid grid-cols-6 gap-2 p-4">
                  {/* Save Cards */}
                  <SavesCard display="STR" />
                  <SavesCard display="DEX" />
                  <SavesCard display="CON" />
                  <SavesCard display="INT" />
                  <SavesCard display="WIS" />
                  <SavesCard display="CHA" />
                </div>
              </div>
            </div>
          </div>
          {/* Other Character Details */}
          <div className="bg-gray-900 col-span-3 border">
            {/* Hit Points and AC*/}
            <div className="border my-2 mx-6 p-2 text-white flex justify-around">
              <div className="text-center">
                <label htmlFor="maxHP" className="text-2xl">
                  HP
                </label>
                <input
                  name="maxHP"
                  type="number"
                  className="mx-2 rounded text-2xl text-black text-center w-1/2"
                ></input>
              </div>

              <div className="text-center">
                <label htmlFor="AC" className="text-2xl">
                  AC
                </label>
                <input
                  name="AC"
                  type="number"
                  className="mx-2 rounded text-2xl text-black text-center w-1/2"
                ></input>
              </div>
            </div>

            {/* Movement */}
            <div className="border my-2 mx-6 p-2 text-white flex justify-around">
              <label htmlFor="speed" className="text-2xl">
                Speed
              </label>
              <input
                name="speed"
                type="number"
                className="mx-2 rounded text-2xl text-black text-center w-1/2"
              ></input>
              <span className="text-2xl">ft</span>
            </div>

            {/* Defenses */}
            <div className="border my-2 mx-6 p-2 text-white">
              <h3 className="text-center text-2xl">Defenses</h3>
              <div className="flex justify-around mb-2">
                <div>Damage Type</div>
                <div>Resistance Type</div>
                <div>X</div>
              </div>
              <div className="text-center">Add Defense +</div>
            </div>
          </div>
          {/* Bottom Row: Skills, Spells, and Weapons */}
          <div className="bg-gray-900 h-12 col-span-3 border"></div>
          <div className="bg-gray-900 h-12 col-span-6 border"></div>
          <div className="bg-gray-900 h-12 col-span-3 border"></div>
        </div>
      </form>
    </CreatePlayerProvider>
  );
}

export default CreatePlayer;
