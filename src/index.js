import { Player } from "./player";
import { AI } from "./ai";
import { uiGameBoard } from "./uiGameBoard";

const body = document.querySelector("body");
body.style.cssText = "display: flex; justify-content: space-around";
body.appendChild(uiGameBoard("player"));
body.appendChild(uiGameBoard("ai"));

// create player and ai ships
let player = Player();
let p_ship1 = player.gameboard.placeShip([
  [2, 4],
  [2, 5],
]);
let p_ship2 = player.gameboard.placeShip([
  [3, 4],
  [3, 5],
  [3, 6],
]);
let p_ship3 = player.gameboard.placeShip([
  [0, 1],
  [0, 2],
  [0, 3],
]);
let p_ship4 = player.gameboard.placeShip([
  [7, 5],
  [7, 6],
  [7, 7],
  [7, 8],
]);
let p_ship5 = player.gameboard.placeShip([
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
]);

let ai = AI();
let location1 = ai.createValidShipLocation(5);
let location2 = ai.createValidShipLocation(4);
let location3 = ai.createValidShipLocation(3);
let location4 = ai.createValidShipLocation(3);
let location5 = ai.createValidShipLocation(2);

let ai_ship1 = ai.gameboard.placeShip(location1);
let ai_ship2 = ai.gameboard.placeShip(location2);
let ai_ship3 = ai.gameboard.placeShip(location3);
let ai_ship4 = ai.gameboard.placeShip(location4);
let ai_ship5 = ai.gameboard.placeShip(location5);

// player board
function populatePlayerBoard() {
  // console.log(player.gameboard.shipLocationLists);
  let playerBoard = document.getElementById("player");
  // console.log(playerBoard);

  player.gameboard.shipLocationLists.forEach((location) => {
    // console.log(JSON.stringify(location));
    // [0] indicates cells from player board
    let cell = document.getElementsByClassName(JSON.stringify(location))[0];
    // console.log(cell);
    cell.style.cssText =
      "background: green; border: 1px solid red; height: 40px; width: 40px";
  });
}
populatePlayerBoard();

// ai board printing for test
function populateAiBoard() {
  // console.log(ai.allAIShipLocations);
  ai.allAIShipLocations.forEach((location) => {
    let x = JSON.stringify(location);
    // [1] indicates cells from ai board
    let cell = document.getElementsByClassName(x)[1];
    // console.log(cell);
    cell.style.cssText =
      "background: green; border: 1px solid red; height: 40px; width: 40px";
  });
}
populateAiBoard();

// game loop
const aiGameBoard = document.querySelector("#ai");

aiGameBoard.addEventListener("click", (e) => {
  if (
    e.target.style.background == "red" ||
    e.target.style.background == "yellow"
  ) {
    return;
  }
  if (
    player.gameboard.allShipsSunk() != true &&
    ai.gameboard.allShipsSunk() != true
  ) {
    // Player attacks AI
    // convert cell class string to array
    let playerTarget = [
      parseInt(e.target.className[2]),
      parseInt(e.target.className[4]),
    ];

    // console.log(playerTarget);
    // console.log(ai.allAIShipLocations.includes(JSON.stringify(playerTarget)));
    // hits paints target red, misses paints target red.
    if (ai.allAIShipLocations.includes(JSON.stringify(playerTarget))) {
      e.target.style.cssText =
        "background: yellow; border: 1px solid red; height: 40px; width: 40px";
    } else {
      e.target.style.cssText =
        "background: red; border: 1px solid red; height: 40px; width: 40px";
    }
    player.attack(playerTarget, ai);

    // console.log(player.gameboard.missedShots);

    // Ai attacks Player (after player attacks) and print attacks on gameboard.
    ai.attack(player);

    // find the latest attack (which is last item on the list)
    let target = ai.aiAttackList[ai.aiAttackList.length - 1];
    target = JSON.stringify(target);

    let aiTarget = document.getElementsByClassName(target)[0];
    // print successful attack yellow and unsuccessful red
    if (aiTarget.style.background == "green") {
      aiTarget.style.cssText =
        "background: yellow; border: 1px solid red; height: 40px; width: 40px";
    } else {
      aiTarget.style.cssText =
        "background: red; border: 1px solid red; height: 40px; width: 40px";
      // console.log(aiTarget);
    }
  }
  // console.log(e.target.className);

  if (player.gameboard.allShipsSunk()) {
    alert("Ai wins");
    // document.getElementById("player").remove();
    // document.getElementById("ai").remove();
    // body.appendChild(uiGameBoard("player"));
    // body.appendChild(uiGameBoard("ai"));
    // // ai.aiAttackList = [];
    // populatePlayerBoard();
    // populateAiBoard();
  }

  if (ai.gameboard.allShipsSunk()) {
    alert("Player wins");
  }
});
