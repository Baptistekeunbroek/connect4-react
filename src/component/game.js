import React, { useState } from "react";
import Board from "./board";
import Controls from "./controls";
import "./game.css";

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

  const handleDropToken = (row, column) => {
    const newTable = gameTable.map((row) => [...row]);

    for (let i = rows - 1; i >= 0; i--) {
      if (newTable[i][column] === ".") {
        newTable[i][column] = currentPlayer;
        setGameTable(newTable);
        if (checkWinner(newTable)) {
          alert(`Player ${currentPlayer} wins!`);
          resetGame();
        } else {
          togglePlayer();
        }
        return;
      }
    }

    alert("Column is full!");
  };

  const handleUsePower = (power) => {
    const playerPowers = { ...powers[currentPlayer] };

    if (playerPowers[power] > 0) {
      setSelectedPower(power);
    } else {
      alert(`No ${power} power remaining!`);
    }
  };

  const handleCellClick = (row, column) => {
    if (selectedPower === "anvil") {
      const newTable = gameTable.map((row) => [...row]);

      for (let i = row; i < rows; i++) {
        if (newTable[i][column] !== "A") {
          newTable[i][column] = ".";
        }
      }

      let lowestAvailableRow = -1;
      for (let i = rows - 1; i >= 0; i--) {
        if (newTable[i][column] === ".") {
          lowestAvailableRow = i;
          break;
        }
      }

      if (lowestAvailableRow !== -1) {
        newTable[lowestAvailableRow][column] = "A";
        console.log(newTable, "tableAnvil");
      }

      setGameTable(newTable);

      const playerPowers = { ...powers[currentPlayer] };
      playerPowers[selectedPower]--;
      setPowers({ ...powers, [currentPlayer]: playerPowers });

      setSelectedPower(null);
      togglePlayer();
    } else {
      handleDropToken(row, column);
    }
  };

  const togglePlayer = () =>
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

  const resetGame = () => {
    setGameTable(Array(6).fill(Array(7).fill(".")));
    setCurrentPlayer("X");
    setPowers({ X: { anvil: 1, racecar: 1 }, O: { anvil: 1, racecar: 1 } });
  };

  const checkWinner = (table) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (table[i][j] === currentPlayer) {
          if (
            j + 3 < columns &&
            table[i][j] === currentPlayer &&
            table[i][j + 1] === currentPlayer &&
            table[i][j + 2] === currentPlayer &&
            table[i][j + 3] === currentPlayer
          ) {
            return true;
          }

          if (
            i + 3 < rows &&
            table[i][j] === currentPlayer &&
            table[i + 1][j] === currentPlayer &&
            table[i + 2][j] === currentPlayer &&
            table[i + 3][j] === currentPlayer
          ) {
            return true;
          }

          if (
            i + 3 < rows &&
            j + 3 < columns &&
            table[i][j] === currentPlayer &&
            table[i + 1][j + 1] === currentPlayer &&
            table[i + 2][j + 2] === currentPlayer &&
            table[i + 3][j + 3] === currentPlayer
          ) {
            return true;
          }

          if (
            i + 3 < rows &&
            j - 3 >= 0 &&
            table[i][j] === currentPlayer &&
            table[i + 1][j - 1] === currentPlayer &&
            table[i + 2][j - 2] === currentPlayer &&
            table[i + 3][j - 3] === currentPlayer
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return (
    <div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Choose Grid Size</h2>
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
          </div>
        </div>
      )}

      {!showModal && (
        <>
          <Controls
            currentPlayer={currentPlayer}
            powers={powers[currentPlayer]}
            onUsePower={(power) => handleUsePower(power)}
            onReset={resetGame}
          />
          <Board gameTable={gameTable} onDropToken={handleCellClick} />
        </>
      )}
    </div>
  );
};

export default Game;
