import React, { useState, useRef, useEffect } from "react";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_ARRAY } from "../../utils/actions";

function SkillsCard(props) {
  // State
  const [playerState, playerDispatch] = useCreatePlayerContext();
  const [proficient, setProficient] = useState(false);

  // Reference
  const isProf = useRef();

  // Check handler
  const handleCheck = (e) => {
    setProficient(!proficient);
  };

  // Effect to update array of proficiencies
  useEffect(() => {
    // get the current proficiences
    let currentProfs = [...playerState.save_proficiencies];
    // either add or remove the current proficiencies
    if (proficient) currentProfs.push(props.type);
    else currentProfs = currentProfs.filter((save) => props.type !== save);
    // set the global state with the new profs
    playerDispatch({
      type: ADJUST_PLAYER_ARRAY,
      target: "save_proficiencies",
      newArray: currentProfs,
    });
  }, [proficient]);

  // Render the save bonus
  const renderBonus = () => {
    let bonus = Math.floor((playerState[props.type] - 10) / 2);
    if (playerState.save_proficiencies.includes(props.type)) {
      bonus += playerState.proficiency;
    }
    return bonus < 0 ? bonus : "+" + bonus;
  };

  return (
    <div className="flex justify-around">
      <div>{props.label}</div>
      <div className="px-2 rounded-full space-x-4">
          <input type="radio" name="prof" value="proficient"></input>
          <label for="male">Proficient</label>
          <input type="radio" name="prof" value="expert"></input>
          <label for="female">Expert</label>
      </div>
      <div>Bonus</div>
    </div>
  );
}

export default SkillsCard;