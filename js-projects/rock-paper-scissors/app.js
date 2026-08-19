console.log('Hello, World!');

// GET userChoice and STORE it in 'userSelection'
// GET cpuChoice and STORE it in 'cpuSelection'
// INIT userScore to 0
// INIT cpuScore to 0
// CREATE a FUNCTION to play a round
// COMPARE userSelection to cpuSelection to determine winner or draw
// IF winner, THEN update score of winner by 1
// ELSE play another round
// WHEN userScore or cpuScore === 5, the game is over and winner is declared
// REPEAT playRound, UNTIL winner is declared

function getUserChoice() {
  let userChoice = prompt(
    'Please choose: Rock, Paper, or Scissors ',
  ).toLowerCase();

  return userChoice;
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    return 'rock';
  } else if (computerChoice === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

let userSelection = getUserChoice();
let computerSelection = getComputerChoice();

console.log(userSelection);
console.log(computerSelection);
