import React, { useRef, useState } from "react";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_TOP } from "../../utils/actions";

function ArmorClassInput() {
  // State and context
  const [playerState, playerDispatch] = useCreatePlayerContext();
  const [ac, setAc] = useState(playerState.armor_class);


  // References
  const acInput = useRef();

  // Handler for name change
  const handleAcChange = (e) => {
    if (acInput.current.value < 1) {
      setAc(1);
      return;
    }
    setAc(acInput.current.value);
    playerDispatch({
      type: ADJUST_PLAYER_TOP,
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
