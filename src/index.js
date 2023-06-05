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

const dragCell1 = document.createElement("div");
dragCell1.classList.add("dragCell");
// dragCell1.setAttribute("draggable", true);
const dragCell2 = document.createElement("div");
dragCell2.classList.add("dragCell");
// dragCell2.setAttribute("draggable", true);
const dragCell3 = document.createElement("div");
dragCell3.classList.add("dragCell");

dragDiv.append(dragCell1, dragCell2, dragCell3);

body.appendChild(dragDiv);

const cells = document.querySelectorAll(".playerCell");
// console.log(cells);

function handleDragStart(e) {
  // console.log(e.target);
  // console.log(this.id);
  // console.log(e.target.childNodes.length);
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", e.target.childNodes.length);
}

function handleDragOver(e) {
  // console.log(e);
  e.preventDefault();
}

function handleDragEnter(e) {
  console.log(e.target.classList[0]);
  e.target.classList.add("dragEnter");

  // console.log(shipLocation);

  let count = parseInt(e.dataTransfer.getData("text"));
  // console.log(count);

  for (let i = 1; i < count; i++) {
    let shipLocation = JSON.stringify(
      JSON.stringify([
        parseInt(e.target.classList[0][2]),
        parseInt(e.target.classList[0][4]) + i,
      ])
    );
    // console.log(shipLocation);
    // console.log(document.getElementsByClassName(shipLocation)[0]);
    document.getElementsByClassName(shipLocation)[0].classList.add("dragEnter");
  }
}

function handleDragLeave(e) {
  //   console.log(e);
  e.target.classList.remove("dragEnter");

  let count = parseInt(e.dataTransfer.getData("text"));
  // console.log(count);

  for (let i = 1; i < count; i++) {
    let shipLocation = JSON.stringify(
      JSON.stringify([
        parseInt(e.target.classList[0][2]),
        parseInt(e.target.classList[0][4]) + i,
      ])
    );
    // console.log(shipLocation);
    // console.log(document.getElementsByClassName(shipLocation)[0]);
    document
      .getElementsByClassName(shipLocation)[0]
      .classList.remove("dragEnter");
  }
}

function handleDrop(e) {
  e.preventDefault();
  // e.target.appendChild(document.getElementById("dragDiv"));
  console.log(e.target);

  e.target.classList.remove("dragEnter");
  let count = parseInt(e.dataTransfer.getData("text"));
  // console.log(count);

  for (let i = 1; i < count; i++) {
    let shipLocation = JSON.stringify(
      JSON.stringify([
        parseInt(e.target.classList[0][2]),
        parseInt(e.target.classList[0][4]) + i,
      ])
    );
    // console.log(shipLocation);
    // console.log(document.getElementsByClassName(shipLocation)[0]);
    document
      .getElementsByClassName(shipLocation)[0]
      .classList.remove("dragEnter");
  }

  let shipLocation = [
    [parseInt(e.target.classList[0][2]), parseInt(e.target.classList[0][4])],
  ];

  for (let i = 1; i < count; i++) {
    shipLocation.push([
      parseInt(e.target.classList[0][2]),
      parseInt(e.target.classList[0][4]) + i,
    ]);
  }
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
