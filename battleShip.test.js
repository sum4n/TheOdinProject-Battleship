import { Ship } from "./battleShip";
import { Gameboard } from "./gameBoard";
import { Player } from "./player";
import { AI } from "./ai";

// Ship tests
describe("Tests for Ship", () => {
  test("each hit increases timesHit by 1", () => {
    let ship = Ship(5);
    ship.hit();
    ship.hit();
    expect(ship.showHit()).toBe(2);
  });

  test("Ship length 2 and hit 2 = ship is sunk", () => {
    let ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("Ship length 3 and hit 1 = ship not sunk", () => {
    let ship = Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});

// Gameboard tests
describe("Tests for Gameboard", () => {
  let gameboard;
  let ship1;
  let ship2;
  beforeEach(() => {
    gameboard = Gameboard();
    ship1 = gameboard.placeShip([[2, 4]]);
    ship2 = gameboard.placeShip([
      [3, 6],
      [3, 7],
    ]);
  });

  test("Gameboard places ship at specific coordinate", () => {
    expect(ship1.location).toEqual(JSON.stringify([[2, 4]]));
  });

  test("Gameboard places ship that takes 2 locations", () => {
    expect(ship2.location).toEqual(
      JSON.stringify([
        [3, 6],
        [3, 7],
      ])
    );
  });

  test("Check if receiveAttack hits a target location", () => {
    expect(gameboard.receiveAttack([3, 7]).showHit()).toBe(1);
  });

  test("Record missed receivedAttacks", () => {
    expect(gameboard.receiveAttack([3, 3])).toEqual([3, 3]);
  });

  test("When receiveAttack hits target, send hit function to the correct ship", () => {
    gameboard.receiveAttack([3, 7]);
    expect(ship2.showHit()).toBe(1);
  });

  test("All ships are not sunk", () => {
    gameboard.receiveAttack([2, 4]);
    gameboard.receiveAttack([3, 6]);
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test("All ships are sunk", () => {
    gameboard.receiveAttack([3, 7]);
    gameboard.receiveAttack([2, 4]);
    gameboard.receiveAttack([3, 6]);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});

describe("Player tests", () => {
  test("player 'successfully' receives 1 attack", () => {
    let player = Player();
    player.gameboard.placeShip([[2, 4]]);

    expect(player.gameboard.receiveAttack([2, 4]).showHit()).toBe(1);
  });

  test("player1 'successfully' attacks player2", () => {
    let player1 = Player();
    let player2 = Player();
    let player2_ship = player2.gameboard.placeShip([[3, 6]]);

    player1.attack([3, 6], player2);

    expect(player2_ship.showHit()).toBe(1);
  });
});

describe("AI tests", () => {
  test("AI can not shoot same coordinate twice.", () => {
    let player = Player();
    let ai = AI();
    while (ai.aiAttackList.length != 100) {
      ai.attack(player);
    }
    // if there is duplicate value it will return false.
    // if there is no duplicate location, Set will not remove any duplicate from
    // aiAttackList and aiAttackList's lenght will be same as Set(aiAttackList).size
    expect(new Set(ai.aiAttackList).size == ai.aiAttackList.length).toBe(true);
  });

  test("AI can shoot at all the gameboard coordinates(100 in 10x10 board)", () => {
    let player = Player();
    let ai = AI();
    while (ai.aiAttackList.length != 100) {
      ai.attack(player);
    }
    expect(ai.aiAttackList.length).toBe(100);
  });

  test("AI can place ship at 'valid' random locations", () => {
    let ai = AI();

    // console.log(ai.createValidShipLocation(4));
    let ship5_location = ai.createValidShipLocation(5);
    let ship4_location = ai.createValidShipLocation(4);
    let ship3_location = ai.createValidShipLocation(3);
    let ship2_location = ai.createValidShipLocation(3);
    let ship1_location = ai.createValidShipLocation(2);

    // all ships have valid location; no cross location
    expect(
      new Set(ai.allAIShipLocations).size == ai.allAIShipLocations.length
    ).toBe(true);
  });
});

describe("Play the game", () => {
  test("Ai wins as dumb player attacks same coordinate", () => {
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

    while (!player.gameboard.allShipsSunk() && !ai.gameboard.allShipsSunk()) {
      player.attack([3, 6], ai);
      ai.attack(player);
    }
    // if (player.gameboard.allShipsSunk()) {
    //   console.log("Ai wins");
    // }

    // if (ai.gameboard.allShipsSunk()) {
    //   console.log("Player wins");
    // }
    expect(player.gameboard.allShipsSunk()).toBe(true);
  });
});
