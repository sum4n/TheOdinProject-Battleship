import { uiGameBoard } from "./uiGameBoard";
import { populatePlayerBoard, populateAiBoard, gameloop } from "./gameLoop";

import "./styles/style.css";

const body = document.querySelector("body");

const gameBoardDiv = document.createElement("div");
gameBoardDiv.setAttribute("id", "gameBoardDiv");

gameBoardDiv.appendChild(uiGameBoard("player"));
gameBoardDiv.appendChild(uiGameBoard("ai"));

body.appendChild(gameBoardDiv);

populatePlayerBoard();
populateAiBoard();
gameloop();
