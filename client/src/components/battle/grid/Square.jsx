import React from "react";

function Square({ spl, children, active, onMouseUp }) {
  // set width for each square and font size
  const squareStyle = {
    width: `${100 / spl}%`,
    height: `${100 / spl}%`,
  };

  return (
    <div
      className={`border-gray-300 border bg-blue-100 overflow-visible ${active && "hover:bg-gray-500 bg-blue-200"}`}
      style={squareStyle}
      onMouseUp={() => onMouseUp()}
    >
      {children}
    </div>
  );
}

export default Square;
