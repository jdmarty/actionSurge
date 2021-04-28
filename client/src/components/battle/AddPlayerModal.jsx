import React, { useState, useRef } from "react";
import Modal from "react-modal";
import parseName from "../../utils/parseIndexName";
import { toast } from "react-toast";

function AddPlayerModal(props) {
  // state for filtered list
  const [search, setSearch] = useState();
  const searchRef = useRef();

  // handle change to input searchbar
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  // assign modal for reader
  Modal.setAppElement("#root");

  // cards for each character
  const AddCharacterCard = (props) => {
    return (
      <li
        className="text-2xl bg-gray-800 text-gray-300 py-2 mx-6 rounded-md border border-white flex px-3 hover:bg-green-500 hover:text-black cursor-pointer"
        onClick={() => {
          props.onClick(props._id);
          toast.success(`${props.name} added to battle`);
        }}
      >
        <dt className="w-1/3">{props.name}</dt>
        <dt className="w-1/3 text-center">Level: {props.level}</dt>
        <dt className="w-1/3 text-right">{parseName(props.classType)}</dt>
      </li>
    );
  };

  const renderCharacterCards = (characters) => {
    // filter characters to those that match search term
    const filteredCharacters = characters.filter((character) => {
      return character.name.match(new RegExp(search, "gi"));
    });
    // map out filtered list of monsters to components
    return filteredCharacters.map((character, index) => {
      return (
        <AddCharacterCard
          {...character}
          key={"addCharacter" + index}
          index={index}
          onClick={props.handleAdd}
          closeModal={props.closeModal}
        />
      );
    });
  };

  return (
    <Modal {...props}>
      <h1 className="text-3xl text-center mb-2 border-b border-gray-800">
        Click to add a character
      </h1>
      <input
        type="text"
        className="text-2xl text-center mb-4 border-black border mx-6"
        placeholder="Search Characters"
        ref={searchRef}
        onChange={handleSearch}
      ></input>
      <ul
        className="flex flex-col space-y-4"
        style={{ height: "75vh", overflow: "auto" }}
      >
        {renderCharacterCards(props.allCharacters)}
      </ul>
    </Modal>
  );
}

export default AddPlayerModal;
