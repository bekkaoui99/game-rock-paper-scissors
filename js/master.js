const choices = ["rock", "paper", "scissors"];
const displayResult = document.getElementById("displayResult");
const playerSpace = document.getElementById("playerSpace");
const computerSpace = document.getElementById("computerSpace");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const restart = document.getElementById("restart");

let gameResult = "";
let displayPlayerScore = 0;
let displayComputerScore = 0;

const playerChoices = document.querySelectorAll(".choices > div");

function playingTheGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  randomImage(computerChoice, computerSpace);
  if (computerChoice === playerChoice) {
    gameResult = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          displayPlayerScore++;
          gameResult = "YOU WIN";
        } else {
          gameResult = "YOU LOSE";
          displayComputerScore++;
        }
        break;
      case "paper":
        if (computerChoice == "rock") {
          displayPlayerScore++;
          gameResult = "YOU WIN";
        } else {
          gameResult = "YOU LOSE";
          displayComputerScore++;
        }
        break;
      case "scissors":
        if (computerChoice == "paper") {
          displayPlayerScore++;
          gameResult = "YOU WIN";
        } else {
          gameResult = "YOU LOSE";
          displayComputerScore++;
        }
        break;
    }
  }
  displayResult.innerText = gameResult;
  displayResult.classList.add("black");
  switch (gameResult) {
    case "YOU WIN":
      displayResult.classList.remove("red");
      displayResult.classList.remove("black");
      displayResult.classList.add("green");
      break;
    case "YOU LOSE":
      displayResult.classList.remove("green");
      displayResult.classList.remove("black");
      displayResult.classList.add("red");
      break;
  }
  playerScore.innerText = displayPlayerScore;
  computerScore.innerHTML = displayComputerScore;
  if (playerScore.innerText > 0) {
    playerScore.classList.add("green");
  }
  if (computerScore.innerText > 0) {
    computerScore.classList.add("red");
  }

  if (displayComputerScore > 0 || displayPlayerScore > 0) {
    restart.style.display = "block";
  }
}

function randomImage(playerChoice, element) {
  element.removeAttribute("src");
  switch (playerChoice) {
    case "rock":
      element.setAttribute("src", "images/rock.png");
      break;
    case "paper":
      element.setAttribute("src", "images/paper.png");
      break;
    case "scissors":
      element.setAttribute("src", "images/scissors.png");
      break;
  }
}

playerChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const selectedChoice = choice.getAttribute("data-choice");
    playingTheGame(selectedChoice);
    randomImage(selectedChoice, playerSpace);
  });
});

function restartTheGame() {
  window.location.reload();
}

restart.addEventListener("click", restartTheGame);
