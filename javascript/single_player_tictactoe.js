let board = Array(9).fill(null); // Game board
let player = 'X'; // Current player
const reset_button = document.querySelector('.game--restart');
reset_button.addEventListener('click', function(){
    // Reset the game board
    board = Array(9).fill(null);
    
    // Reset the visual game board
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
    
    // Reset the current player
    player = 'X';
});

// Add click event listeners to cells
document.querySelectorAll('.cell').forEach((cell, i) => {
    cell.addEventListener('click', () => {
        if (!board[i] && !checkWin(board)) {
            board[i] = player;
            cell.textContent = player;
            player = player === 'X' ? 'O' : 'X';
            if (player === 'O') {
                makeComputerMove();
            }
        }
    });
});

// Make a move for the computer
function makeComputerMove() {
    let i = Math.floor(Math.random() * 9);
    while (board[i]) {
        i = Math.floor(Math.random() * 9);
    }
    board[i] = player;
    document.querySelector(`[data-cell-index="${i}"]`).textContent = player;
    player = player === 'X' ? 'O' : 'X';
}

// Check if the game is won
function checkWin(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let line of lines) {
        if (board[line[0]] && board[line[0]] === board[line[1]] && board[line[0]] === board[line[2]]) {
            return true;
            console.log("computer won");
        }
    }
    return false;
}

