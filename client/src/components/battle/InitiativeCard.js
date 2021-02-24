import React from "react";

function InitiativeCard(props) {
  const monster = props.id ? false : true
  return (
    <div className={`border border-black my-4 flex justify-between p-2 ${monster ? "bg-red-300" : "bg-green-300"}`}>
      <dt className="w-1/2">{props.name}</dt>
      <div className="text-right flex justify-between">
        <label>Initiative</label>
        <input className="w-12 mx-2" type="number"></input>
      </div>
      <button
        className="text-right hover:text-red-800"
        onClick={() => {
          props.onClick(props.name, props.id);
        }}
      >
        ❌
      </button>
    </div>
  );
}

export default InitiativeCard;
