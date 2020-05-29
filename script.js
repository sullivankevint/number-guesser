let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}
// function checks if human guess is equal or closer than computer guess. Returns true if human is closer
function compareGuesses(human, computer, target) {
    if (Math.abs(human - target) < Math.abs(computer - target)) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    winner === 'human' ? humanScore++ : computerScore++;
}
function advanceRound() {
    currentRoundNumber++;
}
