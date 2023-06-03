import { uiGameBoard } from "./uiGameBoard";

import { populatePlayerBoard, populateAiBoard, gameloop } from "./gameLoop";

const body = document.querySelector("body");
body.style.cssText = "display: flex; justify-content: space-around";
body.appendChild(uiGameBoard("player"));
body.appendChild(uiGameBoard("ai"));

populatePlayerBoard();
populateAiBoard();
gameloop();
