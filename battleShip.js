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

  const showHit = () => {
    return timesHit;
  };

  return { length, hit, isSunk, showHit };
};

const Gameboard = () => {
  // location and ship array needed for receiveAttack function
  let shipLocations = [];
  let shipLists = [];
  let missedShots = [];

  const placeShip = (coOrd) => {
    let shipLength = coOrd.length;

    let ship = Ship(shipLength);
    ship.location = coOrd;

    shipLocations.push(...coOrd);

    shipLists.push(ship);

    return ship;
  };

  const receiveAttack = (coOrd) => {
    if (shipLocations.some((i) => JSON.stringify(i) == JSON.stringify(coOrd))) {
      return true;
    } else {
      missedShots.push(coOrd);
      return coOrd;
    }
  };

  return { placeShip, receiveAttack, shipLists, shipLocations, missedShots };
};

export { Ship, Gameboard };
