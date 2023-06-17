const handsBtn = document.querySelectorAll(".hands-btn");
const userOutput = document.querySelector(".user-selection output");
const comOutput = document.querySelector(".computer-selection output");
const userScoreOutput = document.querySelector(".user-score");
const computerScoreOutput = document.querySelector(".computer-score");
const playBtn = document.querySelector(".play-btn");
const modal = document.querySelector(".modal-backdrop");
const modalMessage = document.querySelector(".modal h3");
const modalBtn = document.querySelector(".modal button");
let userScore = 0;
let computerScore = 0;

const hands = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

const handsArray = ["rock", "paper", "scissors"];

handsBtn.forEach((hand) => {
  hand.addEventListener("click", function () {
    const random = Math.floor(Math.random() * handsArray.length);
    const comRandomSelection = handsArray[random];
    const computerSelection = hands[comRandomSelection];
    const userSelection = hands[this.id];
    displaySelectionHand(userSelection, computerSelection);
    compareSelection(this.id, comRandomSelection);
  });
});

// comparing user selection and computer selection
function compareSelection(userSelection, computerSelection) {
  if (userSelection == "rock" && computerSelection == "paper") {
    computerScore++;
  } else if (userSelection == "rock" && computerSelection == "scissors") {
    userScore++;
  } else if (userSelection == "paper" && computerSelection == "rock") {
    userScore++;
  } else if (userSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
  } else if (userSelection == "scissors" && computerSelection == "paper") {
    userScore++;
  } else if (userSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
  }

  checkWinner(userScore, computerScore);
  displayScore(userScore, computerScore);
}

function checkWinner(userScore, computerScore) {
  if (userScore === 5) {
    modalMessage.innerHTML = "Congratulation You Win! 🏆 🥳";
    modal.classList.add("open");
    playBtn.classList.add("show");
  }

  if (computerScore === 5) {
    modalMessage.innerHTML = " You lose, Don't give up, try again! 💪";
    modal.classList.add("open");
    playBtn.classList.add("show");
  }
}

playBtn.addEventListener("click", function () {
  this.classList.remove("show");
  userScore = 0;
  computerScore = 0;
  displaySelectionHand("?", "?");
  displayScore(userScore, computerScore);
});

modalBtn.addEventListener("click", function () {
  modal.classList.remove("open");
});

function displayScore(userScore, computerScore) {
  userScoreOutput.innerHTML = userScore;
  computerScoreOutput.innerHTML = computerScore;
}

function displaySelectionHand(userSelection, computerSelection) {
  userOutput.innerHTML = userSelection;
  comOutput.innerHTML = computerSelection;
}
