// Creating a button to control the output of the dice
const headerContainer = document.querySelector(".header-container");
const bodyContainer = document.querySelector(".body-container");
const compDiceImg = document.querySelector("#computer-pick img");
const playerDiceImg = document.querySelector("#player-pick img");
const startModal = document.querySelector(".start-modal");
const startGameBtn = document.querySelector(".start-game-btn");
const moreInfoBtn = document.querySelector(".more-info_btn");

const playButton = document.createElement("button");
playButton.classList.add("play-btn");
playButton.innerText = "Click to roll";
bodyContainer.appendChild(playButton);

// This runs when window loads
window.onload = function () {
  startModal.style.visibility = "visible";
  headerContainer.classList.add("active");
  bodyContainer.classList.add("active");
};

// After clicking start button this happens
startGameBtn.addEventListener("click", () => {
  startModal.style.display = "none";
  headerContainer.classList.remove("active");
  bodyContainer.classList.remove("active");
});

gameIsRunning = false;

let playerNumVal = 0;
let compNumVal = 0;
const RESULT_DRAW = "IT'S A DRAW!";
const RESULT_PLAYER_WINS = "You won, let's go again!";
const RESULT_COMPUTER_WINS = "I won, I'm too good at this!";

// Array of dice images objects
let diceImages = [
  {
    value: 1,
    imgSrc: "./images/svgs/01-dice.svg",
  },

  {
    value: 2,
    imgSrc: "./images/svgs/02-dice.svg",
  },

  {
    value: 3,
    imgSrc: "./images/svgs/03-dice.svg",
  },

  {
    value: 4,
    imgSrc: "./images/svgs/04-dice.svg",
  },

  {
    value: 5,
    imgSrc: "./images/svgs/05-dice.svg",
  },

  {
    value: 6,
    imgSrc: "./images/svgs/06-dice.svg",
  },
];

// Get player choice
const getPlayerChoice = () => {
  let playerChoiceNum = Math.floor(Math.random() * diceImages.length);
  playerDiceImg.setAttribute("src", diceImages[playerChoiceNum].imgSrc);
  playerNumVal += diceImages[playerChoiceNum].value;
};

// Get computer choice
const getComputerChoice = () => {
  let compChoiceNum = Math.floor(Math.random() * diceImages.length);
  compDiceImg.setAttribute("src", diceImages[compChoiceNum].imgSrc);
  compNumVal += diceImages[compChoiceNum].value;
};

// Get winner function
const getWinner = (pVal, cVal) => {
  if (pVal === cVal) {
    return RESULT_DRAW;
  } else if (pVal > cVal) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

// Start game by clicking button
const startGame = () => {
  if (gameIsRunning) {
    return;
  } else {
    gameIsRunning = true;
  }

  console.log("Initializing game sequence...");

  console.log(getWinner(playerNumVal, compNumVal));

  getPlayerChoice();
  getComputerChoice();

  //   End
  gameIsRunning = false;
};

playButton.addEventListener("click", startGame);

/* Code that stops a game after three clicks */
// let clicks = 0;
// document.body.onclick = function() {
//   clicks++;
//   if (clicks >= 3) {
//     alert('Game over!');
//     document.body.onclick = null;
//   }
// };
