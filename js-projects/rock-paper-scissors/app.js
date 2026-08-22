const userSelectionBtns = document.querySelector(
  '#user-selection-btns',
).children;
const selectionDiv = document.querySelector('#user-selection-btns');
const userScoreBug = document.querySelector('#user-score');
const computerScoreBug = document.querySelector('#computer-score');
const roundSelections = document.querySelector('#round-selections');
const roundResult = document.querySelector('#round-result');
const startGameBtn = document.querySelector('#start-game-btn');
const restartGameBtn = document.querySelector('#restart-game-btn');
let userScore = 0;
let computerScore = 0;

startGameBtn.addEventListener('click', startGame);
restartGameBtn.addEventListener('click', restartGame);

for (const btn of userSelectionBtns) {
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
}

function startGame() {
  userScore = 0;
  computerScore = 0;
  userScoreBug.textContent = `${userScore}`;
  computerScoreBug.textContent = `${computerScore}`;
  startGameBtn.classList.add('hidden');
  selectionDiv.classList.remove('hidden');
}

function restartGame() {
  userScore = 0;
  computerScore = 0;
  userScoreBug.textContent = `${userScore}`;
  computerScoreBug.textContent = `${computerScore}`;
  roundResult.textContent = '';
  restartGameBtn.classList.add('hidden');
  selectionDiv.classList.remove('hidden');
}

function displayRoundResult(winnerSelection, loserSelection) {
  const para = document.createElement('p');
  para.textContent =
    winnerSelection !== loserSelection
      ? `${winnerSelection.toUpperCase()} beats ${loserSelection.toUpperCase()}`
      : `It's a draw! ${winnerSelection.toUpperCase()} and ${loserSelection.toUpperCase()} are the same.`;
  roundResult.appendChild(para);
}

function displayRoundSelections(userSelection, computerSelection) {
  const para = document.createElement('p');
  para.textContent = `User selects ${userSelection} and Computer selects ${computerSelection}`;
  roundSelections.appendChild(para);
}

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

function isGameWinner(userScore, computerScore) {
  if (userScore === 5 && computerScore < 5) {
    selectionDiv.classList.add('hidden');
    restartGameBtn.classList.remove('hidden');
    roundResult.replaceChildren();
    roundSelections.replaceChildren();
    const result = `User wins the game!`;
    roundResult.textContent = result;
  } else if (computerScore === 5 && userScore < 5) {
    selectionDiv.classList.add('hidden');
    restartGameBtn.classList.remove('hidden');
    roundResult.replaceChildren();
    roundSelections.replaceChildren();
    const result = 'Computer wins the game!';
    roundResult.textContent = result;
  }
}

function playRound(userSelection, computerSelection) {
  displayRoundSelections(userSelection, computerSelection);
  isRoundWinner(userSelection, computerSelection);
  isGameWinner(userScore, computerScore);
}

function isRoundWinner(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    displayRoundResult(userSelection, computerSelection);
  } else if (userSelection === 'rock' && computerSelection === 'scissors') {
    displayRoundResult(userSelection, computerSelection);
    userScore++;
    userScoreBug.textContent = `${userScore}`;
  } else if (userSelection === 'scissors' && computerSelection === 'paper') {
    displayRoundResult(userSelection, computerSelection);
    userScore++;
    userScoreBug.textContent = `${userScore}`;
  } else if (userSelection === 'paper' && computerSelection === 'rock') {
    displayRoundResult(userSelection, computerSelection);
    userScore++;
    userScoreBug.textContent = `${userScore}`;
  } else {
    displayRoundResult(computerSelection, userSelection);
    computerScore++;
    computerScoreBug.textContent = `${computerScore}`;
  }
}
