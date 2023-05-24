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
  // shipLists will be used for tracking ships and to be able to use actions on them.
  let shipLists = [];
  let missedShots = [];

  const placeShip = (coOrd) => {
    let shipLength = coOrd.length;

    let ship = Ship(shipLength);
    // location is converted into string to use .includes method.
    ship.location = JSON.stringify(coOrd);

    shipLists.push(ship);

    return ship;
  };

  const receiveAttack = (coOrd) => {
    // filter through ship's location coordinate to find if attack coordinate hits ship.
    // if attack hits ship, targetShip will get the 'ship object' to send hit function
    // to the 'ship object' or the attack coordinate goes into missedShot.
    let targetShip = shipLists.filter((ship) =>
      ship.location.includes(JSON.stringify(coOrd))
    );

    if (targetShip.length > 0) {
      targetShip[0].hit();
      return targetShip[0];
    } else {
      missedShots.push(coOrd);
      return coOrd;
    }
  };

  const allShipsSunk = () => {
    let shipsSunk = shipLists.every((ship) => {
      // Don't forget to write return next time. ;)
      return ship.isSunk() == true;
    });

    return shipsSunk;
  };

  return { placeShip, receiveAttack, shipLists, missedShots, allShipsSunk };
};

const Player = () => {
  let gameboard = Gameboard();

  const attack = (coOrd, anotherPlayer) => {
    return anotherPlayer.gameboard.receiveAttack(coOrd);
  };

  return { gameboard, attack };
};

const AI = () => {
  let gameboard = Gameboard();
  let ship1 = gameboard.placeShip([[2, 4]]);
  let ship2 = gameboard.placeShip([[2, 4]]);
  let ship3 = gameboard.placeShip([[2, 4]]);
  let ship4 = gameboard.placeShip([[2, 4]]);
  let ship5 = gameboard.placeShip([[2, 4]]);

  return { gameboard };
};

export { Ship, Gameboard, Player, AI };
