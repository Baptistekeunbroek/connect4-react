import React from "react";
import "./cell.css";

const Cell = ({ value, onDrop }) => {
  const cellClass =
    value === "X"
      ? "cell cell-x"
      : value === "O"
      ? "cell cell-o"
      : value === "A"
      ? "cell cell-anvil"
      : value === "C"
      ? "cell cell-racecar"
      : "cell";

  const renderIcon = () => {
    if (value === "A") {
      return <i className="fas fa-anchor"></i>;
    }
    if (value === "C") {
      return <i className="fas fa-car"></i>;
    }
    return null;
  };

  return (
    <div className={cellClass} onClick={onDrop}>
      {renderIcon()}
    </div>
  );
};

export default Cell;
