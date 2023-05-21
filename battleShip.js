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
  // location and ship array needed for receiveAttack function
  let shipLocations = [];
  let shipLists = [];

  const placeShip = (coOrd) => {
    let shipLength = coOrd.length;

    let ship = Ship(shipLength);
    ship.location = coOrd;

    shipLocations.push(JSON.stringify(...ship.location));

    shipLists.push(ship);

    return ship;
  };

  const receiveAttack = (coOrd) => {
    if (shipLocations.includes(JSON.stringify(coOrd))) {
      return true;
    } else {
      return false;
    }
  };

  return { placeShip, receiveAttack, shipLists, shipLocations };
};

export { Ship, Gameboard };
