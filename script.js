// Generate a random number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM elements
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const restartButton = document.getElementById('restart');
const message = document.getElementById('message');

// Function to handle submit action
function handleSubmit() {
    // Get the user's guess
    const userGuess = parseInt(guessInput.value);

    // Validate the user's guess
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    // Increment attempts
    attempts++;

    // Check if the guess is correct
    if (userGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        submitButton.style.display = 'none'; // Hide submit button
        restartButton.style.display = 'inline-block'; // Show restart button
    } else if (userGuess < targetNumber) {
        message.textContent = 'Try a higher number.';
    } else {
        message.textContent = 'Try a lower number.';
    }

    // Clear input after submission
    guessInput.value = '';
}

// Event listener for the Enter key press on input field
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSubmit();
    }
});

// Event listener for the submit button click
submitButton.addEventListener('click', handleSubmit);

// Event listener for the restart button click
restartButton.addEventListener('click', function() {
    // Reset game variables
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    // Clear message and input
    message.textContent = '';
    guessInput.value = '';

    // Show submit button and hide restart button
    submitButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
});
