import React from "react";

function Token(props) {
  // get the token name by returning only the first letter and numbers
  const tokenName = props.name.split("").filter((char, index) => {
    if (index === 0) return true;
    if (char.match(/[A-Z]/)) return true;
    if (char.match(/[0-9]/)) return true;
    return false;
  });
  // style token to fill square
  const tokenStyle = {
    width: "100",
    height: "100%",
  };

  // conditional styles
  const type = props._id ? "bg-green-300" : "bg-red-300";
  let isMover =
    props._id && (props.mover._id === props._id)
      ? "border-2 border-yellow-900"
      : props.mover.name === props.name
      ? "border-2 border-yellow-900"
      : "";

  // return a simple div containing the token name
  return (
    <div
      style={tokenStyle}
      className={`${type} ${isMover} text-black text-center text-sm truncate cursor-pointer`}
      onClick={() => props.onClick(props.name, props._id)}
    >
      {tokenName || "x"}
    </div>
  );
}

export default Token;
