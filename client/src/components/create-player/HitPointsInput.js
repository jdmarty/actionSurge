import React, { useRef, useState } from "react";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_TOP } from "../../utils/actions";

function HitPointsInput() {
  // State and context
  const [playerState, playerDispatch] = useCreatePlayerContext();
  const [hp, setHp] = useState(playerState.hit_points);


  // References
  const hpInput = useRef();

  // Handler for name change
  const handleHpChange = (e) => {
    if (hpInput.current.value < 1) {
      setHp(1);
      return
    }
    setHp(hpInput.current.value);
    playerDispatch({
      type: ADJUST_PLAYER_TOP,
      target: "hit_points",
      value: Number(hpInput.current.value),
    });
  };

  return (
    <div className="text-center">
      <label htmlFor="maxHP" className="text-2xl">
        HP
      </label>
      <input
        name="maxHP"
        type="number"
        className="mx-2 rounded text-2xl text-black text-center w-1/2"
        value={hp}
        ref={hpInput}
        onChange={handleHpChange}
      ></input>
    </div>
  );
}

export default HitPointsInput;
