const { prompt, invalidNumber, getNumberInput } = require('../helpers');
const readline = require('readline-sync');
const MESSAGES = require('./calculator_msgs.json');


function getOperationInput() {
  prompt("What operation would you like to perform?");
  let operation = readline.question("Operation (+, -, *, /): ");
  while (!['+', '-', '*', '/'].includes(operation)) {
    prompt(MESSAGES.en.invalid_operator);
    operation = readline.question("Operation (+, -, *, /): ");
  }
  return operation;
}

function performCalculation(firstNumber, secondNumber, operation) {
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
  console.log(`The result is: ${result}`);
}

function calculate() {
  let firstNumber = getNumberInput(
    "What's the first number?", "First number: "
  );
  let secondNumber = getNumberInput(
    "What's the second number?", "Second number: "
  );
  // Ask the user for an operation to perform.
  let operation = getOperationInput();
  // validate that the input is a valid operation
  while (!['+', '-', '*', '/'].includes(operation)) {
    prompt(MESSAGES.en.invalid_operator);
    operation = readline.question("Operation (+, -, *, /): ");
  }
  // Perform the operation on the two numbers.
  return performCalculation(firstNumber, secondNumber, operation);
}

prompt(MESSAGES.en.welcome);
calculate();

prompt(MESSAGES.en.another_calculation);
let answer = readline.question("Answer: ");
while (answer.toLowerCase() === 'y') {
  calculate();
  prompt(MESSAGES.en.another_calculation);
  answer = readline.question("Answer: ");
}