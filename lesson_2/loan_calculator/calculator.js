const readline = require('readline-sync');
const { prompt, getNumberInput } = require('../helpers');

prompt("Welcome to the Loan Calculator!");

function calculateLoan () {
  const loanAmount = Number(getNumberInput(
    "Please enter the loan amount.", "Loan amount: "
  ));
  const apr = Number(getNumberInput(
    "Please enter the APR (as a percentage e'g 5 for 5%): ", "APR: "
  ));
  const loanDurationYears = readline.question("Please enter the loan duration in years,months format (e.g 5,0 for 5 years, 3,2 for 3 years and 2 months): ");
  const [years, months] = loanDurationYears.split(',').map(Number);
  const loanDurationMonths = (years * 12) + months;
  if (apr === 0) {
    const monthlyPayment = loanAmount / loanDurationMonths;
    prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
    return;
  }
  const monthlyInterestRate = (apr / 100) / 12;
    
  const monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
}
calculateLoan();

prompt("Do you want to perform another calculation? (y/n)");
let answer = readline.question("Answer: ");
while (answer.toLowerCase() === 'y') {
  calculateLoan();
  prompt("Do you want to perform another calculation? (y/n)");
  answer = readline.question("Answer: ");
}
