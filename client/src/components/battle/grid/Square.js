import React from "react";

function Square({ spl, children, active, onClick }) {
  // set width for each square
  const squareStyle = {
    width: `${100 / spl}%`,
    height: `${100 / spl}%`,
  };

  return (
    <div
      className={`border-gray-100 border bg-blue-100 ${active && "hover:bg-gray-300"}`}
      style={squareStyle}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
}

export default Square;
