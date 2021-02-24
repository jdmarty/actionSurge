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

  // Use effect to load user characters and monsters on mount
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
  // Add a character to the battle
  const handleAddCharacter = (index) => {
    const currentCharacters = [...characters];
    const newCharacter = allCharacters[index];
    // check for duplicates
    const isDuplicate = currentCharacters.find(
      (character) => character._id === newCharacter._id
    );
    // if a duplicate is found, alert alert the user
    if (isDuplicate) {
      toast.error("Selected Player is already in battle");
      return;
    }
    // push the new player to the current array and set state
    currentCharacters.push(newCharacter);
    setCharacters(currentCharacters);
  };

  // Add a monster to the battle
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

  // Remove a combatant
  const handleRemoveCombatant = (name, id) => {
    // if there is a character id, filter the characters list
    if (id) {
      // filter out combatants with matching ids
      const newCharacters = characters.filter((character) => {
        return character._id !== id;
      });
      setCharacters(newCharacters);
      return newCharacters;
    } else {
      // filter out monsters with matching ids
      const newMonsters = monsters.filter((monster) => {
        return monster.name !== name;
      });
      setMonsters(newMonsters);
      return newMonsters;
    }
  };

  // Remove all combatants
  const handleReset = () => {
    setCharacters([]);
    setMonsters([]);
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
  const [characterModalIsOpen, setCharacterModalIsOpen] = useState(false);
  const [monsterModalIsOpen, setMonsterModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);

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

  // Handlers for confirm modal
  const openConfirmModal = () => {
    setConfirmModalIsOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalIsOpen(false);
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
    <div className="grid grid-cols-12 bg-white m-4" style={{ height: "88vh" }}>
      {/* Left Column */}
      <div className="col-span-3 border-black border overflow-auto">
        <div className="border border-black">
          <h1>View Character / Monster</h1>
        </div>
      </div>
      {/* Middle Column */}
      <div className="col-span-6 border-black border overflow-auto">
        <div className="p-4 flex justify-between" style={{ height: "10%" }}>
          <button
            className="bg-green-500 px-4 py-2 rounded-lg mx-6"
            onClick={openCharacterModal}
          >
            Add Character
          </button>
          <button
            className="bg-yellow-500 px-4 py-2 rounded-lg mx-6"
            onClick={openMonsterModal}
          >
            Add Monster
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-lg mx-6">
            Dice Roller
          </button>
          <button
            className="bg-red-500 px-4 py-2 rounded-lg mx-6"
            onClick={openConfirmModal}
          >
            Reset Battle
          </button>
        </div>
        <div className="flex flex-wrap" style={{ height: "90%" }}>
          {generateGrid()}
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
        closeTimeoutMS={100}
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
        closeTimeoutMS={100}
      />
      {/* Confirm Modal */}
      <Modal
        isOpen={confirmModalIsOpen}
        onRequestClose={closeConfirmModal}
        style={modalStyles}
        contentLabel="confirm reset modal"
        closeTimeoutMS={100}
      >
        <div className="text-3xl text-center">
          <h1 className="mb-4">Are you sure you want to reset this battle?</h1>
          <button
            className="bg-red-500 px-4 py-2 rounded-lg mx-6"
            onClick={() => {
              handleReset();
              closeConfirmModal();
            }}
          >
            Yes
          </button>
          <button
            className="bg-yellow-500 px-4 py-2 rounded-lg mx-6"
            onClick={closeConfirmModal}
          >
            No
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Battle;
