import React from "react";

function Square({ spl, children, active, onMouseUp }) {
  // set width for each square
  const squareStyle = {
    width: `${100 / spl}%`,
    height: `${100 / spl}%`,
  };

  return (
    <div
      className={`border-gray-100 border bg-blue-100 overflow-visible ${active && "hover:bg-gray-300 bg-blue-200"}`}
      style={squareStyle}
      onMouseUp={() => onMouseUp()}
    >
      {children}
    </div>
  );
}

export default Square;
