import { player, populatePlayerBoard } from "./populatePlayer";
import { ai, populateAiBoard } from "./populateAi";
import { gameFinishModal } from "./gameFininshModal";

// game loop
function gameloop() {
  const aiGameBoard = document.querySelector("#ai");

  aiGameBoard.addEventListener("click", (e) => {
    // console.log(e.target.classList);
    // Nothing happens if player clicks on ai board's alredy colored cells or
    // when the game has ended.
    if (
      e.target.classList.contains("hitCell") ||
      e.target.classList.contains("missCell") ||
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

      // Hits paints target red, misses paints target red.
      if (ai.allAIShipLocations.includes(JSON.stringify(playerTarget))) {
        e.target.classList.replace("aiCell", "hitCell");
      } else {
        e.target.classList.replace("aiCell", "missCell");
      }
      player.attack(playerTarget, ai);

      // console.log(player.gameboard.missedShots);

      // Ai attacks Player (after player attacks) and print attacks on gameboard.
      ai.attack(player);

      // find the latest attack (which is last item on the list)
      let target = ai.aiAttackList[ai.aiAttackList.length - 1];
      target = JSON.stringify(target);

      let aiTarget = document.getElementsByClassName(target)[0];
      // console.log(aiTarget.classList.contains("shipCell"));
      // print successful attack yellow and unsuccessful red
      if (aiTarget.classList.contains("shipCell")) {
        aiTarget.classList.replace("shipCell", "hitCell");
      } else {
        aiTarget.classList.replace("playerCell", "missCell");
        // console.log(aiTarget);
      }
    }
    // console.log(e.target.className);

    // If the game is won, alert winners name.
    if (player.gameboard.allShipsSunk()) {
      document.querySelector("body").append(gameFinishModal("You Lose!!"));
    }

    if (ai.gameboard.allShipsSunk()) {
      document.querySelector("body").append(gameFinishModal("You Win!!"));
    }
  });
}

export { populatePlayerBoard, populateAiBoard, gameloop };
