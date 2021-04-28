/* eslint-disable no-restricted-globals */
import React from "react";
import { useParams } from "react-router-dom"
// Components
import SubmitButton from "../components/SubmitButton.jsx";
import AbilitiesCard from "../components/create-player/AbilitiesCard.jsx";
import SavesCard from "../components/create-player/SavesCard.jsx";
import SingleSelector from "../components/create-player/SingleSelector.jsx";
import MultiSelector from "../components/create-player/MultiSelector.jsx";
import NameInput from "../components/create-player/NameInput.jsx";
import HitPointsInput from "../components/create-player/HitPointsInput.jsx";
import ArmorClassInput from "../components/create-player/ArmorClassInput.jsx";
import SpeedInput from "../components/create-player/SpeedInput.jsx";
import SkillsList from "../components/create-player/SkillsList.jsx";
import PossibleSpells from "../components/create-player/PossibleSpells.jsx";
import CurrentSpells from "../components/create-player/CurrentSpells.jsx";
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
  weapons,
  armor,
  potions,
} from "../components/create-player/selectorOptions";
// Global Context and tools
import { useCreateCharacterContext } from "../utils/CreateCharacterState";
import { useAuthContext } from "../utils/AuthState";
import API from "../utils/API";
import { toast } from "react-toast";

function CreateCharacter(props) {
  // Global state for create player state
  const [characterState] = useCreateCharacterContext();
  const [authState] = useAuthContext();
  let { id } = useParams();

  // function to validate form for submission
  const checkValid = () => {
    if (!characterState.name) return false;
    if (!characterState.race) return false;
    if (!characterState.classType) return false;
    return true;
  };

  // api call to create a new character
  const createCharacter = (e) => {
    e.preventDefault();
    // attach user id
    const characterData = { ...characterState };
    characterData.user_id = authState.userId;
    // create player
    API.createCharacter(characterData)
      .then(({ data }) => {
        toast.success(`New Character ${characterData.name} successfully created!`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Oh No! Something went wrong! Check your inputs and try again"
        );
      });
  };

  // api call to update an existing character
  const updateCharacter = (e) => {
    e.preventDefault();
    const characterData = { ...characterState };
    console.log(id, characterData)
    API.updateCharacter(id, characterData)
      .then(({ data }) => {
        toast.success(`Character successfully updated!`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Oh No! Something went wrong! Check your inputs and try again"
        );
      });
  }

  // api call to delete and existing character
  const deleteCharacter = e => {
    e.preventDefault();
    // Ask for confirmation
    const proceed = confirm(`Are you sure you want to delete ${characterState.name}?`)
    // If confirmed, delete the character and redirect
    if (proceed) {
      API.deleteCharacter(id).then(() => {
        window.location.pathname = "/edit-character";
      }).catch(err => {
        console.log(err);
        toast.error(
          "Oh No! Something went wrong! Check your inputs and try again"
        );
      })
    } else {
      return
    }
  }

  // render button type
  const renderButtons = (type) => {
    if (type === "edit") {
      return (
        <div className="space-x-6">
          <SubmitButton
            text="Update"
            onClick={updateCharacter}
            checkValid={checkValid}
          />
          <SubmitButton
            text="Delete"
            onClick={deleteCharacter}
            checkValid={() => true}
          />
        </div>
      );
    } else {
      return (
        <SubmitButton
          text="Create Character"
          onClick={createCharacter}
          checkValid={checkValid}
        />
      );
    }
  }

  return (
    <form className="p-4 md:px-9 sm:px-36 flex justify-center">
      {/* Main Grid */}
      <div className="lg:grid grid-cols-12 w-full bg-gray-900 rounded-md border-2">
        {/* Top Row : Name */}
        {/* Name Input */}
        <div className="col-span-10 px-2 py-2">
          {/* Name Input with attached label */}
          <NameInput />
        </div>
        {/* Submit Button */}
        <div className="col-span-2 text-center py-2">
          {renderButtons(props.type)}
        </div>

        {/* Middle Row */}
        {/* Character Details */}
        <div className="col-span-3 border-b border-t py-4">
          <h1 className="text-center text-gray-300 text-2xl">Character Details</h1>
          {/* Character Basics */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-4 py-2">
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
                options={subraceOptions[characterState.race]}
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
                options={subclassOptions[characterState.classType]}
                type="subclass"
              />
            </div>
          </div>
        </div>
        {/* Player Stats */}
        <div className="bg-gray-900 col-span-6 border py-4">
          {/* Abilities zRow */}
          <h1 className="text-center text-gray-300 text-2xl">Ability Scores</h1>
          <div className="flex flex-wrap justify-around space-x-6 py-2 px-2">
            <AbilitiesCard type="Strength" />
            <AbilitiesCard type="Dexterity" />
            <AbilitiesCard type="Constitution" />
            <AbilitiesCard type="Intelligence" />
            <AbilitiesCard type="Wisdom" />
            <AbilitiesCard type="Charisma" />
          </div>
          {/* Saves Row */}
          <h1 className="text-center text-gray-300 text-2xl">
            Saving Throws (Check marks indicate proficiency)
          </h1>
          <div className="flex flex-wrap justify-around space-x-6 py-2 px-2">
            <SavesCard display="STR" type="strength" />
            <SavesCard display="DEX" type="dexterity" />
            <SavesCard display="CON" type="constitution" />
            <SavesCard display="INT" type="intelligence" />
            <SavesCard display="WIS" type="wisdom" />
            <SavesCard display="CHA" type="charisma" />
          </div>
        </div>
        {/* Other Character Details */}
        <div className="bg-gray-900 col-span-3 border-t border-b py-6">
          {/* Hit Points and AC*/}
          <div className="lg:mx-6 mx-2 mb-4 text-gray-300 flex justify-around">
            <HitPointsInput />
          </div>

          {/* Movement */}
          <div className="lg:mx-6 md:mx-2 text-gray-300 flex justify-around">
            <ArmorClassInput />
            <SpeedInput />
          </div>

          {/* Defenses */}
          <div className="lg:grid grid-cols-2 gap-x-4 gap-y-2 p-2 text-gray-300">
            <MultiSelector
              label="Resistances"
              options={damageTypes}
              type="damage_resistances"
            />
            <MultiSelector
              label="Vulnerabilities"
              options={damageTypes}
              type="damage_vulnerabilities"
            />
            <MultiSelector
              label="Damage Immunities"
              options={damageTypes}
              type="damage_immunities"
            />
            <MultiSelector
              label="Condition Immunities"
              options={conditions}
              type="condition_immunities"
            />
          </div>
        </div>
        {/* Bottom Row: Skills, Spells, and Weapons */}
        <div className="col-span-3 border text-gray-300 py-2">
          <h1 className="text-center mt-2 text-2xl">Skills</h1>
          <div className="px-6 space-y-2">
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
        <div className="col-span-6 border text-white py-2">
          <h1 className="text-center mt-2 text-2xl">Known Spells</h1>
          <div className="grid grid-cols-2 py-5" style={{ height: "690px" }}>
            <div className="h-full overflow-auto">
              <PossibleSpells />
            </div>
            <div className="h-full overflow-auto">
              <CurrentSpells />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 col-span-3 border text-gray-300 py-2">
          <h1 className="text-center mt-2 text-2xl">Other Equipment</h1>
          <div className="my-2 mx-6 p-2 space-y-5">
            <MultiSelector label="Weapons" options={weapons} type="weapons" />
            <MultiSelector label="Armor" options={armor} type="armor" />
            <MultiSelector label="Potions" options={potions} type="potions" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateCharacter;
