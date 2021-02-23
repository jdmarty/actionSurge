import React, { useEffect, useState } from "react";
import Select from "react-select";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_TOP } from "../../utils/actions"
import parseIndexName from "../../utils/parseIndexName"

function Selector(props) {
  const [characterState, characterDispatch] = useCreateCharacterContext();
  // determine default value from state
  const defaultValue = {
    value: characterState[props.type],
    label: characterState[props.type] ? parseIndexName(characterState[props.type].toString()) : null,
  };
  // set default value
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  // when selection changes, adjust the state
  useEffect(() => {
    characterDispatch({
      type: ADJUST_CHARACTER_TOP,
      target: props.type,
      value: selectedOption ? selectedOption.value : ""
    })
  }, [selectedOption])

  return (
    <>
      <label htmlFor={props.label.toLowerCase()} className="text-white">
        {props.label}
      </label>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={props.options}
      />
    </>
  );
}

export default Selector