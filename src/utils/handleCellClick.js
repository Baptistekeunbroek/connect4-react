import { checkWinner } from "../utils/checkWinner";

export const handleCellClick = (
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
) => {
  if (selectedPower) {
    const updatedPowers = { ...powers[currentPlayer] };
    let newTable = gameTable.map((row) => [...row]);

    if (selectedPower === "anvil") {
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
      }

      updatedPowers[selectedPower]--;
    } else if (selectedPower === "racecar") {
      // Racecar Power Logic
      for (let i = column; i < columns; i++) {
        if (newTable[row][i] !== "." && newTable[row][i] !== "A") {
          newTable[row][i] = ".";
        }
      }

      let lowestAvailableColumn = -1;
      for (let i = columns - 1; i >= 0; i--) {
        if (newTable[row][i] === ".") {
          lowestAvailableColumn = i;
          break;
        }
      }

      if (lowestAvailableColumn !== -1) {
        newTable[row][lowestAvailableColumn] = "C";
      }

      updatedPowers[selectedPower]--;
    }

    setGameTable(newTable);
    setPowers({ ...powers, [currentPlayer]: updatedPowers });

    setSelectedPower(null);
    togglePlayer();
  } else {
    const newTable = gameTable.map((row) => [...row]);

    if (newTable[row][column] !== ".") {
      for (let i = row; i > 0; i--) {
        newTable[i][column] = newTable[i - 1][column];
      }
      newTable[0][column] = ".";

      setGameTable(newTable);

      if (checkWinner(newTable, currentPlayer, rows, columns)) {
        alert(`Player ${currentPlayer} wins!`);
      } else {
        togglePlayer();
      }
      return;
    }

    for (let i = rows - 1; i >= 0; i--) {
      if (newTable[i][column] === ".") {
        newTable[i][column] = currentPlayer;
        setGameTable(newTable);
        if (checkWinner(newTable, currentPlayer, rows, columns)) {
          alert(`Player ${currentPlayer} wins!`);
        } else {
          togglePlayer();
        }
        return;
      }
    }

    alert("Column is full!");
  }
};
