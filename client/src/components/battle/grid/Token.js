import React from "react";
import HealthBar from "../HealthBar"

function Token(props) {
  // get the token name by returning only the first letter and numbers
  const tokenName = props.name.split("").filter((char, index) => {
    if (index === 0 || index === 1) return true;
    if (char.match(/[A-Z]/)) return true;
    if (char.match(/[0-9]/)) return true;
    return false;
  }).join("");

  //style to fit in token
  const style = {
    height: "100%",
    width: "100%",
  }

  // conditional styles
  const type = props._id ? "bg-green-300" : "bg-red-300";
  const isMover =
    props._id && props.mover._id === props._id
      ? "border-2 border-yellow-900"
      : props.mover.name === props.name
      ? "border-2 border-yellow-900"
      : "";
  const isDead = props.current_hit_points <= 0 && <div className="absolute top-0 left-0 bg-red-100 h-full w-full opacity-70"></div>
  const remainingHealth = (props.current_hit_points / props.hit_points) *100

  // return a div containing the health bar, token name, and possible overlay
  return (
    <div
      className={`${type} ${isMover} text-black text-center truncate cursor-move relative noselect`}
      style={style}
      onMouseDown={() => props.onMouseDown(props.name, props._id)}
    >
      {/* Health Bar */}
      <HealthBar health={remainingHealth} height={5}/>
      {/* Token Name */}
      {tokenName || "x"}
      {/* Overlay shows if target is dead / unconcious */}
      {isDead}
    </div>
  );
}

export default Token;
