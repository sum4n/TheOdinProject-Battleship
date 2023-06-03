import { uiGameBoard } from "./uiGameBoard";

import { populatePlayerBoard, populateAiBoard, gameloop } from "./gameLoop";

const body = document.querySelector("body");

const gameBoardDiv = document.createElement("div");
gameBoardDiv.style.cssText = "display: flex; justify-content: space-around";
gameBoardDiv.appendChild(uiGameBoard("player"));
gameBoardDiv.appendChild(uiGameBoard("ai"));

body.appendChild(gameBoardDiv);

populatePlayerBoard();
populateAiBoard();
gameloop();
