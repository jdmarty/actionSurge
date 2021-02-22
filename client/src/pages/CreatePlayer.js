import React, { useRef } from "react";
// Components
import SubmitButton from "../components/SubmitButton";
import AbilitiesCard from "../components/create-player/AbilitiesCard";
import SavesCard from "../components/create-player/SavesCard";
import SingleSelector from "../components/create-player/SingleSelector";
import MultiSelector from "../components/create-player/MultiSelector";
import NameInput from "../components/create-player/NameInput";
import HitPointsInput from "../components/create-player/HitPointsInput";
import ArmorClassInput from "../components/create-player/ArmorClassInput";
import SpeedInput from "../components/create-player/SpeedInput";
import SkillsList from "../components/create-player/SkillsList";
import PossibleSpells from "../components/create-player/PossibleSpells"
import CurrentSpells from "../components/create-player/CurrentSpells"

// Options
import {
  raceOptions,
  subraceOptions,
  classOptions,
  subclassOptions,
  levelOptions,
  damageTypes,
  conditions,
  skills,
} from "../components/create-player/selectorOptions";
// Context
import { useCreatePlayerContext } from "../utils/CreatePlayerState";

function CreatePlayer() {
  // Global state for create player state
  const [playerState, playerDispatch] = useCreatePlayerContext();

  // function to log current state for now
  const logState = (e) => {
    e.preventDefault();
    console.log(playerState);
  };


  return (
    <form className="py-9 md:px-9 sm:px-36 px-4 flex justify-center">
      {/* Main Grid */}
      <div className="grid grid-cols-12 w-full">
        {/* Top Row : Name */}
        {/* Name Input */}
        <div className="bg-gray-900 col-span-10 border px-2 py-2">
          {/* Name Input with attached label */}
          <NameInput />
        </div>
        {/* Submit Button */}
        <div className="bg-gray-900 col-span-2 border text-center py-2">
          <SubmitButton text="Create" onClick={logState} />
        </div>

        {/* Middle Row */}
        {/* Character Details */}
        <div className="bg-gray-900 col-span-3 border">
          {/* Character Basics */}
          <div className="grid grid-cols-2 gap-4 p-4">
            {/* Image Container */}
            <div className="col-span-2 h-44 bg-red-300"></div>
            {/* Level Selector */}
            <div className="col-span-2">
              <SingleSelector
                label="Level"
                options={levelOptions}
                type="level"
              />
            </div>
            {/* Race Selector */}
            <div className="col-span-1">
              <SingleSelector label="Race" options={raceOptions} type="race" />
            </div>
            {/* Subrace Selector */}
            <div className="col-span-1">
              <SingleSelector
                label="Sub-Race"
                options={subraceOptions[playerState.race]}
                type="subrace"
              />
            </div>
            {/* Class Selector */}
            <div className="col-span-1">
              <SingleSelector
                label="Class"
                options={classOptions}
                type="classType"
              />
            </div>
            {/* SubClass Selector */}
            <div className="col-span-1">
              <SingleSelector
                label="Sub-Class"
                options={subclassOptions[playerState.classType]}
                type="subclass"
              />
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
                <SavesCard display="STR" type="strength" />
                <SavesCard display="DEX" type="dexterity" />
                <SavesCard display="CON" type="constitution" />
                <SavesCard display="INT" type="intelligence" />
                <SavesCard display="WIS" type="wisdom" />
                <SavesCard display="CHA" type="charisma" />
              </div>
            </div>
          </div>
        </div>
        {/* Other Character Details */}
        <div className="bg-gray-900 col-span-3 border">
          {/* Hit Points and AC*/}
          <div className="border my-2 mx-6 p-2 text-white flex justify-around">
            <HitPointsInput />
            <ArmorClassInput />
          </div>

          {/* Movement */}
          <div className="border my-2 mx-6 p-2 text-white flex justify-around">
            <SpeedInput />
          </div>

          {/* Defenses */}
          <div className="border my-2 mx-6 p-2 text-white">
            <MultiSelector
              label="Resistances"
              options={damageTypes}
              type="damage_resistances"
            />
            <MultiSelector
              label="Immunities"
              options={damageTypes}
              type="damage_immunities"
            />
            <MultiSelector
              label="Vulnerabilities"
              options={damageTypes}
              type="damage_vulnerabilities"
            />
            <MultiSelector
              label="Condition Immunities"
              options={conditions}
              type="condition_immunities"
            />
          </div>
        </div>
        {/* Bottom Row: Skills, Spells, and Weapons */}
        <div className="bg-gray-900 col-span-3 border text-white">
          <div className="my-2 mx-6 p-2 text-white">
            <MultiSelector
              label="Proficient Skills"
              options={skills}
              type="skill_proficiencies"
            />
            <MultiSelector
              label="Expert Skills"
              options={skills}
              type="skill_expertise"
            />
            <SkillsList />
          </div>
        </div>
        <div className="bg-gray-900 col-span-6 border text-white">
          <div className="grid grid-cols-2" style={{ height: "665px" }}>
            <div className="border h-full overflow-auto">
              <PossibleSpells />
            </div>
            <div className="border h-full overflow-auto">
              <CurrentSpells />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 col-span-3 border text-white">
          <h1>Weapons</h1>
        </div>
      </div>
    </form>
  );
}

export default CreatePlayer;
