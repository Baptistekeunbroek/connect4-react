import React, { useState } from "react";
import Board from "./component/board/board";
import Controls from "./component/controls/controls";
import Modal from "./component/modal/modal";
import { handleCellClick } from "./utils/handleCellClick";

const Game = () => {
  const [rows, setRows] = useState(6);
  const [columns, setColumns] = useState(7);
  const [gameTable, setGameTable] = useState(
    Array(6)
      .fill(null)
      .map(() => Array(7).fill("."))
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [powers, setPowers] = useState({
    X: { anvil: 1, racecar: 1 },
    O: { anvil: 1, racecar: 1 },
  });
  const [selectedPower, setSelectedPower] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const handleGridSizeSelection = (cols) => {
    setColumns(cols);
    setGameTable(
      Array(rows)
        .fill(null)
        .map(() => Array(cols).fill("."))
    );
    setShowModal(false);
  };

  const handleUsePower = (power) => {
    const playerPowers = { ...powers[currentPlayer] };

    if (playerPowers[power] > 0) {
      setSelectedPower(power);
    } else {
      alert(`No ${power} power remaining!`);
    }
  };

  const togglePlayer = () =>
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

  const resetGame = () => {
    setGameTable(
      Array(rows)
        .fill(null)
        .map(() => Array(columns).fill("."))
    );
    setCurrentPlayer("X");
    setPowers({ X: { anvil: 1, racecar: 1 }, O: { anvil: 1, racecar: 1 } });
  };

  return (
    <div>
      <Modal isVisible={showModal} title="Choose Grid Size">
        <button
          className="grid-button"
          onClick={() => handleGridSizeSelection(7)}
        >
          6 x 7 Grid
        </button>
        <button
          className="grid-button"
          onClick={() => handleGridSizeSelection(9)}
        >
          6 x 9 Grid
        </button>
      </Modal>

      {!showModal && (
        <>
          <Controls
            currentPlayer={currentPlayer}
            powers={powers[currentPlayer]}
            onUsePower={(power) => handleUsePower(power)}
            onReset={resetGame}
          />
          <Board
            gameTable={gameTable}
            onDropToken={(row, column) =>
              handleCellClick(
                row,
                column,
                gameTable,
                setGameTable,
                currentPlayer,
                powers,
                selectedPower,
                setPowers,
                togglePlayer,
                rows,
                columns,
                setSelectedPower
              )
            }
          />
        </>
      )}
    </div>
  );
};

export default Game;
