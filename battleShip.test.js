import { Ship, Gameboard } from "./battleShip";

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
  function initGameBoard() {
    let gameboard = Gameboard();
    let ship1 = gameboard.placeShip([[2, 4]]);
    let ship2 = gameboard.placeShip([
      [3, 6],
      [3, 7],
    ]);

    return { gameboard, ship1, ship2 };
  }

  test("Gameboard places ship at specific coordinate", () => {
    expect(initGameBoard().ship1.location).toEqual(JSON.stringify([[2, 4]]));
  });

  test("Gameboard places ship that takes 2 locations", () => {
    expect(initGameBoard().ship2.location).toEqual(
      JSON.stringify([
        [3, 6],
        [3, 7],
      ])
    );
  });

  test("Check if receiveAttack hits a target location", () => {
    expect(initGameBoard().gameboard.receiveAttack([3, 7]).showHit()).toBe(1);
  });

  test("Record missed receivedAttacks", () => {
    expect(initGameBoard().gameboard.receiveAttack([3, 3])).toEqual([3, 3]);
  });

  test("When receiveAttack hits target, send hit function to the correct ship", () => {
    let gameboard = Gameboard();
    let ship1 = gameboard.placeShip([[2, 4]]);
    let ship2 = gameboard.placeShip([
      [3, 6],
      [3, 7],
    ]);
    gameboard.receiveAttack([3, 7]);
    expect(ship2.showHit()).toBe(1);
  });

  test("All ships are not sunk", () => {
    let gameboard = Gameboard();
    let ship1 = gameboard.placeShip([[2, 4]]);
    let ship2 = gameboard.placeShip([
      [3, 6],
      [3, 7],
    ]);
    let ship3 = gameboard.placeShip([[6, 6]]);

    gameboard.receiveAttack([2, 4]);
    gameboard.receiveAttack([3, 6]);
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test.skip("All ships are sunk", () => {
    let gameboard = Gameboard();

    let ship2 = gameboard.placeShip([
      [4, 5],
      [4, 6],
    ]);
    let ship3 = gameboard.placeShip([[6, 6]]);

    gameboard.receiveAttack([4, 5]);
    gameboard.receiveAttack([6, 6]);
    gameboard.receiveAttack([4, 6]);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
