// modules
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// Context and API
import { useAuthContext } from "../utils/AuthState"
import API from "../utils/API"
// components
import AddPlayerModal from "../components/battle/AddPlayerModal";

function Battle() {
  //state variables
  const [authState] = useAuthContext()
  const [allPlayers, setAllPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Use effect to load user characters on mount
  useEffect(() => {
    const id = authState.userId;
    API.getUserCharacters(id)
      .then(({data}) => {
        console.log(data)
        setAllPlayers(data)
      })
  }, [])

  // methods to update state
  const handleAddPlayer = (index) => {
    const currentPlayers = [...players]
    currentPlayers.push(allPlayers[index])
    setPlayers(currentPlayers)
  }

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
      grid.push(<GridSquare key={"square"+i}/>);
    }
    return grid;
  };
  //===============================================

  // Modal=========================================
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

  // Handlers for modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  Modal.setAppElement("#root");
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
            onClick={openModal}
          >
            Add Character
          </button>
          <button className="bg-yellow-500 px-4 py-2 rounded-lg mx-6 border-black">
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
        <div className="border border-black">
          <h1>Initiative</h1>
          {players.map(player => <div className="border border-black">{player.name}</div>)}
        </div>
      </div>
      {/* Add Player Modal */}
      <AddPlayerModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="add modal"
        closeModal={closeModal}
        allPlayers={allPlayers}
        handleAddPlayer={handleAddPlayer}
      />
    </div>
  );
}

export default Battle;
