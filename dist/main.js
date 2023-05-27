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

// ai board printing for test
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUJBQXVCLGNBQWM7QUFDL0QsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVCQUF1QixjQUFjO0FBQy9ELEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QixjQUFjO0FBQ2xFLE1BQU07QUFDTjtBQUNBLDBCQUEwQix1QkFBdUIsY0FBYztBQUMvRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QixjQUFjO0FBQ2xFLE1BQU07QUFDTjtBQUNBLDBCQUEwQix1QkFBdUIsY0FBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBVztBQUNoQyxxQkFBcUIseURBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVTaGlwLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvdWlHYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IEFJID0gKCkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgbGV0IGFpQXR0YWNrTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGF0dGFjayA9ICh0YXJnZXRQbGF5ZXIsIGF0dGFja0xvY2F0aW9uID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpKSA9PiB7XG4gICAgLy8gaWYgdGhlIGF0dGFja0xvY2F0aW9uIGlzIGluIHRoZSBhaUF0dGFja0xpc3QsIGNob3NlIGFub3RoZXIgYXR0YWNrTG9jYXRpb24uXG4gICAgd2hpbGUgKGFpQXR0YWNrTGlzdC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShhdHRhY2tMb2NhdGlvbikpKSB7XG4gICAgICBhdHRhY2tMb2NhdGlvbiA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICB9XG4gICAgYWlBdHRhY2tMaXN0LnB1c2goSlNPTi5zdHJpbmdpZnkoYXR0YWNrTG9jYXRpb24pKTtcbiAgICByZXR1cm4gdGFyZ2V0UGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja0xvY2F0aW9uKTtcbiAgfTtcblxuICBsZXQgYWxsQUlTaGlwTG9jYXRpb25zID0gW107XG5cbiAgY29uc3QgY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24gPSAoXG4gICAgc2l6ZSA9IDUsXG4gICAgc2hpcEhlYWQgPSBnZXRSYW5kb21Db29yZGluYXRlKClcbiAgKSA9PiB7XG4gICAgbGV0IGxlbmd0aCA9IHNpemUgLSAxO1xuICAgIGxldCBzaGlwTG9jYXRpb25zID0gW107XG5cbiAgICB3aGlsZSAoXG4gICAgICBhbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoc2hpcEhlYWQpKSB8fFxuICAgICAgc2hpcEhlYWRbMF0gKyBsZW5ndGggPj0gOVxuICAgICkge1xuICAgICAgc2hpcEhlYWQgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgfVxuXG4gICAgbGV0IGkgPSBzaGlwSGVhZFswXTtcbiAgICBsZXQgaiA9IHNoaXBIZWFkWzFdO1xuICAgIGxldCBrID0gc2hpcEhlYWRbMF0gKyBsZW5ndGg7XG5cbiAgICB3aGlsZSAoaSAhPSBrKSB7XG4gICAgICBpKys7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBkdXBsaWNhdGUsIHJlY3Vyc2l2ZWx5IHN0YXJ0IHRoZSBmdW5jdGlvbiBhZ2FpblxuICAgICAgaWYgKGFsbEFJU2hpcExvY2F0aW9ucy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSwgal0pKSkge1xuICAgICAgICBzaGlwTG9jYXRpb25zID0gW107XG4gICAgICAgIHJldHVybiBjcmVhdGVWYWxpZFNoaXBMb2NhdGlvbihzaXplKTtcbiAgICAgIH1cbiAgICAgIHNoaXBMb2NhdGlvbnMucHVzaChbaSwgal0pO1xuICAgICAgLy8gY29uc29sZS5sb2coc2hpcExvY2F0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHNoaXBoZWFkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcbiAgICBzaGlwTG9jYXRpb25zLnNwbGljZSgwLCAwLCBzaGlwSGVhZCk7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcExvY2F0aW9ucyk7XG5cbiAgICBzaGlwTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICBhbGxBSVNoaXBMb2NhdGlvbnMucHVzaChKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBMb2NhdGlvbnM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgYWlBdHRhY2tMaXN0LFxuICAgIGF0dGFjayxcbiAgICBjcmVhdGVWYWxpZFNoaXBMb2NhdGlvbixcbiAgICBhbGxBSVNoaXBMb2NhdGlvbnMsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlKCkge1xuICBsZXQgY29PcmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgY29PcmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIHJldHVybiBbY29PcmRYLCBjb09yZFldO1xufVxuXG5leHBvcnQgeyBBSSB9O1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IHRpbWVzSGl0ID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuICsrdGltZXNIaXQ7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChsZW5ndGggPT0gdGltZXNIaXQpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGlmIChsZW5ndGggIT0gdGltZXNIaXQpIHJldHVybiBzdW5rO1xuICB9O1xuXG4gIGNvbnN0IHNob3dIaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpbWVzSGl0O1xuICB9O1xuXG4gIHJldHVybiB7IGxlbmd0aCwgaGl0LCBpc1N1bmssIHNob3dIaXQgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9iYXR0bGVTaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgLy8gc2hpcExpc3RzIHdpbGwgYmUgdXNlZCBmb3IgdHJhY2tpbmcgc2hpcHMgYW5kIHRvIGJlIGFibGUgdG8gdXNlIGFjdGlvbnMgb24gdGhlbS5cbiAgbGV0IHNoaXBMaXN0cyA9IFtdO1xuICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcbiAgbGV0IHNoaXBMb2NhdGlvbkxpc3RzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvT3JkKSA9PiB7XG4gICAgbGV0IHNoaXBMZW5ndGggPSBjb09yZC5sZW5ndGg7XG5cbiAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgLy8gbG9jYXRpb24gaXMgY29udmVydGVkIGludG8gc3RyaW5nIHRvIHVzZSAuaW5jbHVkZXMgbWV0aG9kLlxuICAgIHNoaXAubG9jYXRpb24gPSBKU09OLnN0cmluZ2lmeShjb09yZCk7XG5cbiAgICBzaGlwTGlzdHMucHVzaChzaGlwKTtcblxuICAgIGNvT3JkLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICBzaGlwTG9jYXRpb25MaXN0cy5wdXNoKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvT3JkKSA9PiB7XG4gICAgLy8gZmlsdGVyIHRocm91Z2ggc2hpcCdzIGxvY2F0aW9uIGNvb3JkaW5hdGUgdG8gZmluZCBpZiBhdHRhY2sgY29vcmRpbmF0ZSBoaXRzIHNoaXAuXG4gICAgLy8gaWYgYXR0YWNrIGhpdHMgc2hpcCwgdGFyZ2V0U2hpcCB3aWxsIGdldCB0aGUgJ3NoaXAgb2JqZWN0JyB0byBzZW5kIGhpdCBmdW5jdGlvblxuICAgIC8vIHRvIHRoZSAnc2hpcCBvYmplY3QnIG9yIHRoZSBhdHRhY2sgY29vcmRpbmF0ZSBnb2VzIGludG8gbWlzc2VkU2hvdC5cbiAgICBsZXQgdGFyZ2V0U2hpcCA9IHNoaXBMaXN0cy5maWx0ZXIoKHNoaXApID0+XG4gICAgICBzaGlwLmxvY2F0aW9uLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvT3JkKSlcbiAgICApO1xuXG4gICAgaWYgKHRhcmdldFNoaXAubGVuZ3RoID4gMCkge1xuICAgICAgdGFyZ2V0U2hpcFswXS5oaXQoKTtcbiAgICAgIHJldHVybiB0YXJnZXRTaGlwWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaXNzZWRTaG90cy5wdXNoKGNvT3JkKTtcbiAgICAgIHJldHVybiBjb09yZDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBzaGlwc1N1bmsgPSBzaGlwTGlzdHMuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIC8vIERvbid0IGZvcmdldCB0byB3cml0ZSByZXR1cm4gbmV4dCB0aW1lLiA7KVxuICAgICAgcmV0dXJuIHNoaXAuaXNTdW5rKCkgPT0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwc1N1bms7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBzaGlwTGlzdHMsXG4gICAgbWlzc2VkU2hvdHMsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHNoaXBMb2NhdGlvbkxpc3RzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgYXR0YWNrID0gKGNvT3JkLCBhbm90aGVyUGxheWVyKSA9PiB7XG4gICAgcmV0dXJuIGFub3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29PcmQpO1xuICB9O1xuXG4gIHJldHVybiB7IGdhbWVib2FyZCwgYXR0YWNrIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImZ1bmN0aW9uIHVpR2FtZUJvYXJkKGlkKSB7XG4gIGNvbnN0IGdhbWVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID1cbiAgICBcImhlaWdodDogNDIwcHg7IHdpZHRoOiA0MDBweDsgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgbGV0IGNvbHVtbkRpdiA9IGFkZENvbHVtbkRpdihnYW1lQm9hcmRDb250YWluZXIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgYWRkUm93RGl2KGNvbHVtbkRpdiwgW2ksIGpdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2FtZUJvYXJkQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyB1aUdhbWVCb2FyZCB9O1xuXG5mdW5jdGlvbiBhZGRDb2x1bW5EaXYocGFyZW50RGl2KSB7XG4gIGNvbnN0IGNvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgY29sdW1uRGl2LmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5EaXZcIik7XG4gIGNvbHVtbkRpdi5zdHlsZS5jc3NUZXh0ID1cbiAgICBcImhlaWdodDogNDBweDsgd2lkdGg6IDQwMHB4OyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IGRpc3BsYXk6ZmxleFwiO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoY29sdW1uRGl2KTtcblxuICByZXR1cm4gY29sdW1uRGl2O1xufVxuXG5mdW5jdGlvbiBhZGRSb3dEaXYocGFyZW50RGl2LCBhcnJheSkge1xuICAvLyBkbyBub3Qga25vdyB3aHkgSlNPTi5zdHJpbmdmeSBpcyBuZWVkZWQgdHdpY2UgaGVyZS5cbiAgYXJyYXkgPSBKU09OLnN0cmluZ2lmeShhcnJheSk7XG4gIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoXCJyb3dEaXZcIik7XG4gIHJvd0Rpdi5zdHlsZS5jc3NUZXh0ID0gXCJoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4OyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XCI7XG4gIHJvd0Rpdi50ZXh0Q29udGVudCA9IGFycmF5O1xuICAvLyByb3dEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgcm93RGl2LmNsYXNzTGlzdC5hZGQoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHJvd0Rpdik7XG5cbiAgcmV0dXJuIHJvd0Rpdjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBBSSB9IGZyb20gXCIuL2FpXCI7XG5pbXBvcnQgeyB1aUdhbWVCb2FyZCB9IGZyb20gXCIuL3VpR2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vYmF0dGxlU2hpcFwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5ib2R5LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXCI7XG5ib2R5LmFwcGVuZENoaWxkKHVpR2FtZUJvYXJkKFwicGxheWVyXCIpKTtcbmJvZHkuYXBwZW5kQ2hpbGQodWlHYW1lQm9hcmQoXCJhaVwiKSk7XG5cbi8vIGNyZWF0ZSBwbGF5ZXIgYW5kIGFpIHNoaXBzXG5sZXQgcGxheWVyID0gUGxheWVyKCk7XG5sZXQgcF9zaGlwMSA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgWzIsIDRdLFxuICBbMiwgNV0sXG5dKTtcbmxldCBwX3NoaXAyID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICBbMywgNF0sXG4gIFszLCA1XSxcbiAgWzMsIDZdLFxuXSk7XG5sZXQgcF9zaGlwMyA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgWzAsIDFdLFxuICBbMCwgMl0sXG4gIFswLCAzXSxcbl0pO1xubGV0IHBfc2hpcDQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gIFs3LCA1XSxcbiAgWzcsIDZdLFxuICBbNywgN10sXG4gIFs3LCA4XSxcbl0pO1xubGV0IHBfc2hpcDUgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gIFs1LCAxXSxcbiAgWzUsIDJdLFxuICBbNSwgM10sXG4gIFs1LCA0XSxcbiAgWzUsIDVdLFxuXSk7XG5cbmxldCBhaSA9IEFJKCk7XG5sZXQgbG9jYXRpb24xID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oNSk7XG5sZXQgbG9jYXRpb24yID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oNCk7XG5sZXQgbG9jYXRpb24zID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oMyk7XG5sZXQgbG9jYXRpb240ID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oMyk7XG5sZXQgbG9jYXRpb241ID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oMik7XG5cbmxldCBhaV9zaGlwMSA9IGFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb24xKTtcbmxldCBhaV9zaGlwMiA9IGFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb24yKTtcbmxldCBhaV9zaGlwMyA9IGFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb24zKTtcbmxldCBhaV9zaGlwNCA9IGFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb240KTtcbmxldCBhaV9zaGlwNSA9IGFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb241KTtcblxuLy8gcGxheWVyIGJvYXJkXG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllckJvYXJkKCkge1xuICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBMb2NhdGlvbkxpc3RzKTtcbiAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJcIik7XG4gIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkKTtcblxuICBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBMb2NhdGlvbkxpc3RzLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKTtcbiAgICAvLyBbMF0gaW5kaWNhdGVzIGNlbGxzIGZyb20gcGxheWVyIGJvYXJkXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSlbMF07XG4gICAgLy8gY29uc29sZS5sb2coY2VsbCk7XG4gICAgY2VsbC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgIFwiYmFja2dyb3VuZDogZ3JlZW47IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweFwiO1xuICB9KTtcbn1cbnBvcHVsYXRlUGxheWVyQm9hcmQoKTtcblxuLy8gYWkgYm9hcmQgcHJpbnRpbmcgZm9yIHRlc3RcbmZ1bmN0aW9uIHBvcHVsYXRlQWlCb2FyZCgpIHtcbiAgY29uc29sZS5sb2coYWkuYWxsQUlTaGlwTG9jYXRpb25zKTtcbiAgYWkuYWxsQUlTaGlwTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgbGV0IHggPSBKU09OLnN0cmluZ2lmeShsb2NhdGlvbik7XG4gICAgLy8gWzFdIGluZGljYXRlcyBjZWxscyBmcm9tIGFpIGJvYXJkXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHgpWzFdO1xuICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgIGNlbGwuc3R5bGUuY3NzVGV4dCA9XG4gICAgICBcImJhY2tncm91bmQ6IGdyZWVuOyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHhcIjtcbiAgfSk7XG59XG5wb3B1bGF0ZUFpQm9hcmQoKTtcblxuLy8gZ2FtZSBsb29wXG5jb25zdCBhaUdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWlcIik7XG5cbmFpR2FtZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoXG4gICAgcGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSAhPSB0cnVlICYmXG4gICAgYWkuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpICE9IHRydWVcbiAgKSB7XG4gICAgLy8gUGxheWVyIGF0dGFja3MgQUlcbiAgICAvLyBjb252ZXJ0IGNlbGwgY2xhc3Mgc3RyaW5nIHRvIGFycmF5XG4gICAgbGV0IHBsYXllclRhcmdldCA9IFtcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTmFtZVsyXSksXG4gICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc05hbWVbNF0pLFxuICAgIF07XG5cbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJUYXJnZXQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFpLmFsbEFJU2hpcExvY2F0aW9ucy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShwbGF5ZXJUYXJnZXQpKSk7XG4gICAgLy8gaGl0cyBwYWludHMgdGFyZ2V0IHJlZCwgbWlzc2VzIHBhaW50cyB0YXJnZXQgcmVkLlxuICAgIGlmIChhaS5hbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocGxheWVyVGFyZ2V0KSkpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmNzc1RleHQgPVxuICAgICAgICBcImJhY2tncm91bmQ6IHllbGxvdzsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmNzc1RleHQgPVxuICAgICAgICBcImJhY2tncm91bmQ6IHJlZDsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG4gICAgfVxuICAgIHBsYXllci5hdHRhY2socGxheWVyVGFyZ2V0LCBhaSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzKTtcblxuICAgIC8vIEFpIGF0dGFja3MgUGxheWVyIChhZnRlciBwbGF5ZXIgYXR0YWNrcykgYW5kIHByaW50IGF0dGFja3Mgb24gZ2FtZWJvYXJkLlxuICAgIGFpLmF0dGFjayhwbGF5ZXIpO1xuXG4gICAgLy8gZmluZCB0aGUgbGF0ZXN0IGF0dGFjayAod2hpY2ggaXMgbGFzdCBpdGVtIG9uIHRoZSBsaXN0KVxuICAgIGxldCB0YXJnZXQgPSBhaS5haUF0dGFja0xpc3RbYWkuYWlBdHRhY2tMaXN0Lmxlbmd0aCAtIDFdO1xuICAgIHRhcmdldCA9IEpTT04uc3RyaW5naWZ5KHRhcmdldCk7XG5cbiAgICBsZXQgYWlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRhcmdldClbMF07XG4gICAgLy8gcHJpbnQgc3VjY2Vzc2Z1bCBhdHRhY2sgeWVsbG93IGFuZCB1bnN1Y2Nlc3NmdWwgcmVkXG4gICAgaWYgKGFpVGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPT0gXCJncmVlblwiKSB7XG4gICAgICBhaVRhcmdldC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgXCJiYWNrZ3JvdW5kOiB5ZWxsb3c7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBhaVRhcmdldC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgXCJiYWNrZ3JvdW5kOiByZWQ7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweFwiO1xuICAgICAgLy8gY29uc29sZS5sb2coYWlUYXJnZXQpO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc05hbWUpO1xuXG4gIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgYWxlcnQoXCJBaSB3aW5zXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyXCIpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWlcIikucmVtb3ZlKCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh1aUdhbWVCb2FyZChcInBsYXllclwiKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh1aUdhbWVCb2FyZChcImFpXCIpKTtcbiAgICAvLyBhaS5haUF0dGFja0xpc3QgPSBbXTtcbiAgICBwb3B1bGF0ZVBsYXllckJvYXJkKCk7XG4gICAgcG9wdWxhdGVBaUJvYXJkKCk7XG4gIH1cblxuICBpZiAoYWkuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgYWxlcnQoXCJQbGF5ZXIgd2luc1wiKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=