import React from "react";

function DisplayCharacter(props) {
  return (
    <>
      {/* Name Header */}
      <h1 className="text-center m-2 text-2xl">{props.name}</h1>
      {/* Hit Points and Armor Class */}
      <div className="px-6 flex justify-around">
        <span className="text-center">
          <i class="fas fa-2x fa-heart text-red-500">{props.current_hit_points}</i>
        </span>
        <span className="text-center">
          <i class="fas fa-2x fa-shield">{props.armor_class}</i>
        </span>
      </div>
    </>
  );
}

export default DisplayCharacter;
