const playerXClass = 'x';
const playerOClass = 'circle';
//elements of this class are designed in css
//x and o characters
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //row wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //col wins
    [0, 4, 8],
    [2, 4, 6]
    //diagonal wins
];
//all combinations for winning the game. The numbers are indexes of the game board
//will help us determine if the game is over or not, by checking if any of the combinations match the current gameplay
const cellElements = document.querySelectorAll('[data-cell]');
//selects all elements in the document that have a data-cell attribute, regardless of its value.
const boardElement = document.getElementById('Gameboard');
const winningMessage = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
let winningMessageText = document.getElementById('winningMessageText');
let isItTurn_O = false;
// x player gets the first turn

startGame();
restartButton.addEventListener('click', startGame);
//when user clicks on restart button activate the start game function

function startGame() {
    isItTurn_O = false;
    //resetting -  x player gets the first turn
    cellElements.forEach(cell => {
        cell.classList.remove(playerXClass);
        cell.classList.remove(playerOClass);
        //cleaning up the board from X and O characters
        cell.classList.add('hoverable');
        //makes all cells able to have hover affect;
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, { once: true });
        cell.style.cursor = 'pointer'; // Removes the cursor pointer
        // trigger the events which may happen on our board, which are the mouse clicks.
    });
    setBoardHoverClass();
    winningMessage.classList.remove('show');
    //remove winning message
};

function handleCellClick(e) {
    //handle the mouse click events for the cells in the board
    const cell = e.target;
    //current cell that was clicked
    const currentClass = isItTurn_O ? playerOClass : playerXClass;
    //currentClass will be set to playerOClass if its O'S turn and to playerXClass if it's not
    //(saves the character whose turn it is at the moment) 
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        //check if current player won 
        endGame(false);
    } else if (isDraw()) {
        //if there isn't a win check for tie
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
};

function endGame(tie) {
    //function ends the game, present a tie/ winning message
    if (tie) { //if there is a tie
        winningMessage.innerText = "It's a tie!";
    }
    else {
        winningMessage.innerText = `Player ${isItTurn_O ? "O" : "X"} won!`;
        //appropriate winning message for the player that it's their turn
    }
    winningMessage.classList.add('show');
    cellElements.forEach(cell => {
        cell.removeEventListener('click', handleCellClick, { once: true });
        cell.classList.remove('hoverable');
        cell.style.cursor = 'auto'; // Removes the cursor pointer
    });
    //cllicking on cells/ hovering over them  will no longer trigger responsw
};

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(playerXClass) || cell.classList.contains(playerOClass);
    });
    //returns true if there's a tie and false otherwise (if all slots on the board are filled)
};

function placeMark(cell, currentClass) {
    //currentClass is X or O depending on who's turn it is
    //placing X or O in the cell that was clicked
    cell.classList.add(currentClass);
};

function swapTurns() {
    //swaps turns between the X and O player
    isItTurn_O = !isItTurn_O;
};

function setBoardHoverClass() {
    //'X' or 'O' character will appear in the cells while hovering over them before placing them
    boardElement.classList.remove(playerXClass);
    boardElement.classList.remove(playerOClass);
    if (isItTurn_O) {
        boardElement.classList.add(playerOClass);
    } else {
        boardElement.classList.add(playerXClass);
    }
};

function checkWin(currentClass) {
    //checks for a win in current board to current player
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
            //returns true if our current board matches any of the winning combinations and false otherwise
        });
    });
};
