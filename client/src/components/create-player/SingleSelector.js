import React, { useEffect, useState } from "react";
import Select from "react-select";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState"
import { ADJUST_PLAYER_TOP } from "../../utils/actions"
import parseIndexName from "../../utils/parseIndexName"

function Selector(props) {
  const [playerState, playerDispatch] = useCreatePlayerContext();
  // determine default value from state
  const defaultValue = {
    value: playerState[props.type],
    label: playerState[props.type] ? parseIndexName(playerState[props.type].toString()) : null,
  };
  // set default value
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  // when selection changes, adjust the state
  useEffect(() => {
    playerDispatch({
      type: ADJUST_PLAYER_TOP,
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