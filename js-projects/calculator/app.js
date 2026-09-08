// Calculator
console.log('Hello, World!');

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

let firstOperand = 10;
let secondOperand = 5;
let operator = divide;

function operate(operation, operand1, operand2) {
  let result = operation(operand1, operand2);

  console.log(result);
  return result;
}

operate(operator, firstOperand, secondOperand);
