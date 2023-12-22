function createBoard() {
  const boardElement = document.getElementById('board');

  // Clear existing board
  boardElement.innerHTML = '';

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell${i}`;
    cell.addEventListener('click', () => handleCellClick(i));
    boardElement.appendChild(cell);
  }
}

// Game state
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;

// Function to start the game
function startGame() {
  const playerXName = document.getElementById('playerX').value || 'Player X';
  const playerOName = document.getElementById('playerO').value || 'Player O';

  document.getElementById('playerNames').style.display = 'none';
  document.getElementById('board').style.display = 'grid'; // Display the board
  document.getElementById('currentPlayer').style.display = 'block';
  document.getElementById('resetButton').style.display = 'block';
  document.getElementById('backToStartButton').style.display = 'block';

  currentPlayer = 'X';
  gameActive = true;

  // Update the current player UI
  document.getElementById('currentPlayer').innerText = `Current Player: ${playerXName}`;

  // Create the game board
  createBoard();
}

// Function to handle cell clicks
function handleCellClick(index) {
  if (!gameActive || board[index] !== '') {
    return;
  }

  // Update board and UI
  board[index] = currentPlayer;
  const cellElement = document.getElementById(`cell${index}`);
  cellElement.innerText = currentPlayer;

  // Check for a winner
  if (checkWinner()) {
    alert(`${currentPlayer} wins!`);
    gameActive = false;
    // Add animation to winning cells
    highlightWinningCells();
    return;
  }

  // Check for a tie
  if (isBoardFull()) {
    alert('It\'s a tie!');
    gameActive = false;
    return;
  }

  // Switch player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('currentPlayer').innerText = `Current Player: ${currentPlayer}`;
}

// Function to reset the game
function resetGame() {
  // Reset game state
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  // Clear the cell styles and remove animation class
  for (let i = 0; i < 9; i++) {
    const cellElement = document.getElementById(`cell${i}`);
    cellElement.innerText = '';
    cellElement.style.backgroundColor = '';
    cellElement.classList.remove('win-animation');
  }

  // Reset player names to empty strings
  document.getElementById('playerX').value = '';
  document.getElementById('playerO').value = '';

  // Update the current player UI
  document.getElementById('currentPlayer').innerText = `Current Player: ${currentPlayer}`;
}


function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

// Function to highlight winning cells with animation
function highlightWinningCells() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      // Add animation class to winning cells
      document.getElementById(`cell${a}`).classList.add('win-animation');
      document.getElementById(`cell${b}`).classList.add('win-animation');
      document.getElementById(`cell${c}`).classList.add('win-animation');
      return;
    }
  }
}

// Function to check if the board is full (tie)
function isBoardFull() {
  return board.every(cell => cell !== '');
}

// Function to go back to the start
function backToStart() {
  document.getElementById('playerNames').style.display = 'flex';
  document.getElementById('board').style.display = 'none';
  document.getElementById('currentPlayer').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('backToStartButton').style.display = 'none';
  currentPlayer = 'X'; // Reset current player to 'X'
}