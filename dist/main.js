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
    "height: 420px; width: 400px; border: 1px solid black;";

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
  rowDiv.textContent = array;
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
/* harmony import */ var _battleShip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battleShip */ "./src/battleShip.js");





const body = document.querySelector("body");
body.style.cssText = "display: flex; justify-content: space-around";
body.appendChild((0,_uiGameBoard__WEBPACK_IMPORTED_MODULE_2__.uiGameBoard)("player"));
body.appendChild((0,_uiGameBoard__WEBPACK_IMPORTED_MODULE_2__.uiGameBoard)("ai"));

// create player and ai ships
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

// player board
function populatePlayerBoard() {
  console.log(player.gameboard.shipLocationLists);
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

// ai board
function populateAiBoard() {
  console.log(ai.allAIShipLocations);
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
const aiGameBoard = document.querySelector("#ai");

aiGameBoard.addEventListener("click", (e) => {
  if (
    player.gameboard.allShipsSunk() != true &&
    ai.gameboard.allShipsSunk() != true
  ) {
    let attackedCell = e.target;
    attackedCell.style.cssText =
      "background: green; border: 1px solid red; height: 40px; width: 40px";

    // Player attacks AI
    // convert string to array
    let playerTarget = [
      parseInt(e.target.className[2]),
      parseInt(e.target.className[4]),
    ];
    // console.log(playerTarget);
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

  if (player.gameboard.allShipsSunk()) {
    alert("Ai wins");
    document.getElementById("player").remove();
    document.getElementById("ai").remove();
    body.appendChild((0,_uiGameBoard__WEBPACK_IMPORTED_MODULE_2__.uiGameBoard)("player"));
    body.appendChild((0,_uiGameBoard__WEBPACK_IMPORTED_MODULE_2__.uiGameBoard)("ai"));
    // ai.aiAttackList = [];
    populatePlayerBoard();
    populateAiBoard();
  }

  if (ai.gameboard.allShipsSunk()) {
    alert("Player wins");
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUJBQXVCLGNBQWM7QUFDL0QsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVCQUF1QixjQUFjO0FBQy9ELEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUJBQXVCLGNBQWM7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCLGNBQWM7QUFDbEUsTUFBTTtBQUNOO0FBQ0EsMEJBQTBCLHVCQUF1QixjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDLHFCQUFxQix5REFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9haS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZVNoaXAuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy91aUdhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuY29uc3QgQUkgPSAoKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBsZXQgYWlBdHRhY2tMaXN0ID0gW107XG5cbiAgY29uc3QgYXR0YWNrID0gKHRhcmdldFBsYXllciwgYXR0YWNrTG9jYXRpb24gPSBnZXRSYW5kb21Db29yZGluYXRlKCkpID0+IHtcbiAgICAvLyBpZiB0aGUgYXR0YWNrTG9jYXRpb24gaXMgaW4gdGhlIGFpQXR0YWNrTGlzdCwgY2hvc2UgYW5vdGhlciBhdHRhY2tMb2NhdGlvbi5cbiAgICB3aGlsZSAoYWlBdHRhY2tMaXN0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGF0dGFja0xvY2F0aW9uKSkpIHtcbiAgICAgIGF0dGFja0xvY2F0aW9uID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgIH1cbiAgICBhaUF0dGFja0xpc3QucHVzaChKU09OLnN0cmluZ2lmeShhdHRhY2tMb2NhdGlvbikpO1xuICAgIHJldHVybiB0YXJnZXRQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrTG9jYXRpb24pO1xuICB9O1xuXG4gIGxldCBhbGxBSVNoaXBMb2NhdGlvbnMgPSBbXTtcblxuICBjb25zdCBjcmVhdGVWYWxpZFNoaXBMb2NhdGlvbiA9IChcbiAgICBzaXplID0gNSxcbiAgICBzaGlwSGVhZCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKVxuICApID0+IHtcbiAgICBsZXQgbGVuZ3RoID0gc2l6ZSAtIDE7XG4gICAgbGV0IHNoaXBMb2NhdGlvbnMgPSBbXTtcblxuICAgIHdoaWxlIChcbiAgICAgIGFsbEFJU2hpcExvY2F0aW9ucy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShzaGlwSGVhZCkpIHx8XG4gICAgICBzaGlwSGVhZFswXSArIGxlbmd0aCA+PSA5XG4gICAgKSB7XG4gICAgICBzaGlwSGVhZCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IHNoaXBIZWFkWzBdO1xuICAgIGxldCBqID0gc2hpcEhlYWRbMV07XG4gICAgbGV0IGsgPSBzaGlwSGVhZFswXSArIGxlbmd0aDtcblxuICAgIHdoaWxlIChpICE9IGspIHtcbiAgICAgIGkrKztcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGR1cGxpY2F0ZSwgcmVjdXJzaXZlbHkgc3RhcnQgdGhlIGZ1bmN0aW9uIGFnYWluXG4gICAgICBpZiAoYWxsQUlTaGlwTG9jYXRpb25zLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLCBqXSkpKSB7XG4gICAgICAgIHNoaXBMb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKHNpemUpO1xuICAgICAgfVxuICAgICAgc2hpcExvY2F0aW9ucy5wdXNoKFtpLCBqXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwTG9jYXRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgc2hpcGhlYWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuICAgIHNoaXBMb2NhdGlvbnMuc3BsaWNlKDAsIDAsIHNoaXBIZWFkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwTG9jYXRpb25zKTtcblxuICAgIHNoaXBMb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIGFsbEFJU2hpcExvY2F0aW9ucy5wdXNoKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcExvY2F0aW9ucztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVib2FyZCxcbiAgICBhaUF0dGFja0xpc3QsXG4gICAgYXR0YWNrLFxuICAgIGNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uLFxuICAgIGFsbEFJU2hpcExvY2F0aW9ucyxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gIGxldCBjb09yZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBjb09yZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgcmV0dXJuIFtjb09yZFgsIGNvT3JkWV07XG59XG5cbmV4cG9ydCB7IEFJIH07XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgdGltZXNIaXQgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKyt0aW1lc0hpdDtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA9PSB0aW1lc0hpdCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gICAgaWYgKGxlbmd0aCAhPSB0aW1lc0hpdCkgcmV0dXJuIHN1bms7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0hpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGltZXNIaXQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXQsIGlzU3Vuaywgc2hvd0hpdCB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL2JhdHRsZVNoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBzaGlwTGlzdHMgd2lsbCBiZSB1c2VkIGZvciB0cmFja2luZyBzaGlwcyBhbmQgdG8gYmUgYWJsZSB0byB1c2UgYWN0aW9ucyBvbiB0aGVtLlxuICBsZXQgc2hpcExpc3RzID0gW107XG4gIGxldCBtaXNzZWRTaG90cyA9IFtdO1xuICBsZXQgc2hpcExvY2F0aW9uTGlzdHMgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29PcmQpID0+IHtcbiAgICBsZXQgc2hpcExlbmd0aCA9IGNvT3JkLmxlbmd0aDtcblxuICAgIGxldCBzaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAvLyBsb2NhdGlvbiBpcyBjb252ZXJ0ZWQgaW50byBzdHJpbmcgdG8gdXNlIC5pbmNsdWRlcyBtZXRob2QuXG4gICAgc2hpcC5sb2NhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvT3JkKTtcblxuICAgIHNoaXBMaXN0cy5wdXNoKHNoaXApO1xuXG4gICAgY29PcmQuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIHNoaXBMb2NhdGlvbkxpc3RzLnB1c2goSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29PcmQpID0+IHtcbiAgICAvLyBmaWx0ZXIgdGhyb3VnaCBzaGlwJ3MgbG9jYXRpb24gY29vcmRpbmF0ZSB0byBmaW5kIGlmIGF0dGFjayBjb29yZGluYXRlIGhpdHMgc2hpcC5cbiAgICAvLyBpZiBhdHRhY2sgaGl0cyBzaGlwLCB0YXJnZXRTaGlwIHdpbGwgZ2V0IHRoZSAnc2hpcCBvYmplY3QnIHRvIHNlbmQgaGl0IGZ1bmN0aW9uXG4gICAgLy8gdG8gdGhlICdzaGlwIG9iamVjdCcgb3IgdGhlIGF0dGFjayBjb29yZGluYXRlIGdvZXMgaW50byBtaXNzZWRTaG90LlxuICAgIGxldCB0YXJnZXRTaGlwID0gc2hpcExpc3RzLmZpbHRlcigoc2hpcCkgPT5cbiAgICAgIHNoaXAubG9jYXRpb24uaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29PcmQpKVxuICAgICk7XG5cbiAgICBpZiAodGFyZ2V0U2hpcC5sZW5ndGggPiAwKSB7XG4gICAgICB0YXJnZXRTaGlwWzBdLmhpdCgpO1xuICAgICAgcmV0dXJuIHRhcmdldFNoaXBbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goY29PcmQpO1xuICAgICAgcmV0dXJuIGNvT3JkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHNoaXBzU3VuayA9IHNoaXBMaXN0cy5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgLy8gRG9uJ3QgZm9yZ2V0IHRvIHdyaXRlIHJldHVybiBuZXh0IHRpbWUuIDspXG4gICAgICByZXR1cm4gc2hpcC5pc1N1bmsoKSA9PSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzU3VuaztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNoaXBMaXN0cyxcbiAgICBtaXNzZWRTaG90cyxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgc2hpcExvY2F0aW9uTGlzdHMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBhdHRhY2sgPSAoY29PcmQsIGFub3RoZXJQbGF5ZXIpID0+IHtcbiAgICByZXR1cm4gYW5vdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb09yZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2FtZWJvYXJkLCBhdHRhY2sgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiZnVuY3Rpb24gdWlHYW1lQm9hcmQoaWQpIHtcbiAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPVxuICAgIFwiaGVpZ2h0OiA0MjBweDsgd2lkdGg6IDQwMHB4OyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICBsZXQgY29sdW1uRGl2ID0gYWRkQ29sdW1uRGl2KGdhbWVCb2FyZENvbnRhaW5lcik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICBhZGRSb3dEaXYoY29sdW1uRGl2LCBbaSwgal0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnYW1lQm9hcmRDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IHVpR2FtZUJvYXJkIH07XG5cbmZ1bmN0aW9uIGFkZENvbHVtbkRpdihwYXJlbnREaXYpIHtcbiAgY29uc3QgY29sdW1uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICBjb2x1bW5EaXYuY2xhc3NMaXN0LmFkZChcImNvbHVtbkRpdlwiKTtcbiAgY29sdW1uRGl2LnN0eWxlLmNzc1RleHQgPVxuICAgIFwiaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDAwcHg7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgZGlzcGxheTpmbGV4XCI7XG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChjb2x1bW5EaXYpO1xuXG4gIHJldHVybiBjb2x1bW5EaXY7XG59XG5cbmZ1bmN0aW9uIGFkZFJvd0RpdihwYXJlbnREaXYsIGFycmF5KSB7XG4gIC8vIGRvIG5vdCBrbm93IHdoeSBKU09OLnN0cmluZ2Z5IGlzIG5lZWRlZCB0d2ljZSBoZXJlLlxuICBhcnJheSA9IEpTT04uc3RyaW5naWZ5KGFycmF5KTtcbiAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICByb3dEaXYuY2xhc3NMaXN0LmFkZChcInJvd0RpdlwiKTtcbiAgcm93RGl2LnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDogNDBweDsgd2lkdGg6IDQwcHg7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcIjtcbiAgcm93RGl2LnRleHRDb250ZW50ID0gYXJyYXk7XG4gIC8vIHJvd0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuICByb3dEaXYuY2xhc3NMaXN0LmFkZChKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQocm93RGl2KTtcblxuICByZXR1cm4gcm93RGl2O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IEFJIH0gZnJvbSBcIi4vYWlcIjtcbmltcG9ydCB7IHVpR2FtZUJvYXJkIH0gZnJvbSBcIi4vdWlHYW1lQm9hcmRcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9iYXR0bGVTaGlwXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmJvZHkuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcIjtcbmJvZHkuYXBwZW5kQ2hpbGQodWlHYW1lQm9hcmQoXCJwbGF5ZXJcIikpO1xuYm9keS5hcHBlbmRDaGlsZCh1aUdhbWVCb2FyZChcImFpXCIpKTtcblxuLy8gY3JlYXRlIHBsYXllciBhbmQgYWkgc2hpcHNcbmxldCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbmxldCBwX3NoaXAxID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICBbMiwgNF0sXG4gIFsyLCA1XSxcbl0pO1xubGV0IHBfc2hpcDIgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gIFszLCA0XSxcbiAgWzMsIDVdLFxuICBbMywgNl0sXG5dKTtcbmxldCBwX3NoaXAzID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICBbMCwgMV0sXG4gIFswLCAyXSxcbiAgWzAsIDNdLFxuXSk7XG5sZXQgcF9zaGlwNCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgWzcsIDVdLFxuICBbNywgNl0sXG4gIFs3LCA3XSxcbiAgWzcsIDhdLFxuXSk7XG5sZXQgcF9zaGlwNSA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgWzUsIDFdLFxuICBbNSwgMl0sXG4gIFs1LCAzXSxcbiAgWzUsIDRdLFxuICBbNSwgNV0sXG5dKTtcblxubGV0IGFpID0gQUkoKTtcbmxldCBsb2NhdGlvbjEgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbig1KTtcbmxldCBsb2NhdGlvbjIgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbig0KTtcbmxldCBsb2NhdGlvbjMgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbigzKTtcbmxldCBsb2NhdGlvbjQgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbigzKTtcbmxldCBsb2NhdGlvbjUgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbigyKTtcblxubGV0IGFpX3NoaXAxID0gYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjEpO1xubGV0IGFpX3NoaXAyID0gYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjIpO1xubGV0IGFpX3NoaXAzID0gYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjMpO1xubGV0IGFpX3NoaXA0ID0gYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjQpO1xubGV0IGFpX3NoaXA1ID0gYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjUpO1xuXG4vLyBwbGF5ZXIgYm9hcmRcbmZ1bmN0aW9uIHBvcHVsYXRlUGxheWVyQm9hcmQoKSB7XG4gIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQuc2hpcExvY2F0aW9uTGlzdHMpO1xuICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclwiKTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmQpO1xuXG4gIHBsYXllci5nYW1lYm9hcmQuc2hpcExvY2F0aW9uTGlzdHMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpO1xuICAgIC8vIFswXSBpbmRpY2F0ZXMgY2VsbHMgZnJvbSBwbGF5ZXIgYm9hcmRcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKVswXTtcbiAgICAvLyBjb25zb2xlLmxvZyhjZWxsKTtcbiAgICBjZWxsLnN0eWxlLmNzc1RleHQgPVxuICAgICAgXCJiYWNrZ3JvdW5kOiBncmVlbjsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG4gIH0pO1xufVxucG9wdWxhdGVQbGF5ZXJCb2FyZCgpO1xuXG4vLyBhaSBib2FyZFxuZnVuY3Rpb24gcG9wdWxhdGVBaUJvYXJkKCkge1xuICBjb25zb2xlLmxvZyhhaS5hbGxBSVNoaXBMb2NhdGlvbnMpO1xuICBhaS5hbGxBSVNoaXBMb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICBsZXQgeCA9IEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKTtcbiAgICAvLyBbMV0gaW5kaWNhdGVzIGNlbGxzIGZyb20gYWkgYm9hcmRcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoeClbMV07XG4gICAgLy8gY29uc29sZS5sb2coY2VsbCk7XG4gICAgY2VsbC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgIFwiYmFja2dyb3VuZDogZ3JlZW47IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweFwiO1xuICB9KTtcbn1cbnBvcHVsYXRlQWlCb2FyZCgpO1xuXG4vLyBnYW1lIGxvb3BcbmNvbnN0IGFpR2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhaVwiKTtcblxuYWlHYW1lQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpICE9IHRydWUgJiZcbiAgICBhaS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgIT0gdHJ1ZVxuICApIHtcbiAgICBsZXQgYXR0YWNrZWRDZWxsID0gZS50YXJnZXQ7XG4gICAgYXR0YWNrZWRDZWxsLnN0eWxlLmNzc1RleHQgPVxuICAgICAgXCJiYWNrZ3JvdW5kOiBncmVlbjsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG5cbiAgICAvLyBQbGF5ZXIgYXR0YWNrcyBBSVxuICAgIC8vIGNvbnZlcnQgc3RyaW5nIHRvIGFycmF5XG4gICAgbGV0IHBsYXllclRhcmdldCA9IFtcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTmFtZVsyXSksXG4gICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc05hbWVbNF0pLFxuICAgIF07XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyVGFyZ2V0KTtcbiAgICBwbGF5ZXIuYXR0YWNrKHBsYXllclRhcmdldCwgYWkpO1xuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyLmdhbWVib2FyZC5taXNzZWRTaG90cyk7XG5cbiAgICAvLyBBaSBhdHRhY2tzIFBsYXllciAoYWZ0ZXIgcGxheWVyIGF0dGFja3MpIGFuZCBwcmludCBhdHRhY2tzIG9uIGdhbWVib2FyZC5cbiAgICBhaS5hdHRhY2socGxheWVyKTtcblxuICAgIC8vIGZpbmQgdGhlIGxhdGVzdCBhdHRhY2sgKHdoaWNoIGlzIGxhc3QgaXRlbSBvbiB0aGUgbGlzdClcbiAgICBsZXQgdGFyZ2V0ID0gYWkuYWlBdHRhY2tMaXN0W2FpLmFpQXR0YWNrTGlzdC5sZW5ndGggLSAxXTtcbiAgICB0YXJnZXQgPSBKU09OLnN0cmluZ2lmeSh0YXJnZXQpO1xuXG4gICAgbGV0IGFpVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0YXJnZXQpWzBdO1xuICAgIC8vIHByaW50IHN1Y2Nlc3NmdWwgYXR0YWNrIHllbGxvdyBhbmQgdW5zdWNjZXNzZnVsIHJlZFxuICAgIGlmIChhaVRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID09IFwiZ3JlZW5cIikge1xuICAgICAgYWlUYXJnZXQuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgIFwiYmFja2dyb3VuZDogeWVsbG93OyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWlUYXJnZXQuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgIFwiYmFja2dyb3VuZDogcmVkOyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHhcIjtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFpVGFyZ2V0KTtcbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NOYW1lKTtcblxuICBpZiAocGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGFsZXJ0KFwiQWkgd2luc1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclwiKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFpXCIpLnJlbW92ZSgpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQodWlHYW1lQm9hcmQoXCJwbGF5ZXJcIikpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQodWlHYW1lQm9hcmQoXCJhaVwiKSk7XG4gICAgLy8gYWkuYWlBdHRhY2tMaXN0ID0gW107XG4gICAgcG9wdWxhdGVQbGF5ZXJCb2FyZCgpO1xuICAgIHBvcHVsYXRlQWlCb2FyZCgpO1xuICB9XG5cbiAgaWYgKGFpLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGFsZXJ0KFwiUGxheWVyIHdpbnNcIik7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9