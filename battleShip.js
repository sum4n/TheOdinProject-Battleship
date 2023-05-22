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
  let shipLists = [];
  let missedShots = [];

  const placeShip = (coOrd) => {
    let shipLength = coOrd.length;

    let ship = Ship(shipLength);
    ship.location = JSON.stringify(coOrd);

    shipLists.push(ship);

    return ship;
  };

  const receiveAttack = (coOrd) => {
    let targetShip = shipLists.filter((x) =>
      x.location.includes(JSON.stringify(coOrd))
    );

    if (targetShip.length > 0) {
      targetShip[0].hit();
      return true;
    } else {
      missedShots.push(coOrd);
      return coOrd;
    }
  };

  return { placeShip, receiveAttack, shipLists, missedShots };
};

export { Ship, Gameboard };
