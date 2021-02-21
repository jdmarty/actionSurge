import React, { useState } from "react";
import Select from "react-select";

function Selector(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <label htmlFor={props.label.toLowerCase()} className="text-gray-500">
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