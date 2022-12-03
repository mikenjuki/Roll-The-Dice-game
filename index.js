// Creating a button to control the output of the dice
const bodyContainer = document.querySelector(".body-container");
const compDiceImg = document.querySelector("#computer-pick img");
const playerDiceImg = document.querySelector("#player-pick img");

const playButton = document.createElement("button");
playButton.classList.add("play-btn");
playButton.innerText = "Click to roll";
bodyContainer.appendChild(playButton);

gameIsRunning = false;

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

console.log(diceImages[0].value);

// Get player choice
const getPlayerChoice = () => {
  let playerChoiceNum = Math.floor(Math.random() * diceImages.length);
  playerDiceImg.setAttribute("src", diceImages[playerChoiceNum].imgSrc);
};

// Get computer choice
const getComputerChoice = () => {
  let compChoiceNum = Math.floor(Math.random() * diceImages.length);
  compDiceImg.setAttribute("src", diceImages[compChoiceNum].imgSrc);
};

// Start game by clicking button
playButton.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  } else {
    gameIsRunning = true;
  }

  console.log("Initializing game sequence...");

  getPlayerChoice();
  getComputerChoice();

  //   End
  gameIsRunning = false;
});
