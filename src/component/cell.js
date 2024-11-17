import React from "react";

const Cell = ({ value, onDrop }) => {
  return (
    <div className="cell" onClick={onDrop}>
      {value}
    </div>
  );
};

export default Cell;
