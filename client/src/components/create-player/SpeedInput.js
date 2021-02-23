import React, { useRef, useState } from "react";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_TOP } from "../../utils/actions";

function SpeedInput() {
  // Global and Local State
  const [characterState, characterDispatch] = useCreateCharacterContext();
  const [speed, setSpeed] = useState(characterState.speed);


  // References
  const speedInput = useRef();

  // Handler for name change
  const handleSpeedChange = (e) => {
    if (speedInput.current.value < 0) {
      setSpeed(0);
      return;
    }
    setSpeed(speedInput.current.value);
    characterDispatch({
      type: ADJUST_CHARACTER_TOP,
      target: "speed",
      value: Number(speedInput.current.value),
    });
  };

  return (
    <div className="text-center">
      <label htmlFor="maxHP" className="text-2xl">
        Speed
      </label>
      <input
        name="speed"
        type="number"
        className="mx-2 rounded text-2xl text-black text-center w-1/2"
        value={speed}
        ref={speedInput}
        onChange={handleSpeedChange}
      ></input>
    </div>
  );
}

export default SpeedInput;
