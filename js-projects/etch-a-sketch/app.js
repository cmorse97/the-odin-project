const container = document.querySelector('#container');
const createGridBtn = document.querySelector('#create-grid-btn');
const clearGridBtn = document.querySelector('#clear-grid-btn');
const randomBtn = document.querySelector('#random-btn');
const squares = container.childNodes;

createGridBtn.addEventListener('click', createGridOfSquares);
clearGridBtn.addEventListener('click', clearGrid);
randomBtn.addEventListener('click', generateRandomImage);

function createGridOfSquares() {
  let userInput = prompt('Enter a number of square per side: Max 100');
  if (userInput === '') {
    userInput = 16;
  }
  createGridBtn.classList.add('hidden');
  clearGridBtn.classList.remove('hidden');
  randomBtn.classList.remove('hidden');
  let grid = userInput * userInput;
  const fragment = document.createDocumentFragment();
  const gridPercentage = 100 / userInput;
  for (let i = 1; i <= grid; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.style.flexBasis = `${gridPercentage}%`;
    square.style.height = `${gridPercentage}%`;

    if (userInput > 50) {
      square.style.borderBlockWidth = '0.5px';
    }

    square.addEventListener('mouseover', () => {
      square.classList.add('filled-square');
    });

    fragment.appendChild(square);
  }
  container.appendChild(fragment);
}

function clearGrid() {
  squares.forEach((square) => {
    square.classList.remove('filled-square');
  });
}

function generateRandomImage() {
  squares.forEach((square) => {
    square.classList.remove('filled-square');
    let randomFill = Math.round(Math.random());
    if (randomFill) {
      square.classList.add('filled-square');
    }
  });
}
