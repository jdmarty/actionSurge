import React, { useEffect, useState } from "react";
import Select from "react-select";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_ARRAY } from "../../utils/actions";

function Selector(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [playerState, playerDispatch] = useCreatePlayerContext();

  useEffect(() => {
    // map out the current selected option
    let newArray = []
    if (selectedOption) {
      newArray = selectedOption.map(option => option.value)
    }
    playerDispatch({
      type: ADJUST_PLAYER_ARRAY,
      target: props.type,
      newArray,
    });
  }, [selectedOption]);

  return (
    <div className="m-1 text-black">
      <label htmlFor={props.label.toLowerCase()} className="text-white">
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
