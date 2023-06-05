import { generateGameBoardUi } from "./generateGameBoardUi";
import { populateAiBoard, gameloop } from "./gameLoop";
import { player, populatePlayerBoard } from "./populatePlayer";

import "./styles/style.css";

const body = document.querySelector("body");

const gameBoardDiv = document.createElement("div");
gameBoardDiv.setAttribute("id", "gameBoardDiv");

gameBoardDiv.appendChild(generateGameBoardUi("player"));
gameBoardDiv.appendChild(generateGameBoardUi("ai"));

body.appendChild(gameBoardDiv);

// DRAG & DROP
const dragDiv = document.createElement("div");
dragDiv.setAttribute("id", "dragDiv");
dragDiv.setAttribute("draggable", true);

body.appendChild(dragDiv);

const cells = document.querySelectorAll(".cell");
// console.log(cells);

function handleDragStart(e) {
  // console.log(e.target);
  // console.log(this.id);
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", e.target.id);
}

function handleDragOver(e) {
  //   console.log(e);
  e.preventDefault();
}

function handleDragEnter(e) {
  //   console.log(e);
  this.classList.add("dragEnter");
}

function handleDragLeave(e) {
  //   console.log(e);
  this.classList.remove("dragEnter");
}

function handleDrop(e) {
  e.preventDefault();
  // e.target.appendChild(document.getElementById("dragDiv"));
  // console.log(e.target);

  this.classList.remove("dragEnter");

  let shipLocation = [
    [parseInt(e.target.classList[0][2]), parseInt(e.target.classList[0][4])],
  ];

  console.log(shipLocation);

  player.gameboard.placeShip(shipLocation);
  populatePlayerBoard();

  body.removeChild(dragDiv);
}

dragDiv.addEventListener("dragstart", handleDragStart);

cells.forEach((cell) => {
  cell.addEventListener("dragover", handleDragOver);
  cell.addEventListener("dragenter", handleDragEnter);
  cell.addEventListener("dragleave", handleDragLeave);
  cell.addEventListener("drop", handleDrop);
});

////////////////////////
populatePlayerBoard();
populateAiBoard();
gameloop();
