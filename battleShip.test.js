import Ship from "./battleShip";

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
