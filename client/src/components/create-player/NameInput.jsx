import React, { useRef, useState } from "react";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_TOP } from "../../utils/actions";

function NameInput() {
  // State and context
  const [characterState, characterDispatch] = useCreateCharacterContext();
  const [name, setName] = useState(characterState.name);

  // References
  const nameInput = useRef()

  // Handler for name change
  const handleNameChange = (e) => {
    setName(nameInput.current.value);
    characterDispatch({
      type: ADJUST_CHARACTER_TOP,
      target: "name",
      value: nameInput.current.value,
    });
  }

  return (
    <div className="lg:grid grid-cols-12 px-2">
      <label
        htmlFor="player-name"
        className="col-span-1 py-1 text-center block text-2xl font-medium text-gray-300"
      >
        Name
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

export default NameInput;
