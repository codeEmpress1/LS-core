const readline = require('readline-sync');
const { prompt, invalidNumber } = require('../helpers');

prompt("Welcome to the Loan Calculator!");

function getLoanAmount() {
  let loanAmount = readline.question("Please enter the loan amount: ");
  while (invalidNumber(loanAmount) || Number(loanAmount) <= 0) {
    prompt("Invalid loan amount. Please enter a valid number greater than 0.");
    loanAmount = readline.question("Loan amount: ");
  }
  return Number(loanAmount);
}

function getLoanDuration() {
  prompt("Please enter the loan duration in years,months format (e.g 5,0 for 5 years, 3,2 for 3 years and 2 months): ");
  let loanDuration = readline.question("Loan duration: ");
  while (!/^\d+,\d+$/.test(loanDuration)) {
    prompt("Invalid input. Please enter the loan duration in years,months format (e.g 5,0 for 5 years, 3,2 for 3 years and 2 months): ");
    loanDuration = readline.question("Loan duration: ");
  }
  const [years, months] = loanDuration.split(',').map(Number);
  if (years <= 0 && months <= 0) {
    prompt("Invalid input. Please enter a valid loan duration (either years or months must be greater than 0).");
    return getLoanDuration();
  }
  return (years * 12) + months;
}

function getAPR() {
  let apr = readline.question("Please enter the APR (as a percentage e'g 5 for 5%): ");
  while (invalidNumber(apr) || Number(apr) < 0) {
    prompt("Invalid input. Please enter a valid APR (as a percentage e.g 5 for 5%, 0 for 0%): ");
    apr = readline.question("APR: ");
  }
  return Number(apr);
}

function calculateLoan () {
  const loanAmount = getLoanAmount();
  const apr = getAPR();
  const loanDurationMonths = getLoanDuration();
  if (apr === 0) {
    const monthlyPayment = loanAmount / loanDurationMonths;
    prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
    return;
  }
  const monthlyInterestRate = (apr / 100) / 12;

  const monthlyPayment = loanAmount * (
    monthlyInterestRate / (1 - Math.pow(
      (1 + monthlyInterestRate),
      (-loanDurationMonths)
    ))
  );

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
}

while (true) {
  calculateLoan();
  prompt("Do you want to perform another calculation? (y/n)");
  let answer = readline.question("Answer: ");
  if (answer.toLowerCase() !== 'y') break;
}
