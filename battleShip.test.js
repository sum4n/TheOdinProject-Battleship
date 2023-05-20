import { Ship, Gameboard } from "./battleShip";

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

// test Gameboard
test("Gameboard places ship at specific coordinate", () => {
  let gameboard = Gameboard();
  expect(gameboard.placeShip([0, 0])).toEqual([0, 0]);
  expect(gameboard.placeShip([2, 4])).toEqual([2, 4]);
});

test("Attack hits the ship and get timesHit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip([0, 0]);
  expect(gameboard.receiveAttack([0, 0])).toBe(1);
  expect(gameboard.receiveAttack([0, 0])).toBe(2);
});

test("If Attack misses the ship, get attack location", () => {
  let gameboard = Gameboard();
  gameboard.placeShip([1, 1]);
  expect(gameboard.receiveAttack([3, 3])).toEqual([3, 3]);
  expect(gameboard.receiveAttack([5, 2])).toEqual([5, 2]);
});
