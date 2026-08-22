const container = document.querySelector('#container');
const createGridBtn = document.querySelector('#create-grid-btn');
const clearGridBtn = document.querySelector('#clear-grid-btn');
const randomBtn = document.querySelector('#random-btn');
const squares = container.childNodes;

createGridBtn.addEventListener('click', createGridOfSquares);
clearGridBtn.addEventListener('click', clearGrid);
randomBtn.addEventListener('click', generateRandomImage);

function createGridOfSquares() {
  createGridBtn.classList.add('hidden');
  clearGridBtn.classList.remove('hidden');
  randomBtn.classList.remove('hidden');
  let grid = 16 * 16;
  for (let i = 1; i <= grid; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
      square.classList.add('filled-square');
    });

    container.appendChild(square);
  }
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
