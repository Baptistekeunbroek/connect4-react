import React from "react";
import Cell from "../cell/cell";
import "./board.css";

const Board = ({ gameTable, onDropToken }) => {
  const columns = gameTable[0].length;
  const gridClass = `grid-${columns}`;

  return (
    <div className={`board ${gridClass}`}>
      {gameTable.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <Cell
            key={`${rowIndex}-${columnIndex}`}
            value={cell}
            onDrop={() => onDropToken(rowIndex, columnIndex)}
          />
        ))
      )}
    </div>
  );
};

export default Board;
