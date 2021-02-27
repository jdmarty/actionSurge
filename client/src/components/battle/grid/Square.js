import React from "react";

function Square({ spl, children }) {
  return (
    <div
      className="border-gray-100 border bg-blue-100"
      style={{
        width: `${100 / spl}%`,
        height: `${100 / spl}%`,
      }}
    >
      {children}
    </div>
  );
}

export default Square;
