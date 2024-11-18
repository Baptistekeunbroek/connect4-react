import React from "react";
import "./controls.css";

const Controls = ({ currentPlayer, powers, onUsePower, onReset }) => {
  return (
    <div className="controls">
      <h2>Player {currentPlayer}'s Turn</h2>
      <button onClick={() => onUsePower("anvil")}>
        Use Anvil ({powers.anvil} left)
      </button>
      <button onClick={() => onUsePower("racecar")}>
        Use Racecar ({powers.racecar} left)
      </button>
      <button onClick={onReset}>Reset Game</button>
    </div>
  );
};

export default Controls;
