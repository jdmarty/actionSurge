import React, { useEffect, useState } from "react";
import Select from "react-select";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { ADJUST_PLAYER_TOP } from "../../utils/actions";

function Selector(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [playerState, playerDispatch] = useCreatePlayerContext();

  useEffect(() => {
    console.log(selectedOption)
    // playerDispatch({
    //   type: ADJUST_PLAYER_TOP,
    //   target: props.type,
    //   value: selectedOption ? selectedOption.value : "",
    // });
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
