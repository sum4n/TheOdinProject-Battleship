/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(28, 60, 91);\n}\n\n#gameBoardDiv {\n  display: flex;\n  justify-content: space-around;\n  height: 500px;\n  border: 1px solid blue;\n  margin: 10px;\n}\n\n/* player and ai board */\n#player,\n#ai,\n#dragShipContainer {\n  height: 420px;\n  width: 400px;\n  text-align: center;\n  color: white;\n}\n\n#dropShipDiv {\n  border: 2px solid red;\n  height: 415px;\n  width: 410px;\n}\n\n.columnCell {\n  display: flex;\n  height: 40px;\n  width: 400px;\n  border: 1px solid red;\n}\n\n.playerCell,\n.aiCell,\n.shipCell,\n.hitCell,\n.missCell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid red;\n}\n\n.shipCell {\n  background-color: green;\n}\n\n.hitCell {\n  background-color: yellow;\n}\n\n.missCell {\n  background-color: rgb(218, 137, 137);\n}\n\n.dragDiv {\n  margin-bottom: 10px;\n}\n\n.dragHorizontal {\n  display: flex;\n}\n\n.dragEnter {\n  background-color: green;\n}\n\n.dragCell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid green;\n  background-color: rgb(4, 255, 251);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA,wBAAwB;AACxB;;;EAGE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA;;;;;EAKE,YAAY;EACZ,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kCAAkC;AACpC","sourcesContent":["body {\n  background-color: rgb(28, 60, 91);\n}\n\n#gameBoardDiv {\n  display: flex;\n  justify-content: space-around;\n  height: 500px;\n  border: 1px solid blue;\n  margin: 10px;\n}\n\n/* player and ai board */\n#player,\n#ai,\n#dragShipContainer {\n  height: 420px;\n  width: 400px;\n  text-align: center;\n  color: white;\n}\n\n#dropShipDiv {\n  border: 2px solid red;\n  height: 415px;\n  width: 410px;\n}\n\n.columnCell {\n  display: flex;\n  height: 40px;\n  width: 400px;\n  border: 1px solid red;\n}\n\n.playerCell,\n.aiCell,\n.shipCell,\n.hitCell,\n.missCell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid red;\n}\n\n.shipCell {\n  background-color: green;\n}\n\n.hitCell {\n  background-color: yellow;\n}\n\n.missCell {\n  background-color: rgb(218, 137, 137);\n}\n\n.dragDiv {\n  margin-bottom: 10px;\n}\n\n.dragHorizontal {\n  display: flex;\n}\n\n.dragEnter {\n  background-color: green;\n}\n\n.dragCell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid green;\n  background-color: rgb(4, 255, 251);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameloop: () => (/* binding */ gameloop),
/* harmony export */   populateAiBoard: () => (/* reexport safe */ _populateAi__WEBPACK_IMPORTED_MODULE_1__.populateAiBoard),
/* harmony export */   populatePlayerBoard: () => (/* reexport safe */ _populatePlayer__WEBPACK_IMPORTED_MODULE_0__.populatePlayerBoard)
/* harmony export */ });
/* harmony import */ var _populatePlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populatePlayer */ "./src/populatePlayer.js");
/* harmony import */ var _populateAi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateAi */ "./src/populateAi.js");



// game loop
function gameloop() {
  const aiGameBoard = document.querySelector("#ai");

  aiGameBoard.addEventListener("click", (e) => {
    // console.log(e.target.classList);
    // Nothing happens if player clicks on ai board's alredy colored cells or
    // when the game has ended.
    if (
      e.target.classList.contains("hitCell") ||
      e.target.classList.contains("missCell") ||
      _populatePlayer__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.allShipsSunk() ||
      _populateAi__WEBPACK_IMPORTED_MODULE_1__.ai.gameboard.allShipsSunk()
    ) {
      return;
    }
    // If the game has not been won player and ai will attackaing each other
    // as well as show the hits and misses on the boards.
    if (
      _populatePlayer__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.allShipsSunk() != true &&
      _populateAi__WEBPACK_IMPORTED_MODULE_1__.ai.gameboard.allShipsSunk() != true
    ) {
      // Player attacks AI
      // convert cell class string to array
      let playerTarget = [
        parseInt(e.target.className[2]),
        parseInt(e.target.className[4]),
      ];

      // console.log(playerTarget);
      // console.log(ai.allAIShipLocations.includes(JSON.stringify(playerTarget)));

      // Hits paints target red, misses paints target red.
      if (_populateAi__WEBPACK_IMPORTED_MODULE_1__.ai.allAIShipLocations.includes(JSON.stringify(playerTarget))) {
        e.target.classList.replace("aiCell", "hitCell");
      } else {
        e.target.classList.replace("aiCell", "missCell");
      }
      _populatePlayer__WEBPACK_IMPORTED_MODULE_0__.player.attack(playerTarget, _populateAi__WEBPACK_IMPORTED_MODULE_1__.ai);

      // console.log(player.gameboard.missedShots);

      // Ai attacks Player (after player attacks) and print attacks on gameboard.
      _populateAi__WEBPACK_IMPORTED_MODULE_1__.ai.attack(_populatePlayer__WEBPACK_IMPORTED_MODULE_0__.player);

      // find the latest attack (which is last item on the list)
      let target = _populateAi__WEBPACK_IMPORTED_MODULE_1__.ai.aiAttackList[_populateAi__WEBPACK_IMPORTED_MODULE_1__.ai.aiAttackList.length - 1];
      target = JSON.stringify(target);

      let aiTarget = document.getElementsByClassName(target)[0];
      // console.log(aiTarget.classList.contains("shipCell"));
      // print successful attack yellow and unsuccessful red
      if (aiTarget.classList.contains("shipCell")) {
        aiTarget.classList.replace("shipCell", "hitCell");
      } else {
        aiTarget.classList.replace("playerCell", "missCell");
        // console.log(aiTarget);
      }
    }
    // console.log(e.target.className);

    // If the game is won, alert winners name.
    if (_populatePlayer__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.allShipsSunk()) {
      alert("Ai wins");
    }

    if (_populateAi__WEBPACK_IMPORTED_MODULE_1__.ai.gameboard.allShipsSunk()) {
      alert("Player wins");
    }
  });
}




/***/ }),

/***/ "./src/generateGameBoardUi.js":
/*!************************************!*\
  !*** ./src/generateGameBoardUi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateDraggablePlayerShips: () => (/* binding */ generateDraggablePlayerShips),
/* harmony export */   generateGameBoardUi: () => (/* binding */ generateGameBoardUi)
/* harmony export */ });
function generateGameBoardUi(id) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.setAttribute("id", id);

  gameBoardContainer.textContent = id + " Board";

  for (let i = 0; i <= 9; i++) {
    let columnDiv = addColumnDiv(gameBoardContainer);
    for (let j = 0; j <= 9; j++) {
      addRowDiv(columnDiv, [i, j], id);
    }
  }

  return gameBoardContainer;
}

function addColumnDiv(parentDiv) {
  const columnDiv = document.createElement("div");
  columnDiv.classList.add("columnCell");

  parentDiv.appendChild(columnDiv);

  return columnDiv;
}

function addRowDiv(parentDiv, array, classname) {
  // do not know why JSON.stringfy is needed twice here.
  array = JSON.stringify(array);
  const rowDiv = document.createElement("div");

  // 'array' class for targetting. Add this before 'cell' for gameLoop() 'index' targeting.
  rowDiv.classList.add(JSON.stringify(array));

  // 'cell' class for styling
  rowDiv.classList.add(classname + "Cell");

  parentDiv.appendChild(rowDiv);

  return rowDiv;
}

function generateDraggablePlayerShips() {
  const dragShipContainer = document.createElement("div");
  dragShipContainer.setAttribute("id", "dragShipContainer");

  dragShipContainer.textContent = "Drag ships. Click to ROTATE.";

  const dropShipDiv = document.createElement("div");
  dropShipDiv.setAttribute("id", "dropShipDiv");

  let ship1 = generateShipCells(2, "ship1");
  let ship2 = generateShipCells(3, "ship2");
  let ship3 = generateShipCells(3, "ship3");
  let ship4 = generateShipCells(4, "ship4");
  let ship5 = generateShipCells(5, "ship5");

  dropShipDiv.append(ship1, ship2, ship3, ship4, ship5);

  dragShipContainer.appendChild(dropShipDiv);

  return dragShipContainer;
}

function generateShipCells(quantity, shipName) {
  const dragShip = document.createElement("div");
  dragShip.setAttribute("draggable", true);
  dragShip.setAttribute("id", shipName);
  dragShip.classList.add("dragDiv", "dragHorizontal");

  for (let i = 1; i <= quantity; i++) {
    let dragCell = document.createElement("div");
    dragCell.classList.add("dragCell");

    dragShip.append(dragCell);
  }

  return dragShip;
}




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

/***/ "./src/populateAi.js":
/*!***************************!*\
  !*** ./src/populateAi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ai: () => (/* binding */ ai),
/* harmony export */   populateAiBoard: () => (/* binding */ populateAiBoard)
/* harmony export */ });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ "./src/ai.js");


let ai = (0,_ai__WEBPACK_IMPORTED_MODULE_0__.AI)();

let location1 = ai.createValidShipLocation(5);
let location2 = ai.createValidShipLocation(4);
let location3 = ai.createValidShipLocation(3);
let location4 = ai.createValidShipLocation(3);
let location5 = ai.createValidShipLocation(2);

ai.gameboard.placeShip(location1);
ai.gameboard.placeShip(location2);
ai.gameboard.placeShip(location3);
ai.gameboard.placeShip(location4);
ai.gameboard.placeShip(location5);

// ai board printing for test
function populateAiBoard() {
  // console.log(ai.allAIShipLocations);
  ai.allAIShipLocations.forEach((location) => {
    let x = JSON.stringify(location);
    // [1] indicates cells from ai board
    let cell = document.getElementsByClassName(x)[1];
    // console.log(cell);
    cell.classList.replace("aiCell", "shipCell");
  });
}




/***/ }),

/***/ "./src/populatePlayer.js":
/*!*******************************!*\
  !*** ./src/populatePlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   populatePlayerBoard: () => (/* binding */ populatePlayerBoard)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


let player = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)();

// player board
function populatePlayerBoard() {
  // console.log(player.gameboard.shipLocationLists);
  let playerBoard = document.getElementById("player");
  // console.log(playerBoard);

  player.gameboard.shipLocationLists.forEach((location) => {
    // console.log(JSON.stringify(location));
    // [0] indicates cells from player board
    let cell = document.getElementsByClassName(JSON.stringify(location))[0];
    cell.classList.replace("playerCell", "shipCell");
  });
}
// populatePlayerBoard();




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _generateGameBoardUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateGameBoardUi */ "./src/generateGameBoardUi.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _populatePlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populatePlayer */ "./src/populatePlayer.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");






const body = document.querySelector("body");

const gameBoardDiv = document.createElement("div");
gameBoardDiv.setAttribute("id", "gameBoardDiv");

gameBoardDiv.appendChild((0,_generateGameBoardUi__WEBPACK_IMPORTED_MODULE_0__.generateGameBoardUi)("player"));

body.appendChild(gameBoardDiv);

gameBoardDiv.appendChild((0,_generateGameBoardUi__WEBPACK_IMPORTED_MODULE_0__.generateDraggablePlayerShips)());

document.querySelectorAll(".dragDiv").forEach((div) => {
  div.addEventListener("click", () => {
    div.classList.toggle("dragHorizontal");
  });
});

// DRAG & DROP
const cells = document.querySelectorAll(".playerCell");
// console.log(cells);

function handleDragStart(e) {
  // console.log(e.target);
  // console.log(this.id);
  // console.log(e.target.classList[0]);
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", [
    e.target.childNodes.length,
    e.target.classList[1],
    e.target.id,
  ]);
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  // console.log(e.target.classList[0]);
  e.target.classList.add("dragEnter");

  markBoardWithDragNDrop(e);
}

function handleDragLeave(e) {
  e.target.classList.remove("dragEnter");

  markBoardWithDragNDrop(e);
}

function handleDrop(e) {
  e.preventDefault();
  // e.target.appendChild(document.getElementById("dragDiv"));
  // console.log(e.target);

  e.target.classList.remove("dragEnter");

  markBoardWithDragNDrop(e);

  let shipLocation = [
    [parseInt(e.target.classList[0][2]), parseInt(e.target.classList[0][4])],
  ];

  let cellCount = parseInt(e.dataTransfer.getData("text")[0]);
  let cellClass = e.dataTransfer.getData("text").slice(2, 16);

  for (let i = 1; i < cellCount; i++) {
    if (cellClass == "dragHorizontal") {
      shipLocation.push([
        parseInt(e.target.classList[0][2]),
        parseInt(e.target.classList[0][4]) + i,
      ]);
    } else {
      shipLocation.push([
        parseInt(e.target.classList[0][2]) + i,
        parseInt(e.target.classList[0][4]),
      ]);
    }
  }

  let checkShipAlreadyThere = shipLocation.some((location) => {
    return _populatePlayer__WEBPACK_IMPORTED_MODULE_2__.player.gameboard.shipLocationLists.includes(
      JSON.stringify(location)
    );
  });

  if (!checkShipAlreadyThere) {
    _populatePlayer__WEBPACK_IMPORTED_MODULE_2__.player.gameboard.placeShip(shipLocation);
    (0,_populatePlayer__WEBPACK_IMPORTED_MODULE_2__.populatePlayerBoard)();

    // console.log(e.dataTransfer.getData("text").slice(-5));
    let shipName = e.dataTransfer.getData("text").slice(-5);
    let dropShipDiv = document.getElementById("dropShipDiv");
    dropShipDiv.removeChild(document.getElementById(shipName));
  }

  // Add ai board and run game after all player ships have been placed.
  if (dropShipDiv.childElementCount == 0) {
    gameBoardDiv.removeChild(document.getElementById("dragShipContainer"));
    gameBoardDiv.appendChild((0,_generateGameBoardUi__WEBPACK_IMPORTED_MODULE_0__.generateGameBoardUi)("ai"));
    // populateAiBoard();
    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.gameloop)();
  }
}

let dragDiv = document.querySelectorAll(".dragDiv");
dragDiv.forEach((div) => {
  div.addEventListener("dragstart", handleDragStart);
});

cells.forEach((cell) => {
  cell.addEventListener("dragover", handleDragOver);
  cell.addEventListener("dragenter", handleDragEnter);
  cell.addEventListener("dragleave", handleDragLeave);
  cell.addEventListener("drop", handleDrop);
});

////////////////////////
(0,_populatePlayer__WEBPACK_IMPORTED_MODULE_2__.populatePlayerBoard)();
// populateAiBoard();
// gameloop();

function markBoardWithDragNDrop(e) {
  // console.log(e.type);
  let cellCount = parseInt(e.dataTransfer.getData("text")[0]);
  // console.log(cellCount);
  let cellClass = e.dataTransfer.getData("text").slice(2, 16);
  // console.log(cellClass);

  for (let i = 1; i < cellCount; i++) {
    let shipLocation;
    if (cellClass == "dragHorizontal") {
      shipLocation = JSON.stringify(
        JSON.stringify([
          parseInt(e.target.classList[0][2]),
          parseInt(e.target.classList[0][4]) + i,
        ])
      );
    } else {
      shipLocation = JSON.stringify(
        JSON.stringify([
          parseInt(e.target.classList[0][2]) + i,
          parseInt(e.target.classList[0][4]),
        ])
      );
    }

    // console.log(shipLocation);
    // console.log(document.getElementsByClassName(shipLocation)[0]);
    if (e.type == "dragenter") {
      document
        .getElementsByClassName(shipLocation)[0]
        .classList.add("dragEnter");
    } else {
      document
        .getElementsByClassName(shipLocation)[0]
        .classList.remove("dragEnter");
    }
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlFQUFtQjtBQUNoRDtBQUNBLElBQUksbURBQVE7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxvRUFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVTaGlwLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nZW5lcmF0ZUdhbWVCb2FyZFVpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcG9wdWxhdGVBaS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BvcHVsYXRlUGxheWVyLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgNjAsIDkxKTtcXG59XFxuXFxuI2dhbWVCb2FyZERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLyogcGxheWVyIGFuZCBhaSBib2FyZCAqL1xcbiNwbGF5ZXIsXFxuI2FpLFxcbiNkcmFnU2hpcENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZHJvcFNoaXBEaXYge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgaGVpZ2h0OiA0MTVweDtcXG4gIHdpZHRoOiA0MTBweDtcXG59XFxuXFxuLmNvbHVtbkNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnBsYXllckNlbGwsXFxuLmFpQ2VsbCxcXG4uc2hpcENlbGwsXFxuLmhpdENlbGwsXFxuLm1pc3NDZWxsIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uc2hpcENlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5oaXRDZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLm1pc3NDZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDEzNywgMTM3KTtcXG59XFxuXFxuLmRyYWdEaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmRyYWdIb3Jpem9udGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcmFnRW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5kcmFnQ2VsbCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDI1NSwgMjUxKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLHdCQUF3QjtBQUN4Qjs7O0VBR0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDYwLCA5MSk7XFxufVxcblxcbiNnYW1lQm9hcmREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi8qIHBsYXllciBhbmQgYWkgYm9hcmQgKi9cXG4jcGxheWVyLFxcbiNhaSxcXG4jZHJhZ1NoaXBDb250YWluZXIge1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Ryb3BTaGlwRGl2IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGhlaWdodDogNDE1cHg7XFxuICB3aWR0aDogNDEwcHg7XFxufVxcblxcbi5jb2x1bW5DZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wbGF5ZXJDZWxsLFxcbi5haUNlbGwsXFxuLnNoaXBDZWxsLFxcbi5oaXRDZWxsLFxcbi5taXNzQ2VsbCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnNoaXBDZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGl0Q2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5taXNzQ2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxMzcsIDEzNyk7XFxufVxcblxcbi5kcmFnRGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5kcmFnSG9yaXpvbnRhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJhZ0VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZHJhZ0NlbGwge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAyNTUsIDI1MSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuY29uc3QgQUkgPSAoKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBsZXQgYWlBdHRhY2tMaXN0ID0gW107XG5cbiAgY29uc3QgYXR0YWNrID0gKHRhcmdldFBsYXllciwgYXR0YWNrTG9jYXRpb24gPSBnZXRSYW5kb21Db29yZGluYXRlKCkpID0+IHtcbiAgICAvLyBpZiB0aGUgYXR0YWNrTG9jYXRpb24gaXMgaW4gdGhlIGFpQXR0YWNrTGlzdCwgY2hvc2UgYW5vdGhlciBhdHRhY2tMb2NhdGlvbi5cbiAgICB3aGlsZSAoYWlBdHRhY2tMaXN0LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGF0dGFja0xvY2F0aW9uKSkpIHtcbiAgICAgIGF0dGFja0xvY2F0aW9uID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgIH1cbiAgICBhaUF0dGFja0xpc3QucHVzaChKU09OLnN0cmluZ2lmeShhdHRhY2tMb2NhdGlvbikpO1xuICAgIHJldHVybiB0YXJnZXRQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrTG9jYXRpb24pO1xuICB9O1xuXG4gIGxldCBhbGxBSVNoaXBMb2NhdGlvbnMgPSBbXTtcblxuICBjb25zdCBjcmVhdGVWYWxpZFNoaXBMb2NhdGlvbiA9IChcbiAgICBzaXplID0gNSxcbiAgICBzaGlwSGVhZCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKVxuICApID0+IHtcbiAgICBsZXQgbGVuZ3RoID0gc2l6ZSAtIDE7XG4gICAgbGV0IHNoaXBMb2NhdGlvbnMgPSBbXTtcblxuICAgIHdoaWxlIChcbiAgICAgIGFsbEFJU2hpcExvY2F0aW9ucy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShzaGlwSGVhZCkpIHx8XG4gICAgICBzaGlwSGVhZFswXSArIGxlbmd0aCA+PSA5XG4gICAgKSB7XG4gICAgICBzaGlwSGVhZCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IHNoaXBIZWFkWzBdO1xuICAgIGxldCBqID0gc2hpcEhlYWRbMV07XG4gICAgbGV0IGsgPSBzaGlwSGVhZFswXSArIGxlbmd0aDtcblxuICAgIHdoaWxlIChpICE9IGspIHtcbiAgICAgIGkrKztcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGR1cGxpY2F0ZSwgcmVjdXJzaXZlbHkgc3RhcnQgdGhlIGZ1bmN0aW9uIGFnYWluXG4gICAgICBpZiAoYWxsQUlTaGlwTG9jYXRpb25zLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFtpLCBqXSkpKSB7XG4gICAgICAgIHNoaXBMb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKHNpemUpO1xuICAgICAgfVxuICAgICAgc2hpcExvY2F0aW9ucy5wdXNoKFtpLCBqXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwTG9jYXRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgc2hpcGhlYWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuICAgIHNoaXBMb2NhdGlvbnMuc3BsaWNlKDAsIDAsIHNoaXBIZWFkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwTG9jYXRpb25zKTtcblxuICAgIHNoaXBMb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIGFsbEFJU2hpcExvY2F0aW9ucy5wdXNoKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcExvY2F0aW9ucztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVib2FyZCxcbiAgICBhaUF0dGFja0xpc3QsXG4gICAgYXR0YWNrLFxuICAgIGNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uLFxuICAgIGFsbEFJU2hpcExvY2F0aW9ucyxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gIGxldCBjb09yZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBjb09yZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgcmV0dXJuIFtjb09yZFgsIGNvT3JkWV07XG59XG5cbmV4cG9ydCB7IEFJIH07XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgdGltZXNIaXQgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKyt0aW1lc0hpdDtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA9PSB0aW1lc0hpdCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gICAgaWYgKGxlbmd0aCAhPSB0aW1lc0hpdCkgcmV0dXJuIHN1bms7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0hpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGltZXNIaXQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXQsIGlzU3Vuaywgc2hvd0hpdCB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL2JhdHRsZVNoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBzaGlwTGlzdHMgd2lsbCBiZSB1c2VkIGZvciB0cmFja2luZyBzaGlwcyBhbmQgdG8gYmUgYWJsZSB0byB1c2UgYWN0aW9ucyBvbiB0aGVtLlxuICBsZXQgc2hpcExpc3RzID0gW107XG4gIGxldCBtaXNzZWRTaG90cyA9IFtdO1xuICBsZXQgc2hpcExvY2F0aW9uTGlzdHMgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29PcmQpID0+IHtcbiAgICBsZXQgc2hpcExlbmd0aCA9IGNvT3JkLmxlbmd0aDtcblxuICAgIGxldCBzaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAvLyBsb2NhdGlvbiBpcyBjb252ZXJ0ZWQgaW50byBzdHJpbmcgdG8gdXNlIC5pbmNsdWRlcyBtZXRob2QuXG4gICAgc2hpcC5sb2NhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvT3JkKTtcblxuICAgIHNoaXBMaXN0cy5wdXNoKHNoaXApO1xuXG4gICAgY29PcmQuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIHNoaXBMb2NhdGlvbkxpc3RzLnB1c2goSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29PcmQpID0+IHtcbiAgICAvLyBmaWx0ZXIgdGhyb3VnaCBzaGlwJ3MgbG9jYXRpb24gY29vcmRpbmF0ZSB0byBmaW5kIGlmIGF0dGFjayBjb29yZGluYXRlIGhpdHMgc2hpcC5cbiAgICAvLyBpZiBhdHRhY2sgaGl0cyBzaGlwLCB0YXJnZXRTaGlwIHdpbGwgZ2V0IHRoZSAnc2hpcCBvYmplY3QnIHRvIHNlbmQgaGl0IGZ1bmN0aW9uXG4gICAgLy8gdG8gdGhlICdzaGlwIG9iamVjdCcgb3IgdGhlIGF0dGFjayBjb29yZGluYXRlIGdvZXMgaW50byBtaXNzZWRTaG90LlxuICAgIGxldCB0YXJnZXRTaGlwID0gc2hpcExpc3RzLmZpbHRlcigoc2hpcCkgPT5cbiAgICAgIHNoaXAubG9jYXRpb24uaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29PcmQpKVxuICAgICk7XG5cbiAgICBpZiAodGFyZ2V0U2hpcC5sZW5ndGggPiAwKSB7XG4gICAgICB0YXJnZXRTaGlwWzBdLmhpdCgpO1xuICAgICAgcmV0dXJuIHRhcmdldFNoaXBbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goY29PcmQpO1xuICAgICAgcmV0dXJuIGNvT3JkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHNoaXBzU3VuayA9IHNoaXBMaXN0cy5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgLy8gRG9uJ3QgZm9yZ2V0IHRvIHdyaXRlIHJldHVybiBuZXh0IHRpbWUuIDspXG4gICAgICByZXR1cm4gc2hpcC5pc1N1bmsoKSA9PSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzU3VuaztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNoaXBMaXN0cyxcbiAgICBtaXNzZWRTaG90cyxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgc2hpcExvY2F0aW9uTGlzdHMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IHBsYXllciwgcG9wdWxhdGVQbGF5ZXJCb2FyZCB9IGZyb20gXCIuL3BvcHVsYXRlUGxheWVyXCI7XG5pbXBvcnQgeyBhaSwgcG9wdWxhdGVBaUJvYXJkIH0gZnJvbSBcIi4vcG9wdWxhdGVBaVwiO1xuXG4vLyBnYW1lIGxvb3BcbmZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBjb25zdCBhaUdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWlcIik7XG5cbiAgYWlHYW1lQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NMaXN0KTtcbiAgICAvLyBOb3RoaW5nIGhhcHBlbnMgaWYgcGxheWVyIGNsaWNrcyBvbiBhaSBib2FyZCdzIGFscmVkeSBjb2xvcmVkIGNlbGxzIG9yXG4gICAgLy8gd2hlbiB0aGUgZ2FtZSBoYXMgZW5kZWQuXG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0Q2VsbFwiKSB8fFxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc0NlbGxcIikgfHxcbiAgICAgIHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgfHxcbiAgICAgIGFpLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgZ2FtZSBoYXMgbm90IGJlZW4gd29uIHBsYXllciBhbmQgYWkgd2lsbCBhdHRhY2thaW5nIGVhY2ggb3RoZXJcbiAgICAvLyBhcyB3ZWxsIGFzIHNob3cgdGhlIGhpdHMgYW5kIG1pc3NlcyBvbiB0aGUgYm9hcmRzLlxuICAgIGlmIChcbiAgICAgIHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgIT0gdHJ1ZSAmJlxuICAgICAgYWkuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpICE9IHRydWVcbiAgICApIHtcbiAgICAgIC8vIFBsYXllciBhdHRhY2tzIEFJXG4gICAgICAvLyBjb252ZXJ0IGNlbGwgY2xhc3Mgc3RyaW5nIHRvIGFycmF5XG4gICAgICBsZXQgcGxheWVyVGFyZ2V0ID0gW1xuICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc05hbWVbMl0pLFxuICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc05hbWVbNF0pLFxuICAgICAgXTtcblxuICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyVGFyZ2V0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFpLmFsbEFJU2hpcExvY2F0aW9ucy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShwbGF5ZXJUYXJnZXQpKSk7XG5cbiAgICAgIC8vIEhpdHMgcGFpbnRzIHRhcmdldCByZWQsIG1pc3NlcyBwYWludHMgdGFyZ2V0IHJlZC5cbiAgICAgIGlmIChhaS5hbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocGxheWVyVGFyZ2V0KSkpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlcGxhY2UoXCJhaUNlbGxcIiwgXCJoaXRDZWxsXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlcGxhY2UoXCJhaUNlbGxcIiwgXCJtaXNzQ2VsbFwiKTtcbiAgICAgIH1cbiAgICAgIHBsYXllci5hdHRhY2socGxheWVyVGFyZ2V0LCBhaSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQubWlzc2VkU2hvdHMpO1xuXG4gICAgICAvLyBBaSBhdHRhY2tzIFBsYXllciAoYWZ0ZXIgcGxheWVyIGF0dGFja3MpIGFuZCBwcmludCBhdHRhY2tzIG9uIGdhbWVib2FyZC5cbiAgICAgIGFpLmF0dGFjayhwbGF5ZXIpO1xuXG4gICAgICAvLyBmaW5kIHRoZSBsYXRlc3QgYXR0YWNrICh3aGljaCBpcyBsYXN0IGl0ZW0gb24gdGhlIGxpc3QpXG4gICAgICBsZXQgdGFyZ2V0ID0gYWkuYWlBdHRhY2tMaXN0W2FpLmFpQXR0YWNrTGlzdC5sZW5ndGggLSAxXTtcbiAgICAgIHRhcmdldCA9IEpTT04uc3RyaW5naWZ5KHRhcmdldCk7XG5cbiAgICAgIGxldCBhaVRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGFyZ2V0KVswXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFpVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBDZWxsXCIpKTtcbiAgICAgIC8vIHByaW50IHN1Y2Nlc3NmdWwgYXR0YWNrIHllbGxvdyBhbmQgdW5zdWNjZXNzZnVsIHJlZFxuICAgICAgaWYgKGFpVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBDZWxsXCIpKSB7XG4gICAgICAgIGFpVGFyZ2V0LmNsYXNzTGlzdC5yZXBsYWNlKFwic2hpcENlbGxcIiwgXCJoaXRDZWxsXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWlUYXJnZXQuY2xhc3NMaXN0LnJlcGxhY2UoXCJwbGF5ZXJDZWxsXCIsIFwibWlzc0NlbGxcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFpVGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NOYW1lKTtcblxuICAgIC8vIElmIHRoZSBnYW1lIGlzIHdvbiwgYWxlcnQgd2lubmVycyBuYW1lLlxuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBhbGVydChcIkFpIHdpbnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGFpLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgYWxlcnQoXCJQbGF5ZXIgd2luc1wiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBwb3B1bGF0ZVBsYXllckJvYXJkLCBwb3B1bGF0ZUFpQm9hcmQsIGdhbWVsb29wIH07XG4iLCJmdW5jdGlvbiBnZW5lcmF0ZUdhbWVCb2FyZFVpKGlkKSB7XG4gIGNvbnN0IGdhbWVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cbiAgZ2FtZUJvYXJkQ29udGFpbmVyLnRleHRDb250ZW50ID0gaWQgKyBcIiBCb2FyZFwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgIGxldCBjb2x1bW5EaXYgPSBhZGRDb2x1bW5EaXYoZ2FtZUJvYXJkQ29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgIGFkZFJvd0Rpdihjb2x1bW5EaXYsIFtpLCBqXSwgaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnYW1lQm9hcmRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGFkZENvbHVtbkRpdihwYXJlbnREaXYpIHtcbiAgY29uc3QgY29sdW1uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29sdW1uRGl2LmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5DZWxsXCIpO1xuXG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChjb2x1bW5EaXYpO1xuXG4gIHJldHVybiBjb2x1bW5EaXY7XG59XG5cbmZ1bmN0aW9uIGFkZFJvd0RpdihwYXJlbnREaXYsIGFycmF5LCBjbGFzc25hbWUpIHtcbiAgLy8gZG8gbm90IGtub3cgd2h5IEpTT04uc3RyaW5nZnkgaXMgbmVlZGVkIHR3aWNlIGhlcmUuXG4gIGFycmF5ID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xuICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vICdhcnJheScgY2xhc3MgZm9yIHRhcmdldHRpbmcuIEFkZCB0aGlzIGJlZm9yZSAnY2VsbCcgZm9yIGdhbWVMb29wKCkgJ2luZGV4JyB0YXJnZXRpbmcuXG4gIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG5cbiAgLy8gJ2NlbGwnIGNsYXNzIGZvciBzdHlsaW5nXG4gIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSArIFwiQ2VsbFwiKTtcblxuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQocm93RGl2KTtcblxuICByZXR1cm4gcm93RGl2O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURyYWdnYWJsZVBsYXllclNoaXBzKCkge1xuICBjb25zdCBkcmFnU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyYWdTaGlwQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHJhZ1NoaXBDb250YWluZXJcIik7XG5cbiAgZHJhZ1NoaXBDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkRyYWcgc2hpcHMuIENsaWNrIHRvIFJPVEFURS5cIjtcblxuICBjb25zdCBkcm9wU2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyb3BTaGlwRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHJvcFNoaXBEaXZcIik7XG5cbiAgbGV0IHNoaXAxID0gZ2VuZXJhdGVTaGlwQ2VsbHMoMiwgXCJzaGlwMVwiKTtcbiAgbGV0IHNoaXAyID0gZ2VuZXJhdGVTaGlwQ2VsbHMoMywgXCJzaGlwMlwiKTtcbiAgbGV0IHNoaXAzID0gZ2VuZXJhdGVTaGlwQ2VsbHMoMywgXCJzaGlwM1wiKTtcbiAgbGV0IHNoaXA0ID0gZ2VuZXJhdGVTaGlwQ2VsbHMoNCwgXCJzaGlwNFwiKTtcbiAgbGV0IHNoaXA1ID0gZ2VuZXJhdGVTaGlwQ2VsbHMoNSwgXCJzaGlwNVwiKTtcblxuICBkcm9wU2hpcERpdi5hcHBlbmQoc2hpcDEsIHNoaXAyLCBzaGlwMywgc2hpcDQsIHNoaXA1KTtcblxuICBkcmFnU2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wU2hpcERpdik7XG5cbiAgcmV0dXJuIGRyYWdTaGlwQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNoaXBDZWxscyhxdWFudGl0eSwgc2hpcE5hbWUpIHtcbiAgY29uc3QgZHJhZ1NoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmFnU2hpcC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gIGRyYWdTaGlwLnNldEF0dHJpYnV0ZShcImlkXCIsIHNoaXBOYW1lKTtcbiAgZHJhZ1NoaXAuY2xhc3NMaXN0LmFkZChcImRyYWdEaXZcIiwgXCJkcmFnSG9yaXpvbnRhbFwiKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBxdWFudGl0eTsgaSsrKSB7XG4gICAgbGV0IGRyYWdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcmFnQ2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZ0NlbGxcIik7XG5cbiAgICBkcmFnU2hpcC5hcHBlbmQoZHJhZ0NlbGwpO1xuICB9XG5cbiAgcmV0dXJuIGRyYWdTaGlwO1xufVxuXG5leHBvcnQgeyBnZW5lcmF0ZUdhbWVCb2FyZFVpLCBnZW5lcmF0ZURyYWdnYWJsZVBsYXllclNoaXBzIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgYXR0YWNrID0gKGNvT3JkLCBhbm90aGVyUGxheWVyKSA9PiB7XG4gICAgcmV0dXJuIGFub3RoZXJQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29PcmQpO1xuICB9O1xuXG4gIHJldHVybiB7IGdhbWVib2FyZCwgYXR0YWNrIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImltcG9ydCB7IEFJIH0gZnJvbSBcIi4vYWlcIjtcblxubGV0IGFpID0gQUkoKTtcblxubGV0IGxvY2F0aW9uMSA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDUpO1xubGV0IGxvY2F0aW9uMiA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDQpO1xubGV0IGxvY2F0aW9uMyA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDMpO1xubGV0IGxvY2F0aW9uNCA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDMpO1xubGV0IGxvY2F0aW9uNSA9IGFpLmNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uKDIpO1xuXG5haS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uMSk7XG5haS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uMik7XG5haS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uMyk7XG5haS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uNCk7XG5haS5nYW1lYm9hcmQucGxhY2VTaGlwKGxvY2F0aW9uNSk7XG5cbi8vIGFpIGJvYXJkIHByaW50aW5nIGZvciB0ZXN0XG5mdW5jdGlvbiBwb3B1bGF0ZUFpQm9hcmQoKSB7XG4gIC8vIGNvbnNvbGUubG9nKGFpLmFsbEFJU2hpcExvY2F0aW9ucyk7XG4gIGFpLmFsbEFJU2hpcExvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgIGxldCB4ID0gSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pO1xuICAgIC8vIFsxXSBpbmRpY2F0ZXMgY2VsbHMgZnJvbSBhaSBib2FyZFxuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh4KVsxXTtcbiAgICAvLyBjb25zb2xlLmxvZyhjZWxsKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5yZXBsYWNlKFwiYWlDZWxsXCIsIFwic2hpcENlbGxcIik7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhaSwgcG9wdWxhdGVBaUJvYXJkIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxubGV0IHBsYXllciA9IFBsYXllcigpO1xuXG4vLyBwbGF5ZXIgYm9hcmRcbmZ1bmN0aW9uIHBvcHVsYXRlUGxheWVyQm9hcmQoKSB7XG4gIC8vIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQuc2hpcExvY2F0aW9uTGlzdHMpO1xuICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclwiKTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmQpO1xuXG4gIHBsYXllci5nYW1lYm9hcmQuc2hpcExvY2F0aW9uTGlzdHMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpO1xuICAgIC8vIFswXSBpbmRpY2F0ZXMgY2VsbHMgZnJvbSBwbGF5ZXIgYm9hcmRcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKVswXTtcbiAgICBjZWxsLmNsYXNzTGlzdC5yZXBsYWNlKFwicGxheWVyQ2VsbFwiLCBcInNoaXBDZWxsXCIpO1xuICB9KTtcbn1cbi8vIHBvcHVsYXRlUGxheWVyQm9hcmQoKTtcblxuZXhwb3J0IHsgcGxheWVyLCBwb3B1bGF0ZVBsYXllckJvYXJkIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBnZW5lcmF0ZUdhbWVCb2FyZFVpLFxuICBnZW5lcmF0ZURyYWdnYWJsZVBsYXllclNoaXBzLFxufSBmcm9tIFwiLi9nZW5lcmF0ZUdhbWVCb2FyZFVpXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUFpQm9hcmQsIGdhbWVsb29wIH0gZnJvbSBcIi4vZ2FtZUxvb3BcIjtcbmltcG9ydCB7IHBsYXllciwgcG9wdWxhdGVQbGF5ZXJCb2FyZCB9IGZyb20gXCIuL3BvcHVsYXRlUGxheWVyXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IGdhbWVCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5nYW1lQm9hcmREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lQm9hcmREaXZcIik7XG5cbmdhbWVCb2FyZERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZUdhbWVCb2FyZFVpKFwicGxheWVyXCIpKTtcblxuYm9keS5hcHBlbmRDaGlsZChnYW1lQm9hcmREaXYpO1xuXG5nYW1lQm9hcmREaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEcmFnZ2FibGVQbGF5ZXJTaGlwcygpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnRGl2XCIpLmZvckVhY2goKGRpdikgPT4ge1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImRyYWdIb3Jpem9udGFsXCIpO1xuICB9KTtcbn0pO1xuXG4vLyBEUkFHICYgRFJPUFxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllckNlbGxcIik7XG4vLyBjb25zb2xlLmxvZyhjZWxscyk7XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKSB7XG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgLy8gY29uc29sZS5sb2codGhpcy5pZCk7XG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgW1xuICAgIGUudGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdFsxXSxcbiAgICBlLnRhcmdldC5pZCxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdPdmVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXIoZSkge1xuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc0xpc3RbMF0pO1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZHJhZ0VudGVyXCIpO1xuXG4gIG1hcmtCb2FyZFdpdGhEcmFnTkRyb3AoZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZShlKSB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnRW50ZXJcIik7XG5cbiAgbWFya0JvYXJkV2l0aERyYWdORHJvcChlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJvcChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gZS50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcmFnRGl2XCIpKTtcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnRW50ZXJcIik7XG5cbiAgbWFya0JvYXJkV2l0aERyYWdORHJvcChlKTtcblxuICBsZXQgc2hpcExvY2F0aW9uID0gW1xuICAgIFtwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bMl0pLCBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bNF0pXSxcbiAgXTtcblxuICBsZXQgY2VsbENvdW50ID0gcGFyc2VJbnQoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIilbMF0pO1xuICBsZXQgY2VsbENsYXNzID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIikuc2xpY2UoMiwgMTYpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2VsbENvdW50OyBpKyspIHtcbiAgICBpZiAoY2VsbENsYXNzID09IFwiZHJhZ0hvcml6b250YWxcIikge1xuICAgICAgc2hpcExvY2F0aW9uLnB1c2goW1xuICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bMl0pLFxuICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bNF0pICsgaSxcbiAgICAgIF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwTG9jYXRpb24ucHVzaChbXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVsyXSkgKyBpLFxuICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bNF0pLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNoZWNrU2hpcEFscmVhZHlUaGVyZSA9IHNoaXBMb2NhdGlvbi5zb21lKChsb2NhdGlvbikgPT4ge1xuICAgIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBMb2NhdGlvbkxpc3RzLmluY2x1ZGVzKFxuICAgICAgSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pXG4gICAgKTtcbiAgfSk7XG5cbiAgaWYgKCFjaGVja1NoaXBBbHJlYWR5VGhlcmUpIHtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwTG9jYXRpb24pO1xuICAgIHBvcHVsYXRlUGxheWVyQm9hcmQoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpLnNsaWNlKC01KSk7XG4gICAgbGV0IHNoaXBOYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIikuc2xpY2UoLTUpO1xuICAgIGxldCBkcm9wU2hpcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcFNoaXBEaXZcIik7XG4gICAgZHJvcFNoaXBEaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hpcE5hbWUpKTtcbiAgfVxuXG4gIC8vIEFkZCBhaSBib2FyZCBhbmQgcnVuIGdhbWUgYWZ0ZXIgYWxsIHBsYXllciBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLlxuICBpZiAoZHJvcFNoaXBEaXYuY2hpbGRFbGVtZW50Q291bnQgPT0gMCkge1xuICAgIGdhbWVCb2FyZERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyYWdTaGlwQ29udGFpbmVyXCIpKTtcbiAgICBnYW1lQm9hcmREaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVHYW1lQm9hcmRVaShcImFpXCIpKTtcbiAgICAvLyBwb3B1bGF0ZUFpQm9hcmQoKTtcbiAgICBnYW1lbG9vcCgpO1xuICB9XG59XG5cbmxldCBkcmFnRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnRGl2XCIpO1xuZHJhZ0Rpdi5mb3JFYWNoKChkaXYpID0+IHtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgaGFuZGxlRHJhZ1N0YXJ0KTtcbn0pO1xuXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGhhbmRsZURyYWdPdmVyKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGhhbmRsZURyYWdFbnRlcik7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBoYW5kbGVEcmFnTGVhdmUpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZURyb3ApO1xufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xucG9wdWxhdGVQbGF5ZXJCb2FyZCgpO1xuLy8gcG9wdWxhdGVBaUJvYXJkKCk7XG4vLyBnYW1lbG9vcCgpO1xuXG5mdW5jdGlvbiBtYXJrQm9hcmRXaXRoRHJhZ05Ecm9wKGUpIHtcbiAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcbiAgbGV0IGNlbGxDb3VudCA9IHBhcnNlSW50KGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpWzBdKTtcbiAgLy8gY29uc29sZS5sb2coY2VsbENvdW50KTtcbiAgbGV0IGNlbGxDbGFzcyA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpLnNsaWNlKDIsIDE2KTtcbiAgLy8gY29uc29sZS5sb2coY2VsbENsYXNzKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IGNlbGxDb3VudDsgaSsrKSB7XG4gICAgbGV0IHNoaXBMb2NhdGlvbjtcbiAgICBpZiAoY2VsbENsYXNzID09IFwiZHJhZ0hvcml6b250YWxcIikge1xuICAgICAgc2hpcExvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bMl0pLFxuICAgICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVs0XSkgKyBpLFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcExvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bMl0pICsgaSxcbiAgICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bNF0pLFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwTG9jYXRpb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2hpcExvY2F0aW9uKVswXSk7XG4gICAgaWYgKGUudHlwZSA9PSBcImRyYWdlbnRlclwiKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzaGlwTG9jYXRpb24pWzBdXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiZHJhZ0VudGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzaGlwTG9jYXRpb24pWzBdXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ0VudGVyXCIpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9