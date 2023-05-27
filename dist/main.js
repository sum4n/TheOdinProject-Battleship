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

// ai board
console.log(ai.allAIShipLocations);
ai.allAIShipLocations.forEach((location) => {
  let x = JSON.stringify(location);
  // [1] indicates cells from ai board
  let cell = document.getElementsByClassName(x)[1];
  // console.log(cell);
  cell.style.cssText =
    "background: green; border: 1px solid red; height: 40px; width: 40px";
});

// game loop
const aiGameBoard = document.querySelector("#ai");

aiGameBoard.addEventListener("click", (e) => {
  // console.log(e.target.className);
  let attackedCell = e.target;
  attackedCell.style.cssText =
    "background: green; border: 1px solid red; height: 40px; width: 40px";

  player.attack(e.target.className, ai);

  // console.log(player.gameboard.missedShots);

  // ai attacks player (after player attacks) and print attacks on gameboard.
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

  // console.log(ai_ship5.showHit());
  // console.log(ai_ship4.showHit());
  // console.log(ai_ship3.showHit());
  // console.log(ai_ship2.showHit());
  // console.log(ai_ship1.showHit());

  if (player.gameboard.allShipsSunk()) {
    console.log("Ai wins");
  }

  if (ai.gameboard.allShipsSunk()) {
    console.log("Player wins");
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDO0FBQ0Esa0JBQWtCLHFEQUFTOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWM7Ozs7Ozs7Ozs7Ozs7OztBQzFFZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJvQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsaURBQUk7QUFDbkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RG1COztBQUV4QztBQUNBLGtCQUFrQixxREFBUzs7QUFFM0I7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ1psQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjLHdCQUF3Qjs7QUFFMUQsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWMsdUJBQXVCO0FBQ3hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxhQUFhLHNCQUFzQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDeENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDUjtBQUNrQjtBQUNSOztBQUVwQztBQUNBLHFDQUFxQztBQUNyQyxpQkFBaUIseURBQVc7QUFDNUIsaUJBQWlCLHlEQUFXOztBQUU1QjtBQUNBLGFBQWEsK0NBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsdUNBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QixjQUFjO0FBQzdELENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUIsY0FBYztBQUM3RCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCLGNBQWM7O0FBRTdEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QixjQUFjO0FBQ2hFLElBQUk7QUFDSjtBQUNBLHdCQUF3Qix1QkFBdUIsY0FBYztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2FpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvYmF0dGxlU2hpcC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3VpR2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5jb25zdCBBSSA9ICgpID0+IHtcbiAgbGV0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGxldCBhaUF0dGFja0xpc3QgPSBbXTtcblxuICBjb25zdCBhdHRhY2sgPSAodGFyZ2V0UGxheWVyLCBhdHRhY2tMb2NhdGlvbiA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKSkgPT4ge1xuICAgIC8vIGlmIHRoZSBhdHRhY2tMb2NhdGlvbiBpcyBpbiB0aGUgYWlBdHRhY2tMaXN0LCBjaG9zZSBhbm90aGVyIGF0dGFja0xvY2F0aW9uLlxuICAgIHdoaWxlIChhaUF0dGFja0xpc3QuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoYXR0YWNrTG9jYXRpb24pKSkge1xuICAgICAgYXR0YWNrTG9jYXRpb24gPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgfVxuICAgIGFpQXR0YWNrTGlzdC5wdXNoKEpTT04uc3RyaW5naWZ5KGF0dGFja0xvY2F0aW9uKSk7XG4gICAgcmV0dXJuIHRhcmdldFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2tMb2NhdGlvbik7XG4gIH07XG5cbiAgbGV0IGFsbEFJU2hpcExvY2F0aW9ucyA9IFtdO1xuXG4gIGNvbnN0IGNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uID0gKFxuICAgIHNpemUgPSA1LFxuICAgIHNoaXBIZWFkID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpXG4gICkgPT4ge1xuICAgIGxldCBsZW5ndGggPSBzaXplIC0gMTtcbiAgICBsZXQgc2hpcExvY2F0aW9ucyA9IFtdO1xuXG4gICAgd2hpbGUgKFxuICAgICAgYWxsQUlTaGlwTG9jYXRpb25zLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KHNoaXBIZWFkKSkgfHxcbiAgICAgIHNoaXBIZWFkWzBdICsgbGVuZ3RoID49IDlcbiAgICApIHtcbiAgICAgIHNoaXBIZWFkID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgIH1cblxuICAgIGxldCBpID0gc2hpcEhlYWRbMF07XG4gICAgbGV0IGogPSBzaGlwSGVhZFsxXTtcbiAgICBsZXQgayA9IHNoaXBIZWFkWzBdICsgbGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgIT0gaykge1xuICAgICAgaSsrO1xuICAgICAgLy8gaWYgdGhlcmUgaXMgZHVwbGljYXRlLCByZWN1cnNpdmVseSBzdGFydCB0aGUgZnVuY3Rpb24gYWdhaW5cbiAgICAgIGlmIChhbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW2ksIGpdKSkpIHtcbiAgICAgICAgc2hpcExvY2F0aW9ucyA9IFtdO1xuICAgICAgICByZXR1cm4gY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oc2l6ZSk7XG4gICAgICB9XG4gICAgICBzaGlwTG9jYXRpb25zLnB1c2goW2ksIGpdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBMb2NhdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGFkZCBzaGlwaGVhZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG4gICAgc2hpcExvY2F0aW9ucy5zcGxpY2UoMCwgMCwgc2hpcEhlYWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBMb2NhdGlvbnMpO1xuXG4gICAgc2hpcExvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgYWxsQUlTaGlwTG9jYXRpb25zLnB1c2goSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwTG9jYXRpb25zO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGFpQXR0YWNrTGlzdCxcbiAgICBhdHRhY2ssXG4gICAgY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24sXG4gICAgYWxsQUlTaGlwTG9jYXRpb25zLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpIHtcbiAgbGV0IGNvT3JkWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IGNvT3JkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICByZXR1cm4gW2NvT3JkWCwgY29PcmRZXTtcbn1cblxuZXhwb3J0IHsgQUkgfTtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCB0aW1lc0hpdCA9IDA7XG4gIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHJldHVybiArK3RpbWVzSGl0O1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAobGVuZ3RoID09IHRpbWVzSGl0KSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoICE9IHRpbWVzSGl0KSByZXR1cm4gc3VuaztcbiAgfTtcblxuICBjb25zdCBzaG93SGl0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aW1lc0hpdDtcbiAgfTtcblxuICByZXR1cm4geyBsZW5ndGgsIGhpdCwgaXNTdW5rLCBzaG93SGl0IH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vYmF0dGxlU2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIC8vIHNoaXBMaXN0cyB3aWxsIGJlIHVzZWQgZm9yIHRyYWNraW5nIHNoaXBzIGFuZCB0byBiZSBhYmxlIHRvIHVzZSBhY3Rpb25zIG9uIHRoZW0uXG4gIGxldCBzaGlwTGlzdHMgPSBbXTtcbiAgbGV0IG1pc3NlZFNob3RzID0gW107XG4gIGxldCBzaGlwTG9jYXRpb25MaXN0cyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb09yZCkgPT4ge1xuICAgIGxldCBzaGlwTGVuZ3RoID0gY29PcmQubGVuZ3RoO1xuXG4gICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuICAgIC8vIGxvY2F0aW9uIGlzIGNvbnZlcnRlZCBpbnRvIHN0cmluZyB0byB1c2UgLmluY2x1ZGVzIG1ldGhvZC5cbiAgICBzaGlwLmxvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkoY29PcmQpO1xuXG4gICAgc2hpcExpc3RzLnB1c2goc2hpcCk7XG5cbiAgICBjb09yZC5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgc2hpcExvY2F0aW9uTGlzdHMucHVzaChKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb09yZCkgPT4ge1xuICAgIC8vIGZpbHRlciB0aHJvdWdoIHNoaXAncyBsb2NhdGlvbiBjb29yZGluYXRlIHRvIGZpbmQgaWYgYXR0YWNrIGNvb3JkaW5hdGUgaGl0cyBzaGlwLlxuICAgIC8vIGlmIGF0dGFjayBoaXRzIHNoaXAsIHRhcmdldFNoaXAgd2lsbCBnZXQgdGhlICdzaGlwIG9iamVjdCcgdG8gc2VuZCBoaXQgZnVuY3Rpb25cbiAgICAvLyB0byB0aGUgJ3NoaXAgb2JqZWN0JyBvciB0aGUgYXR0YWNrIGNvb3JkaW5hdGUgZ29lcyBpbnRvIG1pc3NlZFNob3QuXG4gICAgbGV0IHRhcmdldFNoaXAgPSBzaGlwTGlzdHMuZmlsdGVyKChzaGlwKSA9PlxuICAgICAgc2hpcC5sb2NhdGlvbi5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb09yZCkpXG4gICAgKTtcblxuICAgIGlmICh0YXJnZXRTaGlwLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhcmdldFNoaXBbMF0uaGl0KCk7XG4gICAgICByZXR1cm4gdGFyZ2V0U2hpcFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2VkU2hvdHMucHVzaChjb09yZCk7XG4gICAgICByZXR1cm4gY29PcmQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc2hpcHNTdW5rID0gc2hpcExpc3RzLmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICAvLyBEb24ndCBmb3JnZXQgdG8gd3JpdGUgcmV0dXJuIG5leHQgdGltZS4gOylcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpID09IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHNTdW5rO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2hpcExpc3RzLFxuICAgIG1pc3NlZFNob3RzLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBzaGlwTG9jYXRpb25MaXN0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgbGV0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IGF0dGFjayA9IChjb09yZCwgYW5vdGhlclBsYXllcikgPT4ge1xuICAgIHJldHVybiBhbm90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvT3JkKTtcbiAgfTtcblxuICByZXR1cm4geyBnYW1lYm9hcmQsIGF0dGFjayB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJmdW5jdGlvbiB1aUdhbWVCb2FyZChpZCkge1xuICBjb25zdCBnYW1lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lQm9hcmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBnYW1lQm9hcmRDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9XG4gICAgXCJoZWlnaHQ6IDQyMHB4OyB3aWR0aDogNDAwcHg7IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1wiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgIGxldCBjb2x1bW5EaXYgPSBhZGRDb2x1bW5EaXYoZ2FtZUJvYXJkQ29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgIGFkZFJvd0Rpdihjb2x1bW5EaXYsIFtpLCBqXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdhbWVCb2FyZENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgdWlHYW1lQm9hcmQgfTtcblxuZnVuY3Rpb24gYWRkQ29sdW1uRGl2KHBhcmVudERpdikge1xuICBjb25zdCBjb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyAgIGNvbHVtbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uRGl2XCIpO1xuICBjb2x1bW5EaXYuc3R5bGUuY3NzVGV4dCA9XG4gICAgXCJoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MDBweDsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBkaXNwbGF5OmZsZXhcIjtcbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGNvbHVtbkRpdik7XG5cbiAgcmV0dXJuIGNvbHVtbkRpdjtcbn1cblxuZnVuY3Rpb24gYWRkUm93RGl2KHBhcmVudERpdiwgYXJyYXkpIHtcbiAgLy8gZG8gbm90IGtub3cgd2h5IEpTT04uc3RyaW5nZnkgaXMgbmVlZGVkIHR3aWNlIGhlcmUuXG4gIGFycmF5ID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xuICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKFwicm93RGl2XCIpO1xuICByb3dEaXYuc3R5bGUuY3NzVGV4dCA9IFwiaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweDsgYm9yZGVyOiAxcHggc29saWQgcmVkO1wiO1xuICByb3dEaXYudGV4dENvbnRlbnQgPSBhcnJheTtcbiAgLy8gcm93RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xuXG4gIHJldHVybiByb3dEaXY7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9haVwiO1xuaW1wb3J0IHsgdWlHYW1lQm9hcmQgfSBmcm9tIFwiLi91aUdhbWVCb2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL2JhdHRsZVNoaXBcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuYm9keS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFwiO1xuYm9keS5hcHBlbmRDaGlsZCh1aUdhbWVCb2FyZChcInBsYXllclwiKSk7XG5ib2R5LmFwcGVuZENoaWxkKHVpR2FtZUJvYXJkKFwiYWlcIikpO1xuXG4vLyBjcmVhdGUgcGxheWVyIGFuZCBhaSBzaGlwc1xubGV0IHBsYXllciA9IFBsYXllcigpO1xubGV0IHBfc2hpcDEgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gIFsyLCA0XSxcbiAgWzIsIDVdLFxuXSk7XG5sZXQgcF9zaGlwMiA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFtcbiAgWzMsIDRdLFxuICBbMywgNV0sXG4gIFszLCA2XSxcbl0pO1xubGV0IHBfc2hpcDMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbXG4gIFswLCAxXSxcbiAgWzAsIDJdLFxuICBbMCwgM10sXG5dKTtcbmxldCBwX3NoaXA0ID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICBbNywgNV0sXG4gIFs3LCA2XSxcbiAgWzcsIDddLFxuICBbNywgOF0sXG5dKTtcbmxldCBwX3NoaXA1ID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoW1xuICBbNSwgMV0sXG4gIFs1LCAyXSxcbiAgWzUsIDNdLFxuICBbNSwgNF0sXG4gIFs1LCA1XSxcbl0pO1xuXG5sZXQgYWkgPSBBSSgpO1xubGV0IGxvY2F0aW9uMSA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDUpO1xubGV0IGxvY2F0aW9uMiA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDQpO1xubGV0IGxvY2F0aW9uMyA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDMpO1xubGV0IGxvY2F0aW9uNCA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDMpO1xubGV0IGxvY2F0aW9uNSA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDIpO1xuXG5sZXQgYWlfc2hpcDEgPSBhaS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uMSk7XG5sZXQgYWlfc2hpcDIgPSBhaS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uMik7XG5sZXQgYWlfc2hpcDMgPSBhaS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uMyk7XG5sZXQgYWlfc2hpcDQgPSBhaS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uNCk7XG5sZXQgYWlfc2hpcDUgPSBhaS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uNSk7XG5cbi8vIHBsYXllciBib2FyZFxuY29uc29sZS5sb2cocGxheWVyLmdhbWVib2FyZC5zaGlwTG9jYXRpb25MaXN0cyk7XG5sZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclwiKTtcbi8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkKTtcblxucGxheWVyLmdhbWVib2FyZC5zaGlwTG9jYXRpb25MaXN0cy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpO1xuICAvLyBbMF0gaW5kaWNhdGVzIGNlbGxzIGZyb20gcGxheWVyIGJvYXJkXG4gIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpWzBdO1xuICAvLyBjb25zb2xlLmxvZyhjZWxsKTtcbiAgY2VsbC5zdHlsZS5jc3NUZXh0ID1cbiAgICBcImJhY2tncm91bmQ6IGdyZWVuOyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHhcIjtcbn0pO1xuXG4vLyBhaSBib2FyZFxuY29uc29sZS5sb2coYWkuYWxsQUlTaGlwTG9jYXRpb25zKTtcbmFpLmFsbEFJU2hpcExvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICBsZXQgeCA9IEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKTtcbiAgLy8gWzFdIGluZGljYXRlcyBjZWxscyBmcm9tIGFpIGJvYXJkXG4gIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh4KVsxXTtcbiAgLy8gY29uc29sZS5sb2coY2VsbCk7XG4gIGNlbGwuc3R5bGUuY3NzVGV4dCA9XG4gICAgXCJiYWNrZ3JvdW5kOiBncmVlbjsgYm9yZGVyOiAxcHggc29saWQgcmVkOyBoZWlnaHQ6IDQwcHg7IHdpZHRoOiA0MHB4XCI7XG59KTtcblxuLy8gZ2FtZSBsb29wXG5jb25zdCBhaUdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWlcIik7XG5cbmFpR2FtZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc05hbWUpO1xuICBsZXQgYXR0YWNrZWRDZWxsID0gZS50YXJnZXQ7XG4gIGF0dGFja2VkQ2VsbC5zdHlsZS5jc3NUZXh0ID1cbiAgICBcImJhY2tncm91bmQ6IGdyZWVuOyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHhcIjtcblxuICBwbGF5ZXIuYXR0YWNrKGUudGFyZ2V0LmNsYXNzTmFtZSwgYWkpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQubWlzc2VkU2hvdHMpO1xuXG4gIC8vIGFpIGF0dGFja3MgcGxheWVyIChhZnRlciBwbGF5ZXIgYXR0YWNrcykgYW5kIHByaW50IGF0dGFja3Mgb24gZ2FtZWJvYXJkLlxuICBhaS5hdHRhY2socGxheWVyKTtcblxuICAvLyBmaW5kIHRoZSBsYXRlc3QgYXR0YWNrICh3aGljaCBpcyBsYXN0IGl0ZW0gb24gdGhlIGxpc3QpXG4gIGxldCB0YXJnZXQgPSBhaS5haUF0dGFja0xpc3RbYWkuYWlBdHRhY2tMaXN0Lmxlbmd0aCAtIDFdO1xuICB0YXJnZXQgPSBKU09OLnN0cmluZ2lmeSh0YXJnZXQpO1xuXG4gIGxldCBhaVRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGFyZ2V0KVswXTtcbiAgLy8gcHJpbnQgc3VjY2Vzc2Z1bCBhdHRhY2sgeWVsbG93IGFuZCB1bnN1Y2Nlc3NmdWwgcmVkXG4gIGlmIChhaVRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID09IFwiZ3JlZW5cIikge1xuICAgIGFpVGFyZ2V0LnN0eWxlLmNzc1RleHQgPVxuICAgICAgXCJiYWNrZ3JvdW5kOiB5ZWxsb3c7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweFwiO1xuICB9IGVsc2Uge1xuICAgIGFpVGFyZ2V0LnN0eWxlLmNzc1RleHQgPVxuICAgICAgXCJiYWNrZ3JvdW5kOiByZWQ7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweFwiO1xuICAgIC8vIGNvbnNvbGUubG9nKGFpVGFyZ2V0KTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKGFpX3NoaXA1LnNob3dIaXQoKSk7XG4gIC8vIGNvbnNvbGUubG9nKGFpX3NoaXA0LnNob3dIaXQoKSk7XG4gIC8vIGNvbnNvbGUubG9nKGFpX3NoaXAzLnNob3dIaXQoKSk7XG4gIC8vIGNvbnNvbGUubG9nKGFpX3NoaXAyLnNob3dIaXQoKSk7XG4gIC8vIGNvbnNvbGUubG9nKGFpX3NoaXAxLnNob3dIaXQoKSk7XG5cbiAgaWYgKHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBjb25zb2xlLmxvZyhcIkFpIHdpbnNcIik7XG4gIH1cblxuICBpZiAoYWkuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgY29uc29sZS5sb2coXCJQbGF5ZXIgd2luc1wiKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=