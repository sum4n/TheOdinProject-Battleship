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
  let missedAttackLocations = [];

  let ship = Ship();

  const placeShip = (coOrd) => {
    ship.location = coOrd;
    return ship.location;
  };

  const receiveAttack = (coOrd) => {
    if (ship.location.toString() == coOrd.toString()) {
      return ship.hit();
    } else {
      missedAttackLocations.push(coOrd);
      return coOrd;
    }
  };

  return { placeShip, receiveAttack };
};

export { Ship, Gameboard };
