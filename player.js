import { Gameboard } from "./gameBoard";

const Player = () => {
  let gameboard = Gameboard();

  const attack = (coOrd, anotherPlayer) => {
    return anotherPlayer.gameboard.receiveAttack(coOrd);
  };

  return { gameboard, attack };
};

export { Player };
