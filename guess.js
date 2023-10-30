let chances = 5;
let guesses = 0;

while (guesses < 3) {
  let randomNumber = Math.floor(Math.random() * 16) + 1;

  
  while (chances > 0) {
    let userPrompt = prompt(`Guess the number (between 1 and 16). Chances left: ${chances}`);
    let userGuess = parseInt(userPrompt);

    if (userGuess === randomNumber) {
      console.log("Congratulations! Your guess is correct.");
      break;
    } else if (randomNumber < 8 && userGuess > 8) {
      console.log("Hint: The number is smaller than 8.");
      
    } else if (randomNumber > 8 && userGuess < 8) {
      console.log("Hint: The number is greater than 8.");

    }

    chances--;

    if (chances === 0) {
      console.log("Sorry, you've run out of chances.");
      break;
    }
  }

  //chances = 5; 
  guesses++;

  if (guesses === 3) {
    console.log("You've completed three rounds. Game over.");
    break;
  }
}
