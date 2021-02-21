import React, { useEffect, useState } from "react";
import Select from "react-select";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState"
import { ADJUST_PLAYER_TOP } from "../../utils/actions"

function Selector(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [playerState, playerDispatch ] = useCreatePlayerContext()

  useEffect(() => {
    playerDispatch({
      type: ADJUST_PLAYER_TOP,
      target: props.type,
      value: selectedOption ? selectedOption.value : ""
    })
  }, [selectedOption])

  return (
    <>
      <label htmlFor={props.label.toLowerCase()} className="text-gray-500">
        {props.label}
      </label>
      <Select
        defaultValue={playerState[props.type]}
        onChange={setSelectedOption}
        options={props.options}
      />
    </>
  );
}

export default Selector