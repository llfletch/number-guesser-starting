let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, secretTargetNum) => {
    let diffComputer = Math.abs(secretTargetNum - computerGuess);
    let diffHuman = Math.abs(secretTargetNum - humanGuess);
    return diffHuman <= diffComputer;
}

const updateScore = (winner) => {
    if (winner === 'human') 
        humanScore++;
    if (winner === 'computer')
        computerScore++;
}

const advanceRound = () => currentRoundNumber++;

/* --- assertions ---

let num = generateTarget();
console.log(num >= 0 && num <= 9);
num = generateTarget();
console.log(num >= 0 && num <= 9);
num = generateTarget();
console.log(num >= 0 && num <= 9);
num = generateTarget();
console.log(num >= 0 && num <= 9);

console.log(compareGuesses(5, 5, 5) === true);
console.log(compareGuesses(6, 5, 5) === false);
console.log(compareGuesses(5, 6, 5) === true);

const humanScoreBefore = humanScore;
updateScore('human');
console.log(humanScoreBefore + 1 === humanScore);

const computerScoreBefore = computerScore;
updateScore('computer');
console.log(computerScoreBefore + 1 === computerScore);

const oldRoundNum = currentRoundNumber;
advanceRound();
console.log(oldRoundNum + 1 === currentRoundNumber);
*/