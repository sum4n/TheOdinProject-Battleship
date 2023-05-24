import { Ship, Gameboard, Player, AI } from "./battleShip";

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
  test("AI creates 5 ships", () => {
    let ai = AI();
    expect(ai.gameboard.shipLists.length).toBe(5);
  });

  test("AI ships are at random location", () => {
    let ai = AI();
    let locationArray = [];

    ai.gameboard.shipLists.forEach((ship) => {
      locationArray.push(ship.location);
    });

    // if there is no duplicate location, Set will not remove any duplicate from
    // locationArray and locationArray's lenght will be same as Set(locationArray).size
    expect(new Set(locationArray).size == locationArray.length).toBe(true);
  });
});
