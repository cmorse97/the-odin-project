// function getUserChoice() {
//   let userChoice = prompt(
//     'Please choose: Rock, Paper, or Scissors ',
//   ).toLowerCase();

//   return userChoice;
// }

function getComputerSelection() {
  let selection = Math.floor(Math.random() * 3) + 1;

  if (selection === 1) {
    return 'rock';
  } else if (selection === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// function isGameWinner(userScore, computerScore) {
//   if (userScore === computerScore) {
//     console.log('We have a draw!');
//     console.log(`FINAL SCORE: ${userScore} - ${computerScore}`);
//   } else if (userScore > computerScore) {
//     console.log(`User wins the game!`);
//     console.log(`FINAL SCORE: ${userScore} - ${computerScore}`);
//   } else {
//     console.log(`Computer wins the game!`);
//     console.log(`FINAL SCORE: ${computerScore} - ${userScore} `);
//   }
// }

//   let userScore = 0;
//   let computerScore = 0;
//   let userSelection = getUserChoice();

function playRound(userSelection, computerSelection) {
  displayRoundSelections(userSelection, computerSelection);
  isRoundWinner(userSelection, computerSelection);
}

function isRoundWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    displayRoundResult(userChoice, computerChoice);
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    displayRoundResult(userChoice, computerChoice);
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    displayRoundResult(userChoice, computerChoice);
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    displayRoundResult(userChoice, computerChoice);
  } else {
    displayRoundResult(computerChoice, userChoice);
  }
}

// isGameWinner(userScore, computerScore);
const userSelectionBtns = document.querySelectorAll('button');

userSelectionBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (roundSelections && roundSelections.hasChildNodes()) {
      roundSelections.replaceChildren();
    }
    if (roundResult && roundResult.hasChildNodes()) {
      roundResult.replaceChildren();
    }
    let userSelection = btn.id;
    let computerSelection = getComputerSelection();
    playRound(userSelection, computerSelection);
  });
});

const roundSelections = document.querySelector('#round-selections');
const roundResult = document.querySelector('#round-result');

function displayRoundResult(winnerSelection, loserSelection) {
  const para = document.createElement('p');
  para.textContent =
    winnerSelection !== loserSelection
      ? `${winnerSelection} beats ${loserSelection}`
      : `It's a draw! ${winnerSelection} and ${loserSelection} are the same.`;
  roundResult.appendChild(para);
}

function displayRoundSelections(userSelection, computerSelection) {
  const para = document.createElement('p');
  para.textContent = `User selects ${userSelection} and Computer selects ${computerSelection}`;
  roundSelections.appendChild(para);
}
