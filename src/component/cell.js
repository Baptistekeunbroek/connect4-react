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
      : "cell";

  return (
    <div className={cellClass} onClick={onDrop}>
      <p>{value === "X" || value === "O" || value === "A" ? value : ""}</p>
    </div>
  );
};

export default Cell;
