let p1Button = document.getElementById('p1Button');
p2Button = document.getElementById('p2Button');
//saving the two buttons

let resetButton = document.getElementById('reset');
//saving reset button 

let p1Score = 0;
let p2Score = 0;
//scores of two players resetted to 0

let winningScore = 3;
//if player gets to this score they win

let p1Display = document.getElementById('p1Display');
let p2Display = document.getElementById('p2Display');
//displays of two scores in h1

let playUpTo = document.getElementById('upToSelect');
//saving score which game is played up to

let isGameOver = false;
//did one of the players get to the winning score 

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        //if still playing (no one won yet)
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            //if player won the game is over
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            //bulma color classes
            p1Button.disabled = true;
            p2Button.disabled = true;
            //after game is over it is no longer possible to press the add score buttons until reset
        }
        p1Display.textContent = p1Score;
        //when score is updated the display in the h1 should be updated as well
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        //if still playing (no one won yet)
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            //if player won the game is over
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            //bulma color classes
            p1Button.disabled = true;
            p2Button.disabled = true;
            //after game is over it is no longer possible to press the add score buttons until reset
        }
        p2Display.textContent = p2Score
        //when score is updated the display in the h1 should be updated as well
    }
});

resetButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetSelect);

function resetSelect() {
    //after game is over reset the select element & winning score to default "3"
    playUpTo.value = 3;
    winningScore = 3;
};

function resetGame() {
    //resetting when user selects different winning number/ when reset button is pressed
    isGameOver = false;
    //resetting game over to not over (just starting)
    p1Score = 0;
    p2Score = 0;
    //scores are zeroed out
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    //displays are zeroed out
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    //bulma color classes
    p1Button.disabled = false;
    p2Button.disabled = false;
    //game is resseted and it is now possible to press the add score buttons
};

playUpTo.addEventListener('change', function () {
    //when user switches up the number the game is played up to
    winningScore = parseInt(this.value);
    //this - playUpTo
    //winning score will be what the user selected from the select element 
    resetGame();
    //game will be resetted
})
