// Define player objects with score, button, and display elements
let player1 = {
  score: 0,
  button: document.querySelector("#buttonOne"),
  display: document.querySelector("#scoreOne"),
};

let player2 = {
  score: 0,
  button: document.querySelector("#buttonTwo"),
  display: document.querySelector("#scoreTwo"),
};

// Function to trigger fireworks animation when a player wins
function launchFireworks() {
  const duration = 5 * 1000; // Fireworks last for 5 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
    });
  }, 250);
}

// Get references to elements
let players = document.querySelector("#players"); // Dropdown for selecting score limit
let reset = document.querySelector("#reset"); // Reset button
let limit = 5; // Default winning score

// Event listener to update score limit when user selects a new value
players.addEventListener("input", function () {
  limit = players.value;
  resetFunc(); // Reset game when score limit changes
});

// Function to handle game end logic
let endGame = (player, opponent) => {
  player.button.disabled = true;
  opponent.button.disabled = true;

  // Highlight winner and opponent
  player.display.classList.toggle("has-text-primary");
  opponent.display.classList.toggle("has-text-danger");

  launchFireworks(); // Trigger celebration animation
};

// Function to update scores and check for win conditions
let updateScore = (player, opponent) => {
  player.display.innerText = ++player.score;
  let winningScore = parseInt(players.value); // Get selected score limit

  // Check if the player meets the winning condition (win by 2 rule)
  if (player.score >= winningScore && player.score - opponent.score >= 2) {
    endGame(player, opponent);
  }
};

// Event listeners for score buttons
player1.button.addEventListener("click", function () {
  updateScore(player1, player2);
});

player2.button.addEventListener("click", function () {
  updateScore(player2, player1);
});

// Keyboard shortcuts for controlling the game
document.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key === "a" || key === "A") {
    updateScore(player1, player2); // Player 1 scores
  } else if (key === "l" || key === "L") {
    updateScore(player2, player1); // Player 2 scores
  } else if (key === "x" || key === "X") {
    resetFunc(); // Reset game
  }
});

// Reset function to restart the game
let resetFunc = () => {
  for (let player of [player1, player2]) {
    player.display.innerText = 0;
    player.score = 0;
    player.display.classList.remove("has-text-primary", "has-text-danger");
    player.button.disabled = false;
  }
};

// Event listener for reset button
reset.addEventListener("click", resetFunc);
