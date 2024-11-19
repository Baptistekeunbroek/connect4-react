export const checkWinner = (table, currentPlayer, rows, columns) => {
  const winCondition = columns === 9 ? 5 : 4;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (table[i][j] === currentPlayer) {
        if (j + winCondition - 1 < columns) {
          let horizontalWin = true;
          for (let k = 1; k < winCondition; k++) {
            if (table[i][j + k] !== currentPlayer) {
              horizontalWin = false;
              break;
            }
          }
          if (horizontalWin) return true;
        }

        if (i + winCondition - 1 < rows) {
          let verticalWin = true;
          for (let k = 1; k < winCondition; k++) {
            if (table[i + k][j] !== currentPlayer) {
              verticalWin = false;
              break;
            }
          }
          if (verticalWin) return true;
        }

        if (i + winCondition - 1 < rows && j + winCondition - 1 < columns) {
          let diagonalWin = true;
          for (let k = 1; k < winCondition; k++) {
            if (table[i + k][j + k] !== currentPlayer) {
              diagonalWin = false;
              break;
            }
          }
          if (diagonalWin) return true;
        }

        if (i + winCondition - 1 < rows && j - (winCondition - 1) >= 0) {
          let diagonalWin = true;
          for (let k = 1; k < winCondition; k++) {
            if (table[i + k][j - k] !== currentPlayer) {
              diagonalWin = false;
              break;
            }
          }
          if (diagonalWin) return true;
        }
      }
    }
  }

  return false;
};
