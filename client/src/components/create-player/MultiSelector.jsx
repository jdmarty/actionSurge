import React, { useEffect, useState } from "react";
import Select from "react-select";
import parseIndexName from "../../utils/parseIndexName";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { ADJUST_CHARACTER_ARRAY } from "../../utils/actions";

function Selector(props) {
  // Global State
  const [characterState, characterDispatch] = useCreateCharacterContext();
  // Set default value from global state
  const defaultValue =
    characterState[props.type].length > 0
      ? characterState[props.type].map((string) => {
          return { value: string, label: parseIndexName(string) };
        })
      : null;
  // Local State
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  useEffect(() => {
    // map out the current selected option
    let newArray = [];
    if (selectedOption) {
      newArray = selectedOption.map((option) => option.value);
    }
    characterDispatch({
      type: ADJUST_CHARACTER_ARRAY,
      target: props.type,
      newArray,
    });
  }, [selectedOption]);

  return (
    <div className="m-1 text-black">
      <label htmlFor={props.label.toLowerCase()} className="text-gray-300">
        {props.label}
      </label>
      <Select
        defaultValue={selectedOption}
        isMulti
        onChange={setSelectedOption}
        options={props.options}
      />
    </div>
  );
}

export default Selector;
