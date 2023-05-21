const Ship = (length) => {
  let timesHit = 0;
  let sunk = false;

  const hit = () => {
    return ++timesHit;
  };

  const isSunk = () => {
    if (length == timesHit) {
      sunk = true;
      return sunk;
    }
    if (length != timesHit) return sunk;
  };

  return { hit, isSunk };
};

const Gameboard = () => {
  const placeShip = (coOrd, length) => {
    let ship = Ship(length);
    ship.location = coOrd;
    return ship;
  };

  return { placeShip };
};

export { Ship, Gameboard };
