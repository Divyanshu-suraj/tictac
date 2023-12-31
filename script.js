let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(cellIndex) {
    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        document.getElementById('board').children[cellIndex].textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('message').textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function restartGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').textContent = "Player X's turn";
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}
