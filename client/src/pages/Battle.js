// modules
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toast";
// Context and API
import { useAuthContext } from "../utils/AuthState";
import API from "../utils/API";
// components
import AddPlayerModal from "../components/battle/AddPlayerModal";
import AddMonsterModal from "../components/battle/AddMonsterModal";
import InitiativeCard from "../components/battle/InitiativeCard";

function Battle() {
  //state variables
  const [authState] = useAuthContext();
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [allMonsters, setAllMonsters] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [characterModalIsOpen, setCharacterModalIsOpen] = useState(false);
  const [monsterModalIsOpen, setMonsterModalIsOpen] = useState(false);

  // Use effect to load user characters on mount
  useEffect(() => {
    const id = authState.userId;
    // get all characters for this user
    API.getUserCharacters(id)
      .then(({ data }) => {
        // give each character a base initiative and health
        const characters = data.map((character) => {
          character.initiative = 0;
          character.current_hit_points = character.hit_points;
          return character;
        });
        // set the all players state
        setAllCharacters(characters);
      })
      .catch((err) => console.log(err));
    // get all monsters from external API
    API.getAllMonsters()
      .then(({ data }) => {
        // set the all monsters state
        setAllMonsters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // methods to update state===========================
  // Method to add a character to the battle
  const handleAddCharacter = (index) => {
    const currentCharacters = [...characters];
    const newCharacter = allCharacters[index];
    // check for duplicates
    const isDuplicate = currentCharacters.find(
      (character) => character._id === newCharacter._id
    );
    if (isDuplicate) {
      toast.error("Selected Player is already in battle");
      return;
    }
    // push the new player to the current array and set state
    currentCharacters.push(newCharacter);
    setCharacters(currentCharacters);
  };

  // Function to add a monster to the battle
  const handleAddMonster = (index) => {
    const currentMonsters = [...monsters];

    // call the api to populate the monster details
    API.getMonster(allMonsters[index].url).then(({ data }) => {
      const newMonster = data;
      //check for duplicates and update name accordingly
      let modifier = 1;
      const originalName = newMonster.name;
      while (
        currentMonsters.find((monster) => monster.name === newMonster.name)
      ) {
        newMonster.name = `${originalName} (${modifier})`;
        modifier++;
      }
      // give the new monster a base initiative and a health
      newMonster.initiative = 0;
      newMonster.current_hit_points = newMonster.hit_points;
      // push the new monster to the current array and set state
      currentMonsters.push(newMonster);
      setMonsters(currentMonsters);
    });
  };

  // Function to remove a combatant
  const handleRemoveCombatant = (name, id) => {
    // if there is a character id, filter the characters list
    if (id) {
      const newCharacters = characters.filter((character) => {
        return character._id !== id;
      });
      setCharacters(newCharacters);
      return newCharacters;
      // otherwise filter the monsters list
    } else {
      const newMonsters = monsters.filter((monster) => {
        return monster.name !== name;
      });
      setMonsters(newMonsters);
      return newMonsters;
    }
  };
  // =================================================

  // grid generation for now==========================
  const squaresPerLine = 20;

  const GridSquare = () => {
    return (
      <div
        className="border-gray-100 border bg-blue-100"
        style={{
          width: `${100 / squaresPerLine}%`,
          height: `${100 / squaresPerLine}%`,
        }}
      ></div>
    );
  };

  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < squaresPerLine * squaresPerLine; i++) {
      grid.push(<GridSquare key={"square" + i} />);
    }
    return grid;
  };
  //===============================================

  // Modals=========================================
  const modalStyles = {
    content: {
      top: "10%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%)",
      width: "75%",
    },
  };

  // Handlers for add player modal
  const openCharacterModal = () => {
    setCharacterModalIsOpen(true);
  };

  const closeCharacterModal = () => {
    setCharacterModalIsOpen(false);
  };

  // Handlers for add monster modal
  const openMonsterModal = () => {
    setMonsterModalIsOpen(true);
  };

  const closeMonsterModal = () => {
    setMonsterModalIsOpen(false);
  };
  // ==============================================

  // Render Functions==============================

  const renderInitiativeCards = (characters, monsters) => {
    const allCombatants = characters.concat(monsters);
    return allCombatants.map((combatant) => {
      return (
        <InitiativeCard
          name={combatant.name}
          initiative={combatant.initiative}
          id={combatant._id}
          onClick={handleRemoveCombatant}
        />
      );
    });
  };
  // ==============================================

  return (
    <div className="grid grid-cols-12 bg-white m-4">
      {/* Left Column */}
      <div className="col-span-3 border-black border">
        <div className="border border-black">
          <h1>View Character / Monster</h1>
        </div>
      </div>
      {/* Middle Column */}
      <div className="col-span-6 border-black border">
        <div className="border border-black p-4">
          <button
            className="bg-green-500 px-4 py-2 rounded-lg mx-6 border-black"
            onClick={openCharacterModal}
          >
            Add Character
          </button>
          <button
            className="bg-yellow-500 px-4 py-2 rounded-lg mx-6 border-black"
            onClick={openMonsterModal}
          >
            Add Monster
          </button>
          <button className="bg-red-500 px-4 py-2 rounded-lg mx-6 border-black">
            Reset Battle
          </button>
        </div>
        <div className="flex flex-wrap" style={{ height: "75vh" }}>
          {generateGrid()}
        </div>
        <div className="border border-black p-4">
          <h1>rules bar? update grid?</h1>
        </div>
      </div>
      {/* Right Column */}
      <div className="col-span-3 border-black border">
        <h1>Initiative</h1>
        {renderInitiativeCards(characters, monsters)}
      </div>
      {/* Add Player Modal */}
      <AddPlayerModal
        isOpen={characterModalIsOpen}
        onRequestClose={closeCharacterModal}
        style={modalStyles}
        contentLabel="add player modal"
        closeModal={closeCharacterModal}
        allCharacters={allCharacters}
        handleAdd={handleAddCharacter}
      />
      {/* Add Monster Modal */}
      <AddMonsterModal
        isOpen={monsterModalIsOpen}
        onRequestClose={closeMonsterModal}
        style={modalStyles}
        contentLabel="add monster modal"
        closeModal={closeMonsterModal}
        allMonsters={allMonsters}
        handleAdd={handleAddMonster}
      />
    </div>
  );
}

export default Battle;
