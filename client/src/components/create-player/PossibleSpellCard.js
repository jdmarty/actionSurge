import React from "react";
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_ARRAY } from "../../utils/actions";

function PossibleSpellCard(props) {
  const [characterState, characterDispatch] = useCreateCharacterContext();

  // handler to add item to spell list when clicked
  const handleAddClick = () => {
    let currentSpells = [...characterState.spells];
    // do not add if spell is already on list
    if (currentSpells.includes(props.name)) return
    currentSpells.push(props.name);
    characterDispatch({
      type: ADJUST_CHARACTER_ARRAY,
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
