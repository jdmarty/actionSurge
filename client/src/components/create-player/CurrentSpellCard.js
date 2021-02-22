import React from "react";
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_ARRAY } from "../../utils/actions";

function CurrentSpellCard(props) {
  const [playerState, playerDispatch] = useCreatePlayerContext();

  // handler to remove item from spell list
  const handleRemoveClick = () => {
    let currentSpells = [...playerState.spells].filter(spell => spell !== props.name);
    playerDispatch({
      type: ADJUST_PLAYER_ARRAY,
      target: "spells",
      newArray: currentSpells,
    });
  };

  return (
    <li
      className="border m-4 px-2 bg-green-500 flex justify-between cursor-pointer"
      onClick={handleRemoveClick}
    >
      <dt>{props.label}</dt>
      <span>-</span>
    </li>
  );
}

export default CurrentSpellCard;
