
const readlineSync = require("readline-sync");

// Function to generate a random 4-digit number with unique digits
function generateSecretNumber() {
  let secretNumber = '';
  while (secretNumber.length < 4) {
    const digit = Math.floor(Math.random() * 10);
    if (!secretNumber.includes(digit)) {
      secretNumber += digit;
    }

  }
  console.log(secretNumber)
  return secretNumber;
}

// Function to check if a guess is valid
function isValidGuess(guess) {
  if (!guess) {
    console.log('Please enter a guess.');
    return false;
  }
  if (guess.length !== 4) {
    console.log('Your guess must be a 4-digit number.');
    return false;
  }
  if (new Set(guess).size !== 4) {
    console.log('Each digit in your guess must be unique.');
    return false;
  }
  return true;}


  // Function to compare the secret number and a guess and return the number of bulls and cows
function compare(secretNumber, guess) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < secretNumber.length; i++) {
      if (secretNumber[i] === guess[i]) {
        bulls++;
      } else if (secretNumber.includes(guess[i])) {
        cows++;
      }
    }
    return [bulls, cows];
  }
  
  // Start the game
  console.log('Welcome to Bulls and Cows!');
  console.log('I have generated a secret 4-digit number with unique digits.');
  console.log('Let\'s see if you can guess it!');

  const secretNumber = generateSecretNumber();

let numGuesses = 0;
let guess = '';

while (guess !== secretNumber) {
  guess = readlineSync.question('Enter your guess: ');
  if (!isValidGuess(guess)) {
    continue;
  }
  numGuesses++;
  const [bulls, cows] = compare(secretNumber, guess);
  if (bulls == 4) {
    console.log(`Congratulations! You guessed the secret number in ${numGuesses} guesses.`);
    break;
  } else {
    console.log(`${bulls} bulls and ${cows} cows.`);
  }
}
