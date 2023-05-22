import { Ship, Gameboard } from "./battleShip";

// Ship tests
test("each hit increases timesHit by 1", () => {
  let ship = Ship(5);
  ship.hit();
  ship.hit();
  // console.log(ship);
  expect(ship.showHit()).toBe(2);
  // expect(ship.hit()).toBe(1);
  // expect(ship.hit()).toBe(2);
  // expect(ship.hit()).toBe(3);
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

// Gameboard tests
test("Gameboard places ship at specific coordinate", () => {
  let gameboard = Gameboard();
  expect(gameboard.placeShip([[0, 0]]).location).toEqual([[0, 0]]);
});

test("Gameboard places ship that takes 3 locations", () => {
  let gameboard = Gameboard();
  expect(
    gameboard.placeShip([
      [2, 4],
      [2, 5],
    ]).location
  ).toEqual([
    [2, 4],
    [2, 5],
  ]);
});

test("Placeship saving all ship's location into shipLocations", () => {
  let gameboard = Gameboard();
  // gameboard.placeShip([[3, 3]]);
  gameboard.placeShip([
    [2, 2],
    [2, 3],
  ]);
  expect(gameboard.shipLocations).toEqual([
    [2, 2],
    [2, 3],
  ]);
});

test("Check if receiveAttack hits a target location", () => {
  let gameboard = Gameboard();
  gameboard.placeShip([
    [0, 0],
    [4, 2],
  ]);
  gameboard.placeShip([
    [5, 2],
    [5, 1],
  ]);
  // console.log(gameboard.shipLocations);
  expect(gameboard.receiveAttack([5, 2])).toBe(true);
});

test("Record missed receivedAttacks", () => {
  let gameboard = Gameboard();
  gameboard.placeShip([[1, 1]]);
  expect(gameboard.receiveAttack([3, 3])).toEqual([3, 3]);
});

test.skip("When receiveAttack hits target, send hit function to the correct ship", () => {
  let gameboard = Gameboard();
  let ship1 = gameboard.placeShip([
    [3, 4],
    [2, 4],
  ]);
  let ship2 = gameboard.placeShip([[5, 5]]);
  gameboard.receiveAttack([5, 5]);

  console.log(gameboard.shipLocations);
  console.log(gameboard.shipLists);
  console.log(ship2.showHit());

  // expect(ship2.showHit()).toBe(1);
});
