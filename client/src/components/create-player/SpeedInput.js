import React, { useRef, useState } from "react";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_TOP } from "../../utils/actions";

function SpeedInput() {
  // Global and Local State
  const [playerState, playerDispatch] = useCreatePlayerContext();
  const [speed, setSpeed] = useState(playerState.speed);


  // References
  const speedInput = useRef();

  // Handler for name change
  const handleSpeedChange = (e) => {
    if (speedInput.current.value < 0) {
      setSpeed(0);
      return;
    }
    setSpeed(speedInput.current.value);
    playerDispatch({
      type: ADJUST_PLAYER_TOP,
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
