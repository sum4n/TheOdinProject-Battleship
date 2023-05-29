/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


const AI = () => {
  let gameboard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  let aiAttackList = [];

  const attack = (targetPlayer, attackLocation = getRandomCoordinate()) => {
    // if the attackLocation is in the aiAttackList, chose another attackLocation.
    while (aiAttackList.includes(JSON.stringify(attackLocation))) {
      attackLocation = getRandomCoordinate();
    }
    aiAttackList.push(JSON.stringify(attackLocation));
    return targetPlayer.gameboard.receiveAttack(attackLocation);
  };

  let allAIShipLocations = [];

  const createValidShipLocation = (
    size = 5,
    shipHead = getRandomCoordinate()
  ) => {
    let length = size - 1;
    let shipLocations = [];

    while (
      allAIShipLocations.includes(JSON.stringify(shipHead)) ||
      shipHead[0] + length >= 9
    ) {
      shipHead = getRandomCoordinate();
    }

    let i = shipHead[0];
    let j = shipHead[1];
    let k = shipHead[0] + length;

    while (i != k) {
      i++;
      // if there is duplicate, recursively start the function again
      if (allAIShipLocations.includes(JSON.stringify([i, j]))) {
        shipLocations = [];
        return createValidShipLocation(size);
      }
      shipLocations.push([i, j]);
      // console.log(shipLocations);
    }

    // add shiphead at the beginning of the list
    shipLocations.splice(0, 0, shipHead);
    // console.log(shipLocations);

    shipLocations.forEach((location) => {
      allAIShipLocations.push(JSON.stringify(location));
    });

    return shipLocations;
  };

  return {
    gameboard,
    aiAttackList,
    attack,
    createValidShipLocation,
    allAIShipLocations,
  };
};

function getRandomCoordinate() {
  let coOrdX = Math.floor(Math.random() * 10);
  let coOrdY = Math.floor(Math.random() * 10);

  return [coOrdX, coOrdY];
}




/***/ }),

/***/ "./src/battleShip.js":
/*!***************************!*\
  !*** ./src/battleShip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
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




/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _battleShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleShip */ "./src/battleShip.js");


const Gameboard = () => {
  // shipLists will be used for tracking ships and to be able to use actions on them.
  let shipLists = [];
  let missedShots = [];
  let shipLocationLists = [];

  const placeShip = (coOrd) => {
    let shipLength = coOrd.length;

    let ship = (0,_battleShip__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipLength);
    // location is converted into string to use .includes method.
    ship.location = JSON.stringify(coOrd);

    shipLists.push(ship);

    coOrd.forEach((location) => {
      shipLocationLists.push(JSON.stringify(location));
    });

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

  return {
    placeShip,
    receiveAttack,
    shipLists,
    missedShots,
    allShipsSunk,
    shipLocationLists,
  };
};




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


const Player = () => {
  let gameboard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  const attack = (coOrd, anotherPlayer) => {
    return anotherPlayer.gameboard.receiveAttack(coOrd);
  };

  return { gameboard, attack };
};




/***/ }),

/***/ "./src/uiGameBoard.js":
/*!****************************!*\
  !*** ./src/uiGameBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uiGameBoard: () => (/* binding */ uiGameBoard)
/* harmony export */ });
function uiGameBoard(id) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.setAttribute("id", id);
  gameBoardContainer.style.cssText =
    "height: 420px; width: 400px; text-align: center";

  gameBoardContainer.textContent = id + " Board";

  for (let i = 0; i <= 9; i++) {
    let columnDiv = addColumnDiv(gameBoardContainer);
    for (let j = 0; j <= 9; j++) {
      addRowDiv(columnDiv, [i, j]);
    }
  }

  return gameBoardContainer;
}



function addColumnDiv(parentDiv) {
  const columnDiv = document.createElement("div");
  //   columnDiv.classList.add("columnDiv");
  columnDiv.style.cssText =
    "height: 40px; width: 400px; border: 1px solid red; display:flex";
  parentDiv.appendChild(columnDiv);

  return columnDiv;
}

function addRowDiv(parentDiv, array) {
  // do not know why JSON.stringfy is needed twice here.
  array = JSON.stringify(array);
  const rowDiv = document.createElement("div");
  //   rowDiv.classList.add("rowDiv");
  rowDiv.style.cssText = "height: 40px; width: 40px; border: 1px solid red;";
  // rowDiv.textContent = array;
  // rowDiv.setAttribute("id", JSON.stringify(array));
  rowDiv.classList.add(JSON.stringify(array));
  parentDiv.appendChild(rowDiv);

  return rowDiv;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ "./src/ai.js");
/* harmony import */ var _uiGameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiGameBoard */ "./src/uiGameBoard.js");




const body = document.querySelector("body");
body.style.cssText = "display: flex; justify-content: space-around";
body.appendChild((0,_uiGameBoard__WEBPACK_IMPORTED_MODULE_2__.uiGameBoard)("player"));
body.appendChild((0,_uiGameBoard__WEBPACK_IMPORTED_MODULE_2__.uiGameBoard)("ai"));

// player board
function populatePlayerBoard() {
  // Create player ships
  let player = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)();
  let p_ship1 = player.gameboard.placeShip([
    [2, 4],
    [2, 5],
  ]);
  let p_ship2 = player.gameboard.placeShip([
    [3, 4],
    [3, 5],
    [3, 6],
  ]);
  let p_ship3 = player.gameboard.placeShip([
    [0, 1],
    [0, 2],
    [0, 3],
  ]);
  let p_ship4 = player.gameboard.placeShip([
    [7, 5],
    [7, 6],
    [7, 7],
    [7, 8],
  ]);
  let p_ship5 = player.gameboard.placeShip([
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
  ]);
  // console.log(player.gameboard.shipLocationLists);
  let playerBoard = document.getElementById("player");
  // console.log(playerBoard);

  player.gameboard.shipLocationLists.forEach((location) => {
    // console.log(JSON.stringify(location));
    // [0] indicates cells from player board
    let cell = document.getElementsByClassName(JSON.stringify(location))[0];
    // console.log(cell);
    cell.style.cssText =
      "background: green; border: 1px solid red; height: 40px; width: 40px";
  });
}
populatePlayerBoard();

// ai board printing for test
function populateAiBoard() {
  // Place ai ships.
  let ai = (0,_ai__WEBPACK_IMPORTED_MODULE_1__.AI)();
  let location1 = ai.createValidShipLocation(5);
  let location2 = ai.createValidShipLocation(4);
  let location3 = ai.createValidShipLocation(3);
  let location4 = ai.createValidShipLocation(3);
  let location5 = ai.createValidShipLocation(2);

  let ai_ship1 = ai.gameboard.placeShip(location1);
  let ai_ship2 = ai.gameboard.placeShip(location2);
  let ai_ship3 = ai.gameboard.placeShip(location3);
  let ai_ship4 = ai.gameboard.placeShip(location4);
  let ai_ship5 = ai.gameboard.placeShip(location5);

  // console.log(ai.allAIShipLocations);
  ai.allAIShipLocations.forEach((location) => {
    let x = JSON.stringify(location);
    // [1] indicates cells from ai board
    let cell = document.getElementsByClassName(x)[1];
    // console.log(cell);
    cell.style.cssText =
      "background: green; border: 1px solid red; height: 40px; width: 40px";
  });
}
populateAiBoard();

// game loop
function gameloop() {
  const aiGameBoard = document.querySelector("#ai");

  aiGameBoard.addEventListener("click", (e) => {
    // Nothing happens if player clicks on ai board's alredy colored cells or
    // when the game has ended.
    if (
      e.target.style.background == "red" ||
      e.target.style.background == "yellow" ||
      player.gameboard.allShipsSunk() ||
      ai.gameboard.allShipsSunk()
    ) {
      return;
    }
    // If the game has not been won player and ai will attackaing each other
    // as well as show the hits and misses on the boards.
    if (
      player.gameboard.allShipsSunk() != true &&
      ai.gameboard.allShipsSunk() != true
    ) {
      // Player attacks AI
      // convert cell class string to array
      let playerTarget = [
        parseInt(e.target.className[2]),
        parseInt(e.target.className[4]),
      ];

      // console.log(playerTarget);
      // console.log(ai.allAIShipLocations.includes(JSON.stringify(playerTarget)));
      // hits paints target red, misses paints target red.
      if (ai.allAIShipLocations.includes(JSON.stringify(playerTarget))) {
        e.target.style.cssText =
          "background: yellow; border: 1px solid red; height: 40px; width: 40px";
      } else {
        e.target.style.cssText =
          "background: red; border: 1px solid red; height: 40px; width: 40px";
      }
      player.attack(playerTarget, ai);

      // console.log(player.gameboard.missedShots);

      // Ai attacks Player (after player attacks) and print attacks on gameboard.
      ai.attack(player);

      // find the latest attack (which is last item on the list)
      let target = ai.aiAttackList[ai.aiAttackList.length - 1];
      target = JSON.stringify(target);

      let aiTarget = document.getElementsByClassName(target)[0];
      // print successful attack yellow and unsuccessful red
      if (aiTarget.style.background == "green") {
        aiTarget.style.cssText =
          "background: yellow; border: 1px solid red; height: 40px; width: 40px";
      } else {
        aiTarget.style.cssText =
          "background: red; border: 1px solid red; height: 40px; width: 40px";
        // console.log(aiTarget);
      }
    }
    // console.log(e.target.className);

    // If the game is won, alert winners name.
    if (player.gameboard.allShipsSunk()) {
      alert("Ai wins");
      // document.getElementById("player").remove();
      // document.getElementById("ai").remove();
      // body.appendChild(uiGameBoard("player"));
      // body.appendChild(uiGameBoard("ai"));
      // // ai.aiAttackList = [];
      // populatePlayerBoard();
      // populateAiBoard();
    }

    if (ai.gameboard.allShipsSunk()) {
      alert("Player wins");
    }
  });
}

gameloop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxXQUFXLHVDQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVCQUF1QixjQUFjO0FBQy9ELEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCLGNBQWM7QUFDcEUsUUFBUTtBQUNSO0FBQ0EsNEJBQTRCLHVCQUF1QixjQUFjO0FBQ2pFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCLGNBQWM7QUFDcEUsUUFBUTtBQUNSO0FBQ0EsNEJBQTRCLHVCQUF1QixjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9haS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZVNoaXAuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy91aUdhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuY29uc3QgQUkgPSAoKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBsZXQgYWlBdHRhY2tMaXN0ID0gW107XG5cbiAgY29uc3QgYXR0YWNrID0gKHRhcmdldFBsYXllciwgYXR0YWNrTG9jYXRpb24gPSBnZXRSYW5kb21Db29yZGluYXRlKCkpID0+IHtcbiAgICAvLyBpZiB0aGUgYXR0YWNrTG9jYXRpb24gaXMgaW4gdGhlIGFpQXR0YWNrTGlzdCwgY2hvc2UgYW5vdGhlciBhdHRhY2tMb2NhdGlvbi5cbiAgICB3aGlsZSAoYWlBdHRhY2tMaXN0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGF0dGFja0xvY2F0aW9uKSkpIHtcbiAgICAgIGF0dGFja0xvY2F0aW9uID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgIH1cbiAgICBhaUF0dGFja0xpc3QucHVzaChKU09OLnN0cmluZ2lmeShhdHRhY2tMb2NhdGlvbikpO1xuICAgIHJldHVybiB0YXJnZXRQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrTG9jYXRpb24pO1xuICB9O1xuXG4gIGxldCBhbGxBSVNoaXBMb2NhdGlvbnMgPSBbXTtcblxuICBjb25zdCBjcmVhdGVWYWxpZFNoaXBMb2NhdGlvbiA9IChcbiAgICBzaXplID0gNSxcbiAgICBzaGlwSGVhZCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKVxuICApID0+IHtcbiAgICBsZXQgbGVuZ3RoID0gc2l6ZSAtIDE7XG4gICAgbGV0IHNoaXBMb2NhdGlvbnMgPSBbXTtcblxuICAgIHdoaWxlIChcbiAgICAgIGFsbEFJU2hpcExvY2F0aW9ucy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShzaGlwSGVhZCkpIHx8XG4gICAgICBzaGlwSGVhZFswXSArIGxlbmd0aCA+PSA5XG4gICAgKSB7XG4gICAgICBzaGlwSGVhZCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IHNoaXBIZWFkWzBdO1xuICAgIGxldCBqID0gc2hpcEhlYWRbMV07XG4gICAgbGV0IGsgPSBzaGlwSGVhZFswXSArIGxlbmd0aDtcblxuICAgIHdoaWxlIChpICE9IGspIHtcbiAgICAgIGkrKztcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGR1cGxpY2F0ZSwgcmVjdXJzaXZlbHkgc3RhcnQgdGhlIGZ1bmN0aW9uIGFnYWluXG4gICAgICBpZiAoYWxsQUlTaGlwTG9jYXRpb25zLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLCBqXSkpKSB7XG4gICAgICAgIHNoaXBMb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKHNpemUpO1xuICAgICAgfVxuICAgICAgc2hpcExvY2F0aW9ucy5wdXNoKFtpLCBqXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwTG9jYXRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgc2hpcGhlYWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuICAgIHNoaXBMb2NhdGlvbnMuc3BsaWNlKDAsIDAsIHNoaXBIZWFkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwTG9jYXRpb25zKTtcblxuICAgIHNoaXBMb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIGFsbEFJU2hpcExvY2F0aW9ucy5wdXNoKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcExvY2F0aW9ucztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVib2FyZCxcbiAgICBhaUF0dGFja0xpc3QsXG4gICAgYXR0YWNrLFxuICAgIGNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uLFxuICAgIGFsbEFJU2hpcExvY2F0aW9ucyxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gIGxldCBjb09yZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBjb09yZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgcmV0dXJuIFtjb09yZFgsIGNvT3JkWV07XG59XG5cbmV4cG9ydCB7IEFJIH07XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgdGltZXNIaXQgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKyt0aW1lc0hpdDtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA9PSB0aW1lc0hpdCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gICAgaWYgKGxlbmd0aCAhPSB0aW1lc0hpdCkgcmV0dXJuIHN1bms7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0hpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGltZXNIaXQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXQsIGlzU3Vuaywgc2hvd0hpdCB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL2JhdHRsZVNoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBzaGlwTGlzdHMgd2lsbCBiZSB1c2VkIGZvciB0cmFja2luZyBzaGlwcyBhbmQgdG8gYmUgYWJsZSB0byB1c2UgYWN0aW9ucyBvbiB0aGVtLlxuICBsZXQgc2hpcExpc3RzID0gW107XG4gIGxldCBtaXNzZWRTaG90cyA9IFtdO1xuICBsZXQgc2hpcExvY2F0aW9uTGlzdHMgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29PcmQpID0+IHtcbiAgICBsZXQgc2hpcExlbmd0aCA9IGNvT3JkLmxlbmd0aDtcblxuICAgIGxldCBzaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAvLyBsb2NhdGlvbiBpcyBjb252ZXJ0ZWQgaW50byBzdHJpbmcgdG8gdXNlIC5pbmNsdWRlcyBtZXRob2QuXG4gICAgc2hpcC5sb2NhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvT3JkKTtcblxuICAgIHNoaXBMaXN0cy5wdXNoKHNoaXApO1xuXG4gICAgY29PcmQuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIHNoaXBMb2NhdGlvbkxpc3RzLnB1c2goSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29PcmQpID0+IHtcbiAgICAvLyBmaWx0ZXIgdGhyb3VnaCBzaGlwJ3MgbG9jYXRpb24gY29vcmRpbmF0ZSB0byBmaW5kIGlmIGF0dGFjayBjb29yZGluYXRlIGhpdHMgc2hpcC5cbiAgICAvLyBpZiBhdHRhY2sgaGl0cyBzaGlwLCB0YXJnZXRTaGlwIHdpbGwgZ2V0IHRoZSAnc2hpcCBvYmplY3QnIHRvIHNlbmQgaGl0IGZ1bmN0aW9uXG4gICAgLy8gdG8gdGhlICdzaGlwIG9iamVjdCcgb3IgdGhlIGF0dGFjayBjb29yZGluYXRlIGdvZXMgaW50byBtaXNzZWRTaG90LlxuICAgIGxldCB0YXJnZXRTaGlwID0gc2hpcExpc3RzLmZpbHRlcigoc2hpcCkgPT5cbiAgICAgIHNoaXAubG9jYXRpb24uaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29PcmQpKVxuICAgICk7XG5cbiAgICBpZiAodGFyZ2V0U2hpcC5sZW5ndGggPiAwKSB7XG4gICAgICB0YXJnZXRTaGlwWzBdLmhpdCgpO1xuICAgICAgcmV0dXJuIHRhcmdldFNoaXBbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goY29PcmQpO1xuICAgICAgcmV0dXJuIGNvT3JkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHNoaXBzU3VuayA9IHNoaXBMaXN0cy5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgLy8gRG9uJ3QgZm9yZ2V0IHRvIHdyaXRlIHJldHVybiBuZXh0IHRpbWUuIDspXG4gICAgICByZXR1cm4gc2hpcC5pc1N1bmsoKSA9PSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzU3VuaztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNoaXBMaXN0cyxcbiAgICBtaXNzZWRTaG90cyxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgc2hpcExvY2F0aW9uTGlzdHMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBhdHRhY2sgPSAoY29PcmQsIGFub3RoZXJQbGF5ZXIpID0+IHtcbiAgICByZXR1cm4gYW5vdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb09yZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2FtZWJvYXJkLCBhdHRhY2sgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiZnVuY3Rpb24gdWlHYW1lQm9hcmQoaWQpIHtcbiAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPVxuICAgIFwiaGVpZ2h0OiA0MjBweDsgd2lkdGg6IDQwMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXJcIjtcblxuICBnYW1lQm9hcmRDb250YWluZXIudGV4dENvbnRlbnQgPSBpZCArIFwiIEJvYXJkXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgbGV0IGNvbHVtbkRpdiA9IGFkZENvbHVtbkRpdihnYW1lQm9hcmRDb250YWluZXIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgYWRkUm93RGl2KGNvbHVtbkRpdiwgW2ksIGpdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2FtZUJvYXJkQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyB1aUdhbWVCb2FyZCB9O1xuXG5mdW5jdGlvbiBhZGRDb2x1bW5EaXYocGFyZW50RGl2KSB7XG4gIGNvbnN0IGNvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgY29sdW1uRGl2LmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5EaXZcIik7XG4gIGNvbHVtbkRpdi5zdHlsZS5jc3NUZXh0ID1cbiAgICBcImhlaWdodDogNDBweDsgd2lkdGg6IDQwMHB4OyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IGRpc3BsYXk6ZmxleFwiO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoY29sdW1uRGl2KTtcblxuICByZXR1cm4gY29sdW1uRGl2O1xufVxuXG5mdW5jdGlvbiBhZGRSb3dEaXYocGFyZW50RGl2LCBhcnJheSkge1xuICAvLyBkbyBub3Qga25vdyB3aHkgSlNPTi5zdHJpbmdmeSBpcyBuZWVkZWQgdHdpY2UgaGVyZS5cbiAgYXJyYXkgPSBKU09OLnN0cmluZ2lmeShhcnJheSk7XG4gIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoXCJyb3dEaXZcIik7XG4gIHJvd0Rpdi5zdHlsZS5jc3NUZXh0ID0gXCJoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4OyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XCI7XG4gIC8vIHJvd0Rpdi50ZXh0Q29udGVudCA9IGFycmF5O1xuICAvLyByb3dEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgcm93RGl2LmNsYXNzTGlzdC5hZGQoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHJvd0Rpdik7XG5cbiAgcmV0dXJuIHJvd0Rpdjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBBSSB9IGZyb20gXCIuL2FpXCI7XG5pbXBvcnQgeyB1aUdhbWVCb2FyZCB9IGZyb20gXCIuL3VpR2FtZUJvYXJkXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmJvZHkuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcIjtcbmJvZHkuYXBwZW5kQ2hpbGQodWlHYW1lQm9hcmQoXCJwbGF5ZXJcIikpO1xuYm9keS5hcHBlbmRDaGlsZCh1aUdhbWVCb2FyZChcImFpXCIpKTtcblxuLy8gcGxheWVyIGJvYXJkXG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllckJvYXJkKCkge1xuICAvLyBDcmVhdGUgcGxheWVyIHNoaXBzXG4gIGxldCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgbGV0IHBfc2hpcDEgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgWzIsIDRdLFxuICAgIFsyLCA1XSxcbiAgXSk7XG4gIGxldCBwX3NoaXAyID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICAgIFszLCA0XSxcbiAgICBbMywgNV0sXG4gICAgWzMsIDZdLFxuICBdKTtcbiAgbGV0IHBfc2hpcDMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gICAgWzAsIDFdLFxuICAgIFswLCAyXSxcbiAgICBbMCwgM10sXG4gIF0pO1xuICBsZXQgcF9zaGlwNCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICBbNywgNV0sXG4gICAgWzcsIDZdLFxuICAgIFs3LCA3XSxcbiAgICBbNywgOF0sXG4gIF0pO1xuICBsZXQgcF9zaGlwNSA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgICBbNSwgMV0sXG4gICAgWzUsIDJdLFxuICAgIFs1LCAzXSxcbiAgICBbNSwgNF0sXG4gICAgWzUsIDVdLFxuICBdKTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyLmdhbWVib2FyZC5zaGlwTG9jYXRpb25MaXN0cyk7XG4gIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyXCIpO1xuICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZCk7XG5cbiAgcGxheWVyLmdhbWVib2FyZC5zaGlwTG9jYXRpb25MaXN0cy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSk7XG4gICAgLy8gWzBdIGluZGljYXRlcyBjZWxscyBmcm9tIHBsYXllciBib2FyZFxuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpWzBdO1xuICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgIGNlbGwuc3R5bGUuY3NzVGV4dCA9XG4gICAgICBcImJhY2tncm91bmQ6IGdyZWVuOyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHhcIjtcbiAgfSk7XG59XG5wb3B1bGF0ZVBsYXllckJvYXJkKCk7XG5cbi8vIGFpIGJvYXJkIHByaW50aW5nIGZvciB0ZXN0XG5mdW5jdGlvbiBwb3B1bGF0ZUFpQm9hcmQoKSB7XG4gIC8vIFBsYWNlIGFpIHNoaXBzLlxuICBsZXQgYWkgPSBBSSgpO1xuICBsZXQgbG9jYXRpb24xID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oNSk7XG4gIGxldCBsb2NhdGlvbjIgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbig0KTtcbiAgbGV0IGxvY2F0aW9uMyA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDMpO1xuICBsZXQgbG9jYXRpb240ID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oMyk7XG4gIGxldCBsb2NhdGlvbjUgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbigyKTtcblxuICBsZXQgYWlfc2hpcDEgPSBhaS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uMSk7XG4gIGxldCBhaV9zaGlwMiA9IGFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb24yKTtcbiAgbGV0IGFpX3NoaXAzID0gYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjMpO1xuICBsZXQgYWlfc2hpcDQgPSBhaS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uNCk7XG4gIGxldCBhaV9zaGlwNSA9IGFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb241KTtcblxuICAvLyBjb25zb2xlLmxvZyhhaS5hbGxBSVNoaXBMb2NhdGlvbnMpO1xuICBhaS5hbGxBSVNoaXBMb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICBsZXQgeCA9IEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKTtcbiAgICAvLyBbMV0gaW5kaWNhdGVzIGNlbGxzIGZyb20gYWkgYm9hcmRcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoeClbMV07XG4gICAgLy8gY29uc29sZS5sb2coY2VsbCk7XG4gICAgY2VsbC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgIFwiYmFja2dyb3VuZDogZ3JlZW47IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweFwiO1xuICB9KTtcbn1cbnBvcHVsYXRlQWlCb2FyZCgpO1xuXG4vLyBnYW1lIGxvb3BcbmZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBjb25zdCBhaUdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWlcIik7XG5cbiAgYWlHYW1lQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgLy8gTm90aGluZyBoYXBwZW5zIGlmIHBsYXllciBjbGlja3Mgb24gYWkgYm9hcmQncyBhbHJlZHkgY29sb3JlZCBjZWxscyBvclxuICAgIC8vIHdoZW4gdGhlIGdhbWUgaGFzIGVuZGVkLlxuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPT0gXCJyZWRcIiB8fFxuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9PSBcInllbGxvd1wiIHx8XG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpIHx8XG4gICAgICBhaS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlIGdhbWUgaGFzIG5vdCBiZWVuIHdvbiBwbGF5ZXIgYW5kIGFpIHdpbGwgYXR0YWNrYWluZyBlYWNoIG90aGVyXG4gICAgLy8gYXMgd2VsbCBhcyBzaG93IHRoZSBoaXRzIGFuZCBtaXNzZXMgb24gdGhlIGJvYXJkcy5cbiAgICBpZiAoXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpICE9IHRydWUgJiZcbiAgICAgIGFpLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSAhPSB0cnVlXG4gICAgKSB7XG4gICAgICAvLyBQbGF5ZXIgYXR0YWNrcyBBSVxuICAgICAgLy8gY29udmVydCBjZWxsIGNsYXNzIHN0cmluZyB0byBhcnJheVxuICAgICAgbGV0IHBsYXllclRhcmdldCA9IFtcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NOYW1lWzJdKSxcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NOYW1lWzRdKSxcbiAgICAgIF07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllclRhcmdldCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhaS5hbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocGxheWVyVGFyZ2V0KSkpO1xuICAgICAgLy8gaGl0cyBwYWludHMgdGFyZ2V0IHJlZCwgbWlzc2VzIHBhaW50cyB0YXJnZXQgcmVkLlxuICAgICAgaWYgKGFpLmFsbEFJU2hpcExvY2F0aW9ucy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShwbGF5ZXJUYXJnZXQpKSkge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICBcImJhY2tncm91bmQ6IHllbGxvdzsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICBcImJhY2tncm91bmQ6IHJlZDsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG4gICAgICB9XG4gICAgICBwbGF5ZXIuYXR0YWNrKHBsYXllclRhcmdldCwgYWkpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzKTtcblxuICAgICAgLy8gQWkgYXR0YWNrcyBQbGF5ZXIgKGFmdGVyIHBsYXllciBhdHRhY2tzKSBhbmQgcHJpbnQgYXR0YWNrcyBvbiBnYW1lYm9hcmQuXG4gICAgICBhaS5hdHRhY2socGxheWVyKTtcblxuICAgICAgLy8gZmluZCB0aGUgbGF0ZXN0IGF0dGFjayAod2hpY2ggaXMgbGFzdCBpdGVtIG9uIHRoZSBsaXN0KVxuICAgICAgbGV0IHRhcmdldCA9IGFpLmFpQXR0YWNrTGlzdFthaS5haUF0dGFja0xpc3QubGVuZ3RoIC0gMV07XG4gICAgICB0YXJnZXQgPSBKU09OLnN0cmluZ2lmeSh0YXJnZXQpO1xuXG4gICAgICBsZXQgYWlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRhcmdldClbMF07XG4gICAgICAvLyBwcmludCBzdWNjZXNzZnVsIGF0dGFjayB5ZWxsb3cgYW5kIHVuc3VjY2Vzc2Z1bCByZWRcbiAgICAgIGlmIChhaVRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID09IFwiZ3JlZW5cIikge1xuICAgICAgICBhaVRhcmdldC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICBcImJhY2tncm91bmQ6IHllbGxvdzsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhaVRhcmdldC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICBcImJhY2tncm91bmQ6IHJlZDsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFpVGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NOYW1lKTtcblxuICAgIC8vIElmIHRoZSBnYW1lIGlzIHdvbiwgYWxlcnQgd2lubmVycyBuYW1lLlxuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBhbGVydChcIkFpIHdpbnNcIik7XG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclwiKS5yZW1vdmUoKTtcbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWlcIikucmVtb3ZlKCk7XG4gICAgICAvLyBib2R5LmFwcGVuZENoaWxkKHVpR2FtZUJvYXJkKFwicGxheWVyXCIpKTtcbiAgICAgIC8vIGJvZHkuYXBwZW5kQ2hpbGQodWlHYW1lQm9hcmQoXCJhaVwiKSk7XG4gICAgICAvLyAvLyBhaS5haUF0dGFja0xpc3QgPSBbXTtcbiAgICAgIC8vIHBvcHVsYXRlUGxheWVyQm9hcmQoKTtcbiAgICAgIC8vIHBvcHVsYXRlQWlCb2FyZCgpO1xuICAgIH1cblxuICAgIGlmIChhaS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGFsZXJ0KFwiUGxheWVyIHdpbnNcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZ2FtZWxvb3AoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==