const readline = require('readline-sync');
const MESSAGES = require('./calculator_msgs.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculate() {
    // Ask the user for the first number.
  prompt("What's the first number?");
  let firstNumber = readline.question("First number: ");
  // validate that the input is a number
  while (invalidNumber(firstNumber)) {
    prompt("Hmm... that doesn't look like a valid number.");
    firstNumber = readline.question("First number: ");
  }
  // Ask the user for the second number.
  prompt("What's the second number?");
  let secondNumber = readline.question("Second number: ");
  // validate that the input is a number
  while (invalidNumber(secondNumber)) {
    prompt("Hmm... that doesn't look like a valid number.");
    secondNumber = readline.question("Second number: ");
  }
  // Ask the user for an operation to perform.
  prompt("What operation would you like to perform?");
  let operation = readline.question("Operation (+, -, *, /): ");
  // validate that the input is a valid operation
  while (!['+', '-', '*', '/'].includes(operation)) {
    prompt("Must choose one of the following operations: +, -, *, / ");
    operation = readline.question("Operation (+, -, *, /): ");
  }
  // Perform the operation on the two numbers.
  let result;
  switch (operation) {
    case "+":
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case "*":
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case "/":
      result = Number(firstNumber) / Number(secondNumber);
      break;
    default:
      console.log("Invalid operation.");
      return;
  }
  // Print the result to the terminal.
  console.log(`The result is: ${result}`);
}

prompt(MESSAGES.en.welcome);
calculate();

console.log(prompt(MESSAGES.en.another_calculation));
let answer = readline.question("Answer: ");
while (answer.toLowerCase() === 'y') {
  calculate();
  console.log(prompt(MESSAGES.en.another_calculation));
  answer = readline.question("Answer: ");
}