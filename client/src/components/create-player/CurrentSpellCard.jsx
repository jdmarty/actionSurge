import React from "react";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_ARRAY } from "../../utils/actions";

function CurrentSpellCard(props) {
  const [characterState, characterDispatch] = useCreateCharacterContext()

  // handler to remove item from spell list
  const handleRemoveClick = () => {
    let currentSpells = [...characterState.spells].filter(spell => spell !== props.name);
    characterDispatch({
      type: ADJUST_CHARACTER_ARRAY,
      target: "spells",
      newArray: currentSpells,
    });
  };

  return (
    <li
      className="border m-4 px-2 bg-green-700 flex justify-between cursor-pointer"
      onClick={handleRemoveClick}
    >
      <dt>{props.label}</dt>
      <span>-</span>
    </li>
  );
}

export default CurrentSpellCard;
