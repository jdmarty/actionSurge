import React from "react";

function InitiativeCard(props) {
  return (
    <div className="border border-black my-4 flex justify-between p-2">
      <dt className="w-1/2">{props.name}</dt>
      <dt className="w-1/4 text-right">Intiative {props.initiative}</dt>
      <dt
        className="w-1/4 text-right cursor-pointer hover:text-red-800"
        onClick={() => {
          props.onClick(props.name, props.id);
        }}
      >
        X
      </dt>
    </div>
  );
}

export default InitiativeCard;
