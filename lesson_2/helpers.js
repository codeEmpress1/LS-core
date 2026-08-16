const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumberInput(promptMessage, numberType) {
  prompt(promptMessage);
  let number = readline.question(numberType);
  while (invalidNumber(number)) {
    prompt(MESSAGES.en.invalid_input);
    number = readline.question(numberType);
  }
  return Number(number);
}

module.exports = {
  prompt,
  invalidNumber,
  getNumberInput,
};