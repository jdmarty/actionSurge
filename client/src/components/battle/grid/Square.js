import React from "react";

function Square({ squaresPerLine, children }) {
  return (
    <div
      className="border-gray-100 border bg-blue-100"
      style={{
        width: `${100 / squaresPerLine}%`,
        height: `${100 / squaresPerLine}%`,
      }}
    >
      {children}
    </div>
  );
}

export default Square;
