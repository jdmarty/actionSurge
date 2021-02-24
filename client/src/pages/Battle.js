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

function Battle() {
  //state variables
  const [authState] = useAuthContext();
  const [allPlayers, setAllPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [allMonsters, setAllMonsters] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [playerModalIsOpen, setPlayerModalIsOpen] = useState(false);
  const [monsterModalIsOpen, setMonsterModalIsOpen] = useState(false);

  // Use effect to load user characters on mount
  useEffect(() => {
    const id = authState.userId;
    // get all characters for this user
    API.getUserCharacters(id).then(({ data }) => {
      // give each character a base initiative and health
      const characters = data
        .map((character) => {
          character.initiative = 0;
          character.current_hp = character.hp;
          return character;
        })
        .catch((err) => console.log(err));
      // set the all players state
      setAllPlayers(characters);
    });
    // get all monsters from external API
    API.getAllMonsters()
      .then(({ data }) => {
        // set the all monsters state
        setAllMonsters(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // methods to update state=========================
  // Method to add a player
  const handleAddPlayer = (index) => {
    const currentPlayers = [...players];
    const newPlayer = allPlayers[index];
    // check for duplicates
    const isDuplicate = currentPlayers.find(
      (player) => player._id === newPlayer._id
    );
    if (isDuplicate) {
      toast.error("Selected Player is already in battle");
      return;
    }
    // push the new player to the current array and set state
    currentPlayers.push(newPlayer);
    setPlayers(currentPlayers);
  };

  // Method to add a monster
  const handleAddMonster = (index) => {
    const currentMonsters = [...monsters];

    // call the api to populate the monster details
    API.getMonster(allMonsters[index].url).then(({ data }) => {
      const newMonster = data;
      //check for duplicates and update name accordingly
      const modifier = 1;
      while (
        currentMonsters.find((monster) => monster.name === newMonster.name)
      ) {
        newMonster.name = newMonster.name + `(${modifier})`;
      }
      // push the new monster to the current array and set state
      currentMonsters.push(newMonster);
      setMonsters(currentMonsters);
    });
  };

  // grid generation for now=======================
  const squaresPerLine = 10;

  const GridSquare = () => {
    return (
      <div
        className="border-black border bg-blue-100"
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
      top: "25%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "75%",
    },
  };

  // Handlers for add player modal
  const openPlayerModal = () => {
    setPlayerModalIsOpen(true);
  };

  const closePlayerModal = () => {
    setPlayerModalIsOpen(false);
  };

  // Handlers for add player modal
  const openMonsterModal = () => {
    setMonsterModalIsOpen(true);
  };

  const closeMonsterModal = () => {
    setMonsterModalIsOpen(false);
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
            onClick={openPlayerModal}
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
        <div
          className="flex flex-wrap overflow-hidden"
          style={{ height: "75vh" }}
        >
          {generateGrid()}
        </div>
        <div className="border border-black p-4">
          <h1>rules bar? update grid?</h1>
        </div>
      </div>
      {/* Right Column */}
      <div className="col-span-3 border-black border">
        <div className="">
          <h1>Initiative</h1>
          {players.map((player) => (
            <div className="border border-black my-4">{player.name}</div>
          ))}
        </div>
      </div>
      {/* Add Player Modal */}
      <AddPlayerModal
        isOpen={playerModalIsOpen}
        onRequestClose={closePlayerModal}
        style={modalStyles}
        contentLabel="add player modal"
        closeModal={closePlayerModal}
        allPlayers={allPlayers}
        handleAddPlayer={handleAddPlayer}
      />
      {/* Add Monster Modal */}
      <AddMonsterModal
        isOpen={monsterModalIsOpen}
        onRequestClose={closeMonsterModal}
        style={modalStyles}
        contentLabel="add monster modal"
        closeModal={closeMonsterModal}
        allMonsters={allPlayers}
        handleAddPlayer={handleAddPlayer}
      />
    </div>
  );
}

export default Battle;
