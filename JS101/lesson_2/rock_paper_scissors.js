const readline = require("readline-sync");
const VALID_CHOICES = {
  r: "rock",
  p: "paper",
  s: "scissors",
  l: "lizard",
  k: "spock"
};

const WINNINGCOMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"]
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(playerChoice, computerChoice) {

  if (WINNINGCOMBOS[playerChoice].includes(computerChoice)) {
    prompt("You win!");
  } else if (WINNINGCOMBOS[computerChoice].includes(playerChoice)) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie");
  }
}

while (true) {
  prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES[choice]) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  let playerChoice = VALID_CHOICES[choice];

  let randomIndex = Math.floor(
    Math.random() * Object.keys(VALID_CHOICES).length
  );
  let computerChoice = VALID_CHOICES[Object.keys(VALID_CHOICES)[randomIndex]];

  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  displayWinner(playerChoice, computerChoice);

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") return;
}