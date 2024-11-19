import React from "react";
import "./controls.css";

const Controls = ({ currentPlayer, powers, onUsePower, onReset }) => {
  return (
    <div className="controls">
      <h2 className="controls-title">Player {currentPlayer}'s Turn</h2>
      <div className="powers">
        <button
          onClick={() => onUsePower("anvil")}
          className={`power-button ${powers.anvil <= 0 ? "disabled" : ""}`}
          disabled={powers.anvil <= 0}
        >
          <i className="fas fa-anchor"></i>
          <span className="power-count">{powers.anvil}</span>
          <div className="tooltip">
            Anvil: Drop an anvil that clears the column from the point where
            it's placed down.
          </div>
        </button>
        <button
          onClick={() => onUsePower("racecar")}
          className={`power-button ${powers.racecar <= 0 ? "disabled" : ""}`}
          disabled={powers.racecar <= 0}
        >
          <i className="fas fa-car"></i>
          <span className="power-count">{powers.racecar}</span>
          <div className="tooltip">
            Racecar: Move a piece to the bottom row of any column.
          </div>
        </button>
      </div>
      <button className="reset-button" onClick={onReset}>
        Reset Game
      </button>
    </div>
  );
};

export default Controls;
