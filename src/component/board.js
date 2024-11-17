import React from "react";
import Cell from "./cell";

const Board = ({ gameTable, onDropToken }) => {
  return (
    <div className="board">
      {gameTable.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, columnIndex) => (
            <Cell
              key={`${rowIndex}-${columnIndex}`}
              value={cell}
              onDrop={() => onDropToken(rowIndex, columnIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
