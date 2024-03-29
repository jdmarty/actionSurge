import React from "react";
import HealthBar from "../HealthBar.jsx"
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

  // set token stats from character size
  const setSize = (size, spl) => {
    switch (size) {
      case "Huge":
        return {
          height: "calc(200% + 2px)",
          width: "calc(200% + 2px)",
          fontSize: `${36 / spl}vw`,
        };
      case "Gargantuan":
        return {
          height: "calc(300% + 4px)",
          width: "calc(300% + 4px)",
          fontSize: `${54 / spl}vw`,
        };
      default:
        return {
          height: "100%",
          width: "100%",
          fontSize: `${18 / spl}vw`,
        };
    }
  }

  //style to fit in square
  const style = {
    boxSizing: "content-box",
    ...setSize(props.size, props.spl)
  };

  // conditional styles
  const type = props.type === "character" ? "bg-green-300" : "bg-red-300";
  const isMover =
    props._id && props.mover._id === props._id
      ? "ring-4"
      : "";
  const isDead = props.current_hit_points <= 0 && "opacity-50"
  const isFirst = props.first ? "ring-2 ring-yellow-800" : ""
  const remainingHealth = (props.current_hit_points / props.hit_points) *100

  // return a div containing the health bar, token name, and possible overlay
  return (
    <div
      className={`${type} ${isMover} ${isDead} ${isFirst} text-black text-center truncate cursor-move relative noselect border border-black`}
      style={style}
      onMouseDown={() => props.onMouseDown(props._id)}
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
