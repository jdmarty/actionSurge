import React, { useState, useRef, useEffect } from "react";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState"
import { ADJUST_PLAYER_TOP, ADJUST_PLAYER_ARRAY } from "../../utils/actions"

function SavesCard(props) {
  // State
  const [playerState, playerDispatch] = useCreatePlayerContext();
  const [proficient, setProficient] = useState(false)

  // Reference
  const isProf = useRef()

  // Check handler
  const handleCheck = e => {
    setProficient(!proficient)
  }

  // Effect to update array of proficiencies
  useEffect(() => {
    // get the current proficiences
    let currentProfs = [...playerState.saveProficiencies]
    // either add or remove the current proficiencies
    if (proficient) currentProfs.push(props.type)
    else currentProfs = currentProfs.filter(save => props.type !== save)
    // set the global state with the new profs
    playerDispatch({
      type: ADJUST_PLAYER_ARRAY,
      newArray: currentProfs
    })
  }, [proficient])

  // Render the save bonus
  const renderBonus = () => {
    let bonus = Math.floor((playerState[props.type] - 10) / 2);
    if (playerState.saveProficiencies.includes(props.type)) {
      bonus += playerState.proficiency;
    };
    return bonus < 0 ? bonus : "+"+ bonus
  }
  
  return (
    <div className="bg-white px-2 rounded-full">
      <input 
        type="checkbox" 
        name="save" 
        className="cursor-pointer" 
        ref={isProf}
        checked={proficient}
        onChange={handleCheck}>
      </input>

      <label htmlFor="save" className="mx-2">
        {props.display}
      </label>
      <span>{renderBonus()}</span>
    </div>
  );
}

export default SavesCard;
