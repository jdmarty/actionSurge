import React from "react";

const HealthBar = ({health, height}) => {

  const containerStyles = {
    height,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: health > 100 ? "100%" : `${health}%`,
    borderRadius: "inherit",
    textAlign: "right",
  };

  // conditional class for health
  const bg = (health) => {
    if (health < 50 && health > 25) return "bg-yellow-500"
    if (health <= 25) return "bg-red-500"
    return "bg-green-500"
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} className={bg(health)}>
      </div>
    </div>
  );
};

export default HealthBar;
