import React from "react";

const Cell = ({ value, onDrop }) => {
  const cellClass =
    value === "X" ? "cell cell-x" : value === "O" ? "cell cell-o" : "cell";

  return (
    <div className={cellClass} onClick={onDrop}>
      <p>{value === "X" || value === "O" ? value : ""}</p>
    </div>
  );
};

export default Cell;
