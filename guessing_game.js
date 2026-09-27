const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

async function playGame() {
  const number = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  const terminal = readline.createInterface({ input: stdin, output: stdout });

  console.log("I picked a number between 1 and 100.");

  try {
    while (true) {
      const answer = await terminal.question("Your guess: ");
      const guess = Number(answer.trim());

      if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        console.log("Please enter a whole number between 1 and 100.");
        continue;
      }

      attempts += 1;

      if (guess < number) {
        console.log("Too low. Try again.");
      } else if (guess > number) {
        console.log("Too high. Try again.");
      } else {
        console.log(`Correct! You guessed the number in ${attempts} attempts.`);
        break;
      }
    }
  } finally {
    terminal.close();
  }
}

playGame();