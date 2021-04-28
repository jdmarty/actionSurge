import React, { useState, useRef, useEffect } from "react";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_ARRAY } from "../../utils/actions"

function SavesCard(props) {
  // Global and Local State
  const [characterState, characterDispatch] = useCreateCharacterContext();
  // Set initial state to reference player state
  const [proficient, setProficient] = useState(characterState.save_proficiencies.includes(props.type))

  // Reference to checkbox
  const isProf = useRef()

  // Check handler
  const handleCheck = e => {
    setProficient(!proficient)
  }

  // Effect to update array of proficiencies
  useEffect(() => {
    // get the current proficiences
    let currentProfs = [...characterState.save_proficiencies]
    // either add or remove the current proficiencies
    if (proficient) currentProfs.push(props.type)
    else currentProfs = currentProfs.filter(save => props.type !== save)
    // set the global state with the new profs
    characterDispatch({
      type: ADJUST_CHARACTER_ARRAY,
      target: "save_proficiencies",
      newArray: currentProfs
    })
  }, [proficient])

  // Render the save bonus
  const renderBonus = () => {
    let bonus = Math.floor((characterState[props.type] - 10) / 2);
    if (characterState.save_proficiencies.includes(props.type)) {
      bonus += characterState.proficiency;
    };
    return bonus < 0 ? bonus : "+"+ bonus
  }

  // conditional class
  const style= proficient ? "bg-blue-700 text-white" : "bg-gray-500 text-white"
  
  return (
    <div className={`${style} p-2 my-2 rounded-md`}>
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
