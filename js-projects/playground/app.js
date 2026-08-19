// Functions

function add7(num) {
  return num + 7;
}

let add7Sum = add7(10);

console.log(add7Sum);

function multiply(num1, num2) {
  return num1 * num2;
}

let product = multiply(2, 3);

console.log(product);

function capitalize(string) {
  let result = string.toLowerCase();

  return result.charAt(0).toUpperCase() + result.slice(1);
}

let word = 'JaVaScRiPt';

console.log(capitalize(word));

function lastLetter(string) {
  return string.charAt(string.length - 1);
}

console.log(lastLetter(word));

// FizzBuzz
// Get user input of which number they want to FizzBuzz up to
// Starting at 1, loop up to and including the user input number
// if a number is divisible by 3 with no remainder, print "Fizz"
// if a number is divisible by 5 with no remainder, print "Buzz"
// if a number is divisible by 3 and 5 with no remainder, print "FizzBuzz"
// Otherwise, print the current number

function getUserInput() {
  let userInput = parseInt(prompt('Please enter a number greater than 1: '));

  return userInput;
}

function isFizz(n) {
  return n % 3 === 0;
}

function isBuzz(n) {
  return n % 5 === 0;
}

function isFizzBuzz(n) {
  return n % 3 === 0 && n % 5 === 0;
}

function fizzBuzz(userInput) {
  userInput = getUserInput();

  for (let i = 1; i <= userInput; i++) {
    if (isFizzBuzz(i)) {
      console.log('FizzBuzz');
    } else if (isBuzz(i)) {
      console.log('Buzz');
    } else if (isFizz(i)) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
