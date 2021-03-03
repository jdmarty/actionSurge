import React from "react";
import HealthBar from "../HealthBar"
import ReactTooltip from "react-tooltip"

function Token(props) {
  // get the token name by returning only the first letter and numbers
  const tokenName = props.name.split("").filter((char, index, arr) => {
    //return first and second letter if the name is one word
    if (index === 1 && !arr.includes(" ")) return true
    if (index === 0) return true;
    // return all capital letters and numbers
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
  const isDead = props.current_hit_points <= 0 && "opacity-70"
  const remainingHealth = (props.current_hit_points / props.hit_points) *100

  // return a div containing the health bar, token name, and possible overlay
  return (
    <div
      className={`${type} ${isMover} ${isDead} text-black text-center truncate cursor-move relative noselect`}
      style={style}
      onMouseDown={() => props.onMouseDown(props.name, props._id)}
      data-tip={props.name}
    >
      {/* Health Bar */}
      <HealthBar health={remainingHealth} height={5} />
      {/* Token Name */}
      {tokenName || "x"}
      {/* Name Tooltip */}
      <ReactTooltip />
    </div>
  );
}

export default Token;
