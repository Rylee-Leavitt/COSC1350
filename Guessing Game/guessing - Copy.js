"use strict";
/*    
      COSC1350
      Guessing Game

      Author: Rylee Leavitt
      Date:   12/9/24

      Filename: Guessing.js
*/

//variables
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random whole number between 1 and 100

let guesses = []; // Declare a variable named guesses and initialize it as an empty array
// The array will store the player's guesses during the game, allowing the game to keep track of all previous guesses

let maxGuesses = 10; // Sets the max amount of guesses the player can make

document.getElementById('submitGuess').addEventListener('click', function() { 
    let userGuess = parseInt(document.getElementById('numberGuess').value); 
    // Declares a variable named userGuess that will be used to store the user's input
    // document.getElementById('guess').value accesses the value of the input element with the ID 'guess'
    // parseInt converts the string value obtained from the input field into an integer

    guesses.push(userGuess); // Add the current guess made by the player to the end of the array guesses

    let resultMessage = document.getElementById('resultMessage'); // Gets the element by the ID result message
    let previousGuesses = document.getElementById('previousGuesses'); // Gets the element by the ID previous guesses

    if (userGuess === randomNumber) { // If the user's guess equals the randomly generated number, this code will execute
        resultMessage.textContent = 'Congratulations! You guessed the number!';
        endGame();
    } else if (guesses.length >= maxGuesses) { 
        // If the user's guess does not equal the randomly generated number and the max guesses have been made, this code will execute
        resultMessage.textContent = 'Sorry, you ran out of turns :( The number was ' + randomNumber;
        endGame();
    } else {
        resultMessage.textContent = userGuess > randomNumber ? 'Your guess is too high! Go Lower!' : 'Your guess is too low! Go Higher!';
        //This is a ternary operator, basically an if-else statement. checks whether the userGuess is greater than randomNumber.
    }

    previousGuesses.textContent = 'PreviousGuesses: ' + guesses.join(', '); // Displays the player's previous guesses
});

function endGame() {
    document.getElementById('submitGuess').disabled = true; // Disable the "Submit Guess" button
    document.getElementById('playAgain').style.display = 'block'; // Display the "Play Again" button
}

document.getElementById('playAgain').addEventListener('click', function() { // Allows the game to be reset 
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('previousGuesses').textContent = '';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('playAgain').style.display = 'none';
});
