import { Gameboard } from "./gameBoard";

const AI = () => {
  let gameboard = Gameboard();

  let aiAttackList = [];

  let lastSuccesfulAttackLocation = "[]";

  const attack = (targetPlayer, attackLocation = getRandomCoordinate()) => {
    // console.log(attackLocation);
    // console.log(aiAttackList);

    // gameLoop.js will send 'true' as attackLocation parameter if hit is successful
    // This logic attacks adjacent location of the previous successful attack
    if (attackLocation === true) {
      lastSuccesfulAttackLocation = aiAttackList[aiAttackList.length - 1];
      // console.log(aiAttackList[aiAttackList.length - 1]);
      // console.log(JSON.parse(aiAttackList[aiAttackList.length - 1]));
      attackLocation = getAdjacentCoordinate(
        JSON.parse(aiAttackList[aiAttackList.length - 1])
      );

      // Do not attack if the target location has been attacked already
      // Find another adjacent location
      while (aiAttackList.includes(JSON.stringify(attackLocation))) {
        attackLocation = getAdjacentCoordinate(
          JSON.parse(aiAttackList[aiAttackList.length - 1])
        );
        // If all adjacent slots have been attacked, get random attack
        // and break the while loop
        if (ajdacentLocationsAttacked(lastSuccesfulAttackLocation)) {
          attackLocation = getRandomCoordinate();
        }
      }

      // console.log(attackLocation);
    }

    // if (
    //   lastSuccesfulAttackLocation.length == 5 &&
    //   !ajdacentLocationsAttacked(lastSuccesfulAttackLocation)
    // ) {
    //   attackLocation = getAdjacentCoordinate(
    //     JSON.parse(aiAttackList[aiAttackList.length - 1])
    //   );
    //   console.log(attackLocation);
    // }

    // console.log(lastSuccesfulAttackLocation);
    // console.log(ajdacentLocationsAttacked(lastSuccesfulAttackLocation));

    // if the attackLocation is in the aiAttackList, chose another attackLocation.
    while (aiAttackList.includes(JSON.stringify(attackLocation))) {
      attackLocation = getRandomCoordinate();
    }
    aiAttackList.push(JSON.stringify(attackLocation));

    return targetPlayer.gameboard.receiveAttack(attackLocation);
  };

  let allAIShipLocations = [];

  const createValidShipLocation = (
    size = 5,
    shipHead = getRandomCoordinate()
  ) => {
    let length = size - 1;
    let shipLocations = [];

    while (
      allAIShipLocations.includes(JSON.stringify(shipHead)) ||
      shipHead[0] + length >= 9
    ) {
      shipHead = getRandomCoordinate();
    }

    let i = shipHead[0];
    let j = shipHead[1];
    let k = shipHead[0] + length;

    while (i != k) {
      i++;
      // if there is duplicate, recursively start the function again
      if (allAIShipLocations.includes(JSON.stringify([i, j]))) {
        shipLocations = [];
        return createValidShipLocation(size);
      }
      shipLocations.push([i, j]);
      // console.log(shipLocations);
    }

    // add shiphead at the beginning of the list
    shipLocations.splice(0, 0, shipHead);
    // console.log(shipLocations);

    shipLocations.forEach((location) => {
      allAIShipLocations.push(JSON.stringify(location));
    });

    return shipLocations;
  };

  // Check if all the adjacent locations to the succesful attack, have been attacked
  // and send true if thats the case
  function ajdacentLocationsAttacked(stringArray) {
    let [x, y] = JSON.parse(stringArray);

    let cordArray = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    let strCordArray = cordArray.map((item) => JSON.stringify(item));

    return strCordArray.every((array) => aiAttackList.includes(array));
  }

  return {
    gameboard,
    aiAttackList,
    attack,
    createValidShipLocation,
    allAIShipLocations,
  };
};

function getRandomCoordinate() {
  let coOrdX = Math.floor(Math.random() * 10);
  let coOrdY = Math.floor(Math.random() * 10);

  return [coOrdX, coOrdY];
}

function getAdjacentCoordinate([x, y]) {
  // console.log(x);
  // console.log(y);
  let possibleCoord = [];

  // so that coordinates does not go out of gameboard.
  if (x + 1 <= 9) {
    possibleCoord.push([x + 1, y]);
  }
  if (x - 1 >= 0) {
    possibleCoord.push([x - 1, y]);
  }
  if (y + 1 <= 9) {
    possibleCoord.push([x, y + 1]);
  }
  if (y - 1 >= 0) {
    possibleCoord.push([x, y - 1]);
  }

  // console.log(possibleCoord);

  // Take a random location to attack
  const adjacentCoord =
    possibleCoord[Math.floor(Math.random() * possibleCoord.length)];

  return adjacentCoord;
}

export { AI };
