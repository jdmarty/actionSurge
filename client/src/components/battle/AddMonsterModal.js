import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { toast } from "react-toast";

function AddMonsterModal(props) {
  // state for filtered list
  const [search, setSearch] = useState();
  const searchRef = useRef();

  // handle change to input searchbar
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  // assign modal for reader
  Modal.setAppElement("#root");

  // cards for each monster
  const AddMonsterCard = (props) => {
    return (
      <li
        className="text-2xl border border-red-500 flex px-3 hover:bg-green-300 hover:text-white"
        onClick={() => {
          props.onClick(props.name)
          toast.success(`${props.name} added to battle`)
        }}
      >
        <dt className="border-black w-1/3">{props.name}</dt>
      </li>
    );
  };

  // render monsters
  const renderMonsterCards = (monsters) => {
    // filter monsters to those that match search term
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.match(new RegExp(search, "gi"));
    });
    // map out filtered list of monsters to components
    return filteredMonsters.map((monster, index) => {
      return (
        <AddMonsterCard
          {...monster}
          key={"addMonster" + index}
          onClick={props.handleAdd}
          closeModal={props.closeModal}
        />
      );
    });
  };

  return (
    <Modal {...props}>
      <h1 className="text-3xl text-center mb-2">Click to add a monster</h1>
      <input
        type="text"
        className="text-2xl text-center mb-4 border-black border"
        placeholder="Search Monster"
        ref={searchRef}
        onChange={handleSearch}
      ></input>
      <ul
        className="flex flex-col space-y-4"
        style={{ height: "75vh", overflow: "auto" }}
      >
        {renderMonsterCards(props.allMonsters)}
      </ul>
    </Modal>
  );
}

export default AddMonsterModal;
