import { generateGameBoardUi } from "./generateGameBoardUi";
import { populatePlayerBoard, populateAiBoard, gameloop } from "./gameLoop";

import "./styles/style.css";

const body = document.querySelector("body");

const gameBoardDiv = document.createElement("div");
gameBoardDiv.setAttribute("id", "gameBoardDiv");

gameBoardDiv.appendChild(generateGameBoardUi("player"));
gameBoardDiv.appendChild(generateGameBoardUi("ai"));

body.appendChild(gameBoardDiv);

populatePlayerBoard();
populateAiBoard();
gameloop();
