import { Player } from "./player";

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
// populatePlayerBoard();

export { player, populatePlayerBoard };
