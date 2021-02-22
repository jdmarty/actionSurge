import React from "react";
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_ARRAY } from "../../utils/actions";

function PossibleSpellCard(props) {
  const [playerState, playerDispatch] = useCreatePlayerContext();

  // handler to add item to spell list when clicked
  const handleAddClick = () => {
    let currentSpells = [...playerState.spells];
    if (currentSpells.includes(props.name)) return
    currentSpells.push(props.name);
    playerDispatch({
      type: ADJUST_PLAYER_ARRAY,
      target: "spells",
      newArray: currentSpells,
    });
  };

  return (
    <li
      className="border m-4 px-2 bg-blue-500 flex justify-between cursor-pointer"
      onClick={handleAddClick}
    >
      <dt>{props.label}</dt>
      <span>+</span>
    </li>
  );
}

export default PossibleSpellCard;
