import React from "react";

function Token(props) {
  // get the token name by returning only the first letter and numbers
  const tokenName = props.name.split("").filter((char, index) => {
    if (index === 0) return true;
    if (parseInt(char)) return true;
    return false;
  });
  // style token to fill square
  const tokenStyle = {
    width: "100",
    height: "100%",
  };
  // return a simple span containing the first letter the combatants name
  return (
    <div style={tokenStyle} className="bg-gray-500 text-white text-center">
      {tokenName || "x"}
    </div>
  );
}

export default Token;
