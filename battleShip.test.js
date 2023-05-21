import { Ship, Gameboard } from "./battleShip";

// Ship tests
test("each hit increases timesHit by 1", () => {
  let ship = Ship(5);
  expect(ship.hit()).toBe(1);
  expect(ship.hit()).toBe(2);
  expect(ship.hit()).toBe(3);
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

test("Check if receiveAttack hits a target location", () => {
  let gameboard = Gameboard();
  gameboard.placeShip([[0, 0]]);
  // console.log(gameboard.shipLists[0]);
  console.log(gameboard.shipLocations);
  expect(gameboard.receiveAttack([0, 0])).toBe(true);
});

test("Check if receivedAttack misses a target location", () => {
  let gameboard = Gameboard();
  gameboard.placeShip([[1, 1]]);
  expect(gameboard.receiveAttack([3, 3])).toBe(false);
});
