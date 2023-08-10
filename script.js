let currentPlayer = 'X';

function handleCellClick(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}
