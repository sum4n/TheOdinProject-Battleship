import { player, populatePlayerBoard } from "./populatePlayer";
import { ai, populateAiBoard } from "./populateAi";

// game loop
function gameloop() {
  const aiGameBoard = document.querySelector("#ai");

  aiGameBoard.addEventListener("click", (e) => {
    // Nothing happens if player clicks on ai board's alredy colored cells or
    // when the game has ended.
    if (
      e.target.style.background == "red" ||
      e.target.style.background == "yellow" ||
      player.gameboard.allShipsSunk() ||
      ai.gameboard.allShipsSunk()
    ) {
      return;
    }
    // If the game has not been won player and ai will attackaing each other
    // as well as show the hits and misses on the boards.
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

    // If the game is won, alert winners name.
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
}

export { populatePlayerBoard, populateAiBoard, gameloop };
