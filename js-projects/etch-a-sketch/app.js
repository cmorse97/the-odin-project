// Etch-A-Sketch
// Create a square div inside of the 'container' div that has a solid border
// Add an event listener that changes the background color of the square when the mouse hovers over it in the browser

const container = document.querySelector('#container');
const square = document.createElement('div');
// const createGridBtn = document.querySelector('#create-grid-btn');

square.classList.add('square');
container.appendChild(square);

square.addEventListener('mouseover', () => {
  square.classList.add('filled-square');
});

square.addEventListener('mouseleave', () => {
  setTimeout(() => {
    square.classList.remove('filled-square');
  }, 1000);
});

// createGridBtn.addEventListener('click', createGridOfSquares);

// function createGridOfSquares(num) {
//   createGridBtn.classList.add('hidden');
//   let grid = num * num;
//   for (let i = 1; i <= grid; i++) {
//     container.appendChild(square);
//   }
// }
