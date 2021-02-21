import React, { useRef, useState } from "react";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_TOP } from "../../utils/actions";

function ArmorClassInput() {
  // State and context
  const [hp, setHp] = useState(10);
  const [playerState, playerDispatch] = useCreatePlayerContext();

  // References
  const acInput = useRef();

  // Handler for name change
  const handleAcChange = (e) => {
    if (acInput.current.value < 1) {
      setHp(1);
      return;
    }
    setHp(acInput.current.value);
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
        value={hp}
        ref={acInput}
        onChange={handleAcChange}
      ></input>
    </div>
  );
}

export default ArmorClassInput;
