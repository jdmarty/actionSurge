import React, { useRef, useState } from "react";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_TOP } from "../../utils/actions";

function ArmorClassInput() {
  // State and context
  const [characterState, characterDispatch] = useCreateCharacterContext();
  const [ac, setAc] = useState(characterState.armor_class);


  // References
  const acInput = useRef();

  // Handler for name change
  const handleAcChange = (e) => {
    if (acInput.current.value < 1) {
      setAc(1);
      return;
    }
    setAc(acInput.current.value);
    characterDispatch({
      type: ADJUST_CHARACTER_TOP,
      target: "armor_class",
      value: Number(acInput.current.value),
    });
  };

  return (
    <div className="text-center">
      <label htmlFor="maxHP" className="text-2xl">
        AC
      </label>
      <input
        name="AC"
        type="number"
        className="mx-2 rounded text-2xl text-black text-center w-1/2"
        value={ac}
        ref={acInput}
        onChange={handleAcChange}
      ></input>
    </div>
  );
}

export default ArmorClassInput;
