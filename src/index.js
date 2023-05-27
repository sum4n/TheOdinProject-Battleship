import { Player } from "./player";
import { AI } from "./ai";
import { uiGameBoard } from "./uiGameBoard";
import { Ship } from "./battleShip";

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
console.log(player.gameboard.shipLocationLists);
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

// ai board
console.log(ai.allAIShipLocations);
ai.allAIShipLocations.forEach((location) => {
  let x = JSON.stringify(location);
  // [1] indicates cells from ai board
  let cell = document.getElementsByClassName(x)[1];
  // console.log(cell);
  cell.style.cssText =
    "background: green; border: 1px solid red; height: 40px; width: 40px";
});

// game loop
const aiGameBoard = document.querySelector("#ai");

aiGameBoard.addEventListener("click", (e) => {
  // console.log(e.target.className);
  let attackedCell = e.target;
  attackedCell.style.cssText =
    "background: green; border: 1px solid red; height: 40px; width: 40px";

  player.attack(e.target.className, ai);

  // console.log(player.gameboard.missedShots);

  // ai attacks player (after player attacks) and print attacks on gameboard.
  ai.attack(player);
  // ai attacks get printed on player board
  ai.aiAttackList.forEach((target) => {
    // Do not like the implementaion
    target = JSON.stringify(target);
    let aiTarget = document.getElementsByClassName(target)[0];
    aiTarget.style.cssText =
      "background: red; border: 1px solid red; height: 40px; width: 40px";
    // console.log(aiTarget);
  });

  // console.log(ai_ship5.showHit());
  // console.log(ai_ship4.showHit());
  // console.log(ai_ship3.showHit());
  // console.log(ai_ship2.showHit());
  // console.log(ai_ship1.showHit());

  if (player.gameboard.allShipsSunk()) {
    console.log("Ai wins");
  }

  if (ai.gameboard.allShipsSunk()) {
    console.log("Player wins");
  }
});

// while (!player.gameboard.allShipsSunk() && !ai.gameboard.allShipsSunk()) {
//   player.attack([3, 6], ai);
//   ai.attack(player);
// }

// if (player.gameboard.allShipsSunk()) {
//   console.log("Ai wins");
// }

// if (ai.gameboard.allShipsSunk()) {
//   console.log("Player wins");
// }
