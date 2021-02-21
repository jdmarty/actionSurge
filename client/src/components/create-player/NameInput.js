import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_TOP } from "../../utils/actions";

function Selector(props) {
  // State and context
  const [name, setName] = useState("");
  const [playerState, playerDispatch] = useCreatePlayerContext();

  // References
  const nameInput = useRef()

  const handleNameChange = (e) => {
    setName(nameInput.current.value)
    playerDispatch({
      type: ADJUST_PLAYER_TOP,
      target: "name",
      value: name,
    });
  }

  return (
    <div className="grid grid-cols-12">
      <label
        htmlFor="player-name"
        className="col-span-1 py-1 text-center block text-lg font-medium text-gray-300"
      >
        Player Name
      </label>
      <input
        type="text"
        name="player-name"
        className="col-span-11 text-black p-1 mt-1 block w-full shadow-sm sm:text-2xl text-center border-gray-300 rounded-md"
        placeholder="Enter a Name"
        ref={nameInput}
        onChange={handleNameChange}
        value={name}
      ></input>
    </div>
  );
}

export default Selector;
