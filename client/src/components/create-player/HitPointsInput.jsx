import React, { useRef, useState } from "react";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_TOP } from "../../utils/actions";

function HitPointsInput() {
  // State and context
  const [characterState, characterDispatch] = useCreateCharacterContext()
  const [hp, setHp] = useState(characterState.hit_points);


  // References
  const hpInput = useRef();

  // Handler for name change
  const handleHpChange = (e) => {
    if (hpInput.current.value < 1) {
      setHp("");
      return
    }
    setHp(hpInput.current.value);
    characterDispatch({
      type: ADJUST_CHARACTER_TOP,
      target: "hit_points",
      value: Number(hpInput.current.value),
    });
  };

  return (
    <div className="text-center">
      <label htmlFor="maxHP" className="text-2xl">
        Hit Points
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
