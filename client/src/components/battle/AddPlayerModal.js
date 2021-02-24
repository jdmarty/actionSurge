import React, { useState } from "react";
import Modal from "react-modal";
import parseName from "../../utils/parseIndexName";

function AddPlayerModal(props) {
  // assign modal for reader
  Modal.setAppElement("#root");

  // cards for each character
  const AddPlayerCard = (props) => {
    return (
      <li
        className="text-2xl border border-red-500 flex px-3 hover:bg-green-300 hover:text-white"
        onClick={() => {
          props.onClick(props.index)
          props.closeModal()
        }}
      >
        <dt className="w-1/3">{props.name}</dt>
        <dt className="w-1/3 text-center">Level: {props.level}</dt>
        <dt className="w-1/3 text-right">
          {parseName(props.classType)}
        </dt>
      </li>
    );
  };

  const renderPlayerCards = (players) => {
    return players.map((player, index) => {
      return (
        <AddPlayerCard
          {...player}
          key={"addPlayer" + index}
          index={index}
          onClick={props.handleAdd}
          closeModal={props.closeModal}
        />
      );
    });
  };

  return (
    <Modal {...props}>
      <h1 className="text-3xl text-center mb-4">Click to add a character</h1>
      <ul className="flex flex-col space-y-4">
        {renderPlayerCards(props.allPlayers)}
      </ul>
    </Modal>
  );
}

export default AddPlayerModal;
