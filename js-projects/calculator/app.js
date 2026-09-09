// Operation Variables
let firstOperand = null;
let secondOperand = null;
let operator = null;

// HTML Elements
let display = document.getElementById('text-display');
let clearBtn = document.getElementById('clear');
let equalsBtn = document.getElementById('equals');
let divideBtn = document.getElementById('divide');
let multiplyBtn = document.getElementById('multiply');
let subtractBtn = document.getElementById('subtract');
let addBtn = document.getElementById('add');
let digitBtns = document.querySelectorAll('.digit');

// Event Listeners
clearBtn.addEventListener('click', handleClear);
// equalsBtn.addEventListener('click', handleClick);
divideBtn.addEventListener('click', handleOperator);
multiplyBtn.addEventListener('click', handleOperator);
subtractBtn.addEventListener('click', handleOperator);
addBtn.addEventListener('click', handleOperator);
digitBtns.forEach((btn) => btn.addEventListener('click', handleDigitClick));

// Handler Functions
function handleDigitClick(e) {
  handleDisplay(e.target.value);
}

function handleDisplay(value) {
  if (display.innerHTML === '0') {
    display.innerHTML = value;
  } else {
    display.innerHTML += value;
  }
}

function handleClear() {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  display.innerHTML = '0';
}

function handleEquals(e) {
  // Do something...
}

function handleOperator(e) {
  firstOperand = parseInt(display.innerHTML);
  operator = operatorSelector(e.target.value);
  display.innerHTML += e.target.value;
  console.log(firstOperand);
  console.log(operator);
}

function operatorSelector(operation) {
  switch (operation) {
    case '/':
      return divide;
    case 'X':
      return multiply;
    case '-':
      return subtract;
    case '+':
      return add;
  }
}

// Basic operations
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operation, operand1, operand2) {
  let result = operation(operand1, operand2);

  return result;
}

// Create a function that updates the firstOperand variable when a user clicks the digit buttons on the calculator page. The calculator display should also update to reflect the input of the user
