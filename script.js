let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const moveLog = document.querySelector("#moveLog");

// Utility to get computer's move
function getComputerMove() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

// Log a move to the moveLog div
function logMove(who, move) {
  const entry = document.createElement("div");
  entry.textContent = `-- ${who} selected ${move.charAt(0).toUpperCase() + move.slice(1)}`;
  moveLog.appendChild(entry);
}

// Log winner of the round
function logRoundWinner(winner) {
  const entry = document.createElement("div");
  if (winner === "player") {
    entry.textContent = "🎉 You won this round!";
  } else if (winner === "computer") {
    entry.textContent = "💻 Computer won this round!";
  } else {
    entry.textContent = "🤝 It's a tie!";
  }
  moveLog.appendChild(entry);
}

// Check and declare match winner
function checkMatchWinner() {
  if (playerScore >= 5) {
    alert("🏆 You won the match!");
  } else if (computerScore >= 5) {
    alert("💻 Computer won the match!");
  }
}

// Update score display
function updateScores() {
  playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  checkMatchWinner();
}

// Game logic per round
function handlePlayerChoice(playerMove) {
  if (playerScore >= 5 || computerScore >= 5) return;

  // 🔁 Clear move log before new round starts
  moveLog.textContent = "";

  const computerMove = getComputerMove();

  logMove("You", playerMove);
  logMove("Computer", computerMove);

  if (playerMove === computerMove) {
    logRoundWinner("tie");
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    playerScore++;
    logRoundWinner("player");
  } else {
    computerScore++;
    logRoundWinner("computer");
  }

  updateScores();
}

// Attach event listeners
document.querySelector("#rock").addEventListener("click", () => handlePlayerChoice("rock"));
document.querySelector("#paper").addEventListener("click", () => handlePlayerChoice("paper"));
document.querySelector("#scissors").addEventListener("click", () => handlePlayerChoice("scissors"));