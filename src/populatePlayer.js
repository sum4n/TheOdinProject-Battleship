import { Player } from "./player";

let player = Player();

// TODO get ship location through drag and drop

let p_ship1 = [
  [2, 4],
  [2, 5],
];

// let p_ship2 = [
//   [3, 4],
//   [3, 5],
//   [3, 6],
// ];
// let p_ship3 = [
//   [0, 1],
//   [0, 2],
//   [0, 3],
// ];
// let p_ship4 = [
//   [7, 5],
//   [7, 6],
//   [7, 7],
//   [7, 8],
// ];
// let p_ship5 = [
//   [5, 1],
//   [5, 2],
//   [5, 3],
//   [5, 4],
//   [5, 5],
// ];

player.gameboard.placeShip(p_ship1);
// player.gameboard.placeShip(p_ship2);
// player.gameboard.placeShip(p_ship3);
// player.gameboard.placeShip(p_ship4);
// player.gameboard.placeShip(p_ship5);

// player board
function populatePlayerBoard() {
  // console.log(player.gameboard.shipLocationLists);
  let playerBoard = document.getElementById("player");
  // console.log(playerBoard);

  player.gameboard.shipLocationLists.forEach((location) => {
    // console.log(JSON.stringify(location));
    // [0] indicates cells from player board
    let cell = document.getElementsByClassName(JSON.stringify(location))[0];
    cell.classList.replace("playerCell", "shipCell");
  });
}
// populatePlayerBoard();

export { player, populatePlayerBoard };
