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

function isGameWinner(userScore, computerScore) {
  if (userScore === computerScore) {
    console.log('We have a draw!');
    console.log(`FINAL SCORE: ${userScore} - ${computerScore}`);
  } else if (userScore > computerScore) {
    console.log(`User wins the game!`);
    console.log(`FINAL SCORE: ${userScore} - ${computerScore}`);
  } else {
    console.log(`Computer wins the game!`);
    console.log(`FINAL SCORE: ${computerScore} - ${userScore} `);
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let userSelection = '';
  let computerSelection = '';

  function playRound(userChoice, computerChoice) {
    console.log('USER: ', userSelection);
    console.log('COMPUTER: ', computerSelection);
    console.log(isRoundWinner(userSelection, computerSelection));
  }

  function isRoundWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return `Draw! ${userChoice} and ${computerChoice} are the same!`;
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      userScore++;
      return `User wins! ${userChoice} beats ${computerChoice}!`;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      userScore++;
      return `User wins! ${userChoice} beats ${computerChoice}!`;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      userScore++;
      return `User wins! ${userChoice} beats ${computerChoice}!`;
    } else {
      computerScore++;
      return `Computer wins! ${computerChoice} beats ${userChoice}!`;
    }
  }

  let roundCount = 1;

  while (roundCount < 6) {
    userSelection = getUserChoice();
    computerSelection = getComputerChoice();
    console.log('ROUND: ', roundCount);
    console.log(`USER SCORE: ${userScore} - COMPUTER SCORE: ${computerScore}`);
    playRound(userSelection, computerSelection);
    roundCount++;
  }

  console.log('---------------');
  console.log('   GAME OVER');
  console.log('---------------');
  isGameWinner(userScore, computerScore);
}

playGame();
