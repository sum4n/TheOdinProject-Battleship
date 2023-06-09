import {
  generateGameBoardUi,
  generateDraggablePlayerShips,
} from "./generateGameBoardUi";
import { populateAiBoard, gameloop } from "./gameLoop";
import { player, populatePlayerBoard } from "./populatePlayer";

import "./styles/style.css";

const body = document.querySelector("body");

const gameBoardDiv = document.createElement("div");
gameBoardDiv.setAttribute("id", "gameBoardDiv");

gameBoardDiv.appendChild(generateGameBoardUi("player"));

body.appendChild(gameBoardDiv);

gameBoardDiv.appendChild(generateDraggablePlayerShips());

document.querySelectorAll(".dragDiv").forEach((div) => {
  div.addEventListener("click", () => {
    div.classList.toggle("dragHorizontal");
  });
});

// DRAG & DROP
const cells = document.querySelectorAll(".playerCell");
// console.log(cells);

function handleDragStart(e) {
  // console.log(e.target);
  // console.log(this.id);
  // console.log(e.target.classList[0]);
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", [
    e.target.childNodes.length,
    e.target.classList[0],
    e.target.id,
  ]);
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  // console.log(e.target.classList[0]);
  e.target.classList.add("dragEnter");

  markBoardWithDragNDrop(e);
}

function handleDragLeave(e) {
  e.target.classList.remove("dragEnter");

  markBoardWithDragNDrop(e);
}

function handleDrop(e) {
  e.preventDefault();
  // e.target.appendChild(document.getElementById("dragDiv"));
  // console.log(e.target);

  e.target.classList.remove("dragEnter");

  markBoardWithDragNDrop(e);

  let shipLocation = [
    [parseInt(e.target.classList[0][2]), parseInt(e.target.classList[0][4])],
  ];

  let cellCount = parseInt(e.dataTransfer.getData("text")[0]);
  let cellClass = e.dataTransfer.getData("text").slice(2, 16);

  for (let i = 1; i < cellCount; i++) {
    if (cellClass == "dragHorizontal") {
      shipLocation.push([
        parseInt(e.target.classList[0][2]),
        parseInt(e.target.classList[0][4]) + i,
      ]);
    } else {
      shipLocation.push([
        parseInt(e.target.classList[0][2]) + i,
        parseInt(e.target.classList[0][4]),
      ]);
    }
  }

  let checkShipAlreadyThere = shipLocation.some((location) => {
    return player.gameboard.shipLocationLists.includes(
      JSON.stringify(location)
    );
  });

  if (!checkShipAlreadyThere) {
    player.gameboard.placeShip(shipLocation);
    populatePlayerBoard();

    // console.log(e.dataTransfer.getData("text").slice(-5));
    let shipName = e.dataTransfer.getData("text").slice(-5);
    let dropShipDiv = document.getElementById("dropShipDiv");
    dropShipDiv.removeChild(document.getElementById(shipName));
  }

  // Add ai board and run game after all player ships have been placed.
  if (dropShipDiv.childElementCount == 0) {
    gameBoardDiv.removeChild(document.getElementById("dragShipContainer"));
    gameBoardDiv.appendChild(generateGameBoardUi("ai"));
    populateAiBoard();
    gameloop();
  }
}

let dragDiv = document.querySelectorAll(".dragDiv");
dragDiv.forEach((div) => {
  div.addEventListener("dragstart", handleDragStart);
});

cells.forEach((cell) => {
  cell.addEventListener("dragover", handleDragOver);
  cell.addEventListener("dragenter", handleDragEnter);
  cell.addEventListener("dragleave", handleDragLeave);
  cell.addEventListener("drop", handleDrop);
});

////////////////////////
populatePlayerBoard();
// populateAiBoard();
// gameloop();

function markBoardWithDragNDrop(e) {
  // console.log(e.type);
  let cellCount = parseInt(e.dataTransfer.getData("text")[0]);
  // console.log(cellCount);
  let cellClass = e.dataTransfer.getData("text").slice(2, 16);
  // console.log(cellClass);

  for (let i = 1; i < cellCount; i++) {
    let shipLocation;
    if (cellClass == "dragHorizontal") {
      shipLocation = JSON.stringify(
        JSON.stringify([
          parseInt(e.target.classList[0][2]),
          parseInt(e.target.classList[0][4]) + i,
        ])
      );
    } else {
      shipLocation = JSON.stringify(
        JSON.stringify([
          parseInt(e.target.classList[0][2]) + i,
          parseInt(e.target.classList[0][4]),
        ])
      );
    }

    // console.log(shipLocation);
    // console.log(document.getElementsByClassName(shipLocation)[0]);
    if (e.type == "dragenter") {
      document
        .getElementsByClassName(shipLocation)[0]
        .classList.add("dragEnter");
    } else {
      document
        .getElementsByClassName(shipLocation)[0]
        .classList.remove("dragEnter");
    }
  }
}
