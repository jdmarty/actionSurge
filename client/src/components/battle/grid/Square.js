import React from "react";

function Square({ spl, children, onClick }) {
  // set width for each square
  const squareStyle = {
    width: `${100 / spl}%`,
    height: `${100 / spl}%`,
  };

  return (
    <div
      className="border-gray-100 border bg-blue-100"
      style={squareStyle}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
}

export default Square;
