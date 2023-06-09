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
        e.target.classList.replace("shipCell", "hitCell");
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
      // document.getElementById("player").remove();
      // document.getElementById("ai").remove();
      // body.appendChild(uiGameBoard("player"));
      // body.appendChild(uiGameBoard("ai"));
      // // ai.aiAttackList = [];
      // populatePlayerBoard();
      // populateAiBoard();
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

  dragShipContainer.textContent = "Drop ships on your board.";

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
  dragShip.classList.add("dragHorizontal", "dragDiv");

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

// DRAG & DROP
gameBoardDiv.appendChild((0,_generateGameBoardUi__WEBPACK_IMPORTED_MODULE_0__.generateDraggablePlayerShips)());

const cells = document.querySelectorAll(".playerCell");
// console.log(cells);

function handleDragStart(e) {
  console.log(e.target);
  // console.log(this.id);
  console.log(e.target.classList[0]);
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", [
    e.target.childNodes.length,
    e.target.classList[0],
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
  console.log(e.target);

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
  console.log(shipLocation);

  _populatePlayer__WEBPACK_IMPORTED_MODULE_2__.player.gameboard.placeShip(shipLocation);
  (0,_populatePlayer__WEBPACK_IMPORTED_MODULE_2__.populatePlayerBoard)();

  // console.log(e.dataTransfer.getData("text").slice(-5));
  let shipName = e.dataTransfer.getData("text").slice(-5);
  let dropShipDiv = document.getElementById("dropShipDiv");
  dropShipDiv.removeChild(document.getElementById(shipName));

  // Add ai board and run game after all player ships have been placed.
  if (dropShipDiv.childElementCount == 0) {
    gameBoardDiv.removeChild(document.getElementById("dragShipContainer"));
    gameBoardDiv.appendChild((0,_generateGameBoardUi__WEBPACK_IMPORTED_MODULE_0__.generateGameBoardUi)("ai"));
    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.populateAiBoard)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZTtBQUNuQixJQUFJLG1EQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esb0VBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2FpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvYmF0dGxlU2hpcC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb29wLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2VuZXJhdGVHYW1lQm9hcmRVaS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BvcHVsYXRlQWkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9wb3B1bGF0ZVBsYXllci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDYwLCA5MSk7XFxufVxcblxcbiNnYW1lQm9hcmREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi8qIHBsYXllciBhbmQgYWkgYm9hcmQgKi9cXG4jcGxheWVyLFxcbiNhaSxcXG4jZHJhZ1NoaXBDb250YWluZXIge1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Ryb3BTaGlwRGl2IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGhlaWdodDogNDE1cHg7XFxuICB3aWR0aDogNDEwcHg7XFxufVxcblxcbi5jb2x1bW5DZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wbGF5ZXJDZWxsLFxcbi5haUNlbGwsXFxuLnNoaXBDZWxsLFxcbi5oaXRDZWxsLFxcbi5taXNzQ2VsbCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnNoaXBDZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGl0Q2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5taXNzQ2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxMzcsIDEzNyk7XFxufVxcblxcbi5kcmFnRGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5kcmFnSG9yaXpvbnRhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJhZ0VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZHJhZ0NlbGwge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAyNTUsIDI1MSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSx3QkFBd0I7QUFDeEI7OztFQUdFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBOzs7OztFQUtFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCA2MCwgOTEpO1xcbn1cXG5cXG4jZ2FtZUJvYXJkRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4vKiBwbGF5ZXIgYW5kIGFpIGJvYXJkICovXFxuI3BsYXllcixcXG4jYWksXFxuI2RyYWdTaGlwQ29udGFpbmVyIHtcXG4gIGhlaWdodDogNDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNkcm9wU2hpcERpdiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBoZWlnaHQ6IDQxNXB4O1xcbiAgd2lkdGg6IDQxMHB4O1xcbn1cXG5cXG4uY29sdW1uQ2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ucGxheWVyQ2VsbCxcXG4uYWlDZWxsLFxcbi5zaGlwQ2VsbCxcXG4uaGl0Q2VsbCxcXG4ubWlzc0NlbGwge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5zaGlwQ2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmhpdENlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubWlzc0NlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTM3LCAxMzcpO1xcbn1cXG5cXG4uZHJhZ0RpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZHJhZ0hvcml6b250YWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRyYWdFbnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmRyYWdDZWxsIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgMjU1LCAyNTEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IEFJID0gKCkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgbGV0IGFpQXR0YWNrTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGF0dGFjayA9ICh0YXJnZXRQbGF5ZXIsIGF0dGFja0xvY2F0aW9uID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpKSA9PiB7XG4gICAgLy8gaWYgdGhlIGF0dGFja0xvY2F0aW9uIGlzIGluIHRoZSBhaUF0dGFja0xpc3QsIGNob3NlIGFub3RoZXIgYXR0YWNrTG9jYXRpb24uXG4gICAgd2hpbGUgKGFpQXR0YWNrTGlzdC5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShhdHRhY2tMb2NhdGlvbikpKSB7XG4gICAgICBhdHRhY2tMb2NhdGlvbiA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICB9XG4gICAgYWlBdHRhY2tMaXN0LnB1c2goSlNPTi5zdHJpbmdpZnkoYXR0YWNrTG9jYXRpb24pKTtcbiAgICByZXR1cm4gdGFyZ2V0UGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja0xvY2F0aW9uKTtcbiAgfTtcblxuICBsZXQgYWxsQUlTaGlwTG9jYXRpb25zID0gW107XG5cbiAgY29uc3QgY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24gPSAoXG4gICAgc2l6ZSA9IDUsXG4gICAgc2hpcEhlYWQgPSBnZXRSYW5kb21Db29yZGluYXRlKClcbiAgKSA9PiB7XG4gICAgbGV0IGxlbmd0aCA9IHNpemUgLSAxO1xuICAgIGxldCBzaGlwTG9jYXRpb25zID0gW107XG5cbiAgICB3aGlsZSAoXG4gICAgICBhbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoc2hpcEhlYWQpKSB8fFxuICAgICAgc2hpcEhlYWRbMF0gKyBsZW5ndGggPj0gOVxuICAgICkge1xuICAgICAgc2hpcEhlYWQgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgfVxuXG4gICAgbGV0IGkgPSBzaGlwSGVhZFswXTtcbiAgICBsZXQgaiA9IHNoaXBIZWFkWzFdO1xuICAgIGxldCBrID0gc2hpcEhlYWRbMF0gKyBsZW5ndGg7XG5cbiAgICB3aGlsZSAoaSAhPSBrKSB7XG4gICAgICBpKys7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBkdXBsaWNhdGUsIHJlY3Vyc2l2ZWx5IHN0YXJ0IHRoZSBmdW5jdGlvbiBhZ2FpblxuICAgICAgaWYgKGFsbEFJU2hpcExvY2F0aW9ucy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbaSwgal0pKSkge1xuICAgICAgICBzaGlwTG9jYXRpb25zID0gW107XG4gICAgICAgIHJldHVybiBjcmVhdGVWYWxpZFNoaXBMb2NhdGlvbihzaXplKTtcbiAgICAgIH1cbiAgICAgIHNoaXBMb2NhdGlvbnMucHVzaChbaSwgal0pO1xuICAgICAgLy8gY29uc29sZS5sb2coc2hpcExvY2F0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHNoaXBoZWFkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcbiAgICBzaGlwTG9jYXRpb25zLnNwbGljZSgwLCAwLCBzaGlwSGVhZCk7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcExvY2F0aW9ucyk7XG5cbiAgICBzaGlwTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICBhbGxBSVNoaXBMb2NhdGlvbnMucHVzaChKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBMb2NhdGlvbnM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgYWlBdHRhY2tMaXN0LFxuICAgIGF0dGFjayxcbiAgICBjcmVhdGVWYWxpZFNoaXBMb2NhdGlvbixcbiAgICBhbGxBSVNoaXBMb2NhdGlvbnMsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlKCkge1xuICBsZXQgY29PcmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgY29PcmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIHJldHVybiBbY29PcmRYLCBjb09yZFldO1xufVxuXG5leHBvcnQgeyBBSSB9O1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IHRpbWVzSGl0ID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuICsrdGltZXNIaXQ7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChsZW5ndGggPT0gdGltZXNIaXQpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGlmIChsZW5ndGggIT0gdGltZXNIaXQpIHJldHVybiBzdW5rO1xuICB9O1xuXG4gIGNvbnN0IHNob3dIaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpbWVzSGl0O1xuICB9O1xuXG4gIHJldHVybiB7IGxlbmd0aCwgaGl0LCBpc1N1bmssIHNob3dIaXQgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9iYXR0bGVTaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgLy8gc2hpcExpc3RzIHdpbGwgYmUgdXNlZCBmb3IgdHJhY2tpbmcgc2hpcHMgYW5kIHRvIGJlIGFibGUgdG8gdXNlIGFjdGlvbnMgb24gdGhlbS5cbiAgbGV0IHNoaXBMaXN0cyA9IFtdO1xuICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcbiAgbGV0IHNoaXBMb2NhdGlvbkxpc3RzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvT3JkKSA9PiB7XG4gICAgbGV0IHNoaXBMZW5ndGggPSBjb09yZC5sZW5ndGg7XG5cbiAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgLy8gbG9jYXRpb24gaXMgY29udmVydGVkIGludG8gc3RyaW5nIHRvIHVzZSAuaW5jbHVkZXMgbWV0aG9kLlxuICAgIHNoaXAubG9jYXRpb24gPSBKU09OLnN0cmluZ2lmeShjb09yZCk7XG5cbiAgICBzaGlwTGlzdHMucHVzaChzaGlwKTtcblxuICAgIGNvT3JkLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICBzaGlwTG9jYXRpb25MaXN0cy5wdXNoKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvT3JkKSA9PiB7XG4gICAgLy8gZmlsdGVyIHRocm91Z2ggc2hpcCdzIGxvY2F0aW9uIGNvb3JkaW5hdGUgdG8gZmluZCBpZiBhdHRhY2sgY29vcmRpbmF0ZSBoaXRzIHNoaXAuXG4gICAgLy8gaWYgYXR0YWNrIGhpdHMgc2hpcCwgdGFyZ2V0U2hpcCB3aWxsIGdldCB0aGUgJ3NoaXAgb2JqZWN0JyB0byBzZW5kIGhpdCBmdW5jdGlvblxuICAgIC8vIHRvIHRoZSAnc2hpcCBvYmplY3QnIG9yIHRoZSBhdHRhY2sgY29vcmRpbmF0ZSBnb2VzIGludG8gbWlzc2VkU2hvdC5cbiAgICBsZXQgdGFyZ2V0U2hpcCA9IHNoaXBMaXN0cy5maWx0ZXIoKHNoaXApID0+XG4gICAgICBzaGlwLmxvY2F0aW9uLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvT3JkKSlcbiAgICApO1xuXG4gICAgaWYgKHRhcmdldFNoaXAubGVuZ3RoID4gMCkge1xuICAgICAgdGFyZ2V0U2hpcFswXS5oaXQoKTtcbiAgICAgIHJldHVybiB0YXJnZXRTaGlwWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaXNzZWRTaG90cy5wdXNoKGNvT3JkKTtcbiAgICAgIHJldHVybiBjb09yZDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBzaGlwc1N1bmsgPSBzaGlwTGlzdHMuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIC8vIERvbid0IGZvcmdldCB0byB3cml0ZSByZXR1cm4gbmV4dCB0aW1lLiA7KVxuICAgICAgcmV0dXJuIHNoaXAuaXNTdW5rKCkgPT0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwc1N1bms7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBzaGlwTGlzdHMsXG4gICAgbWlzc2VkU2hvdHMsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHNoaXBMb2NhdGlvbkxpc3RzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBwbGF5ZXIsIHBvcHVsYXRlUGxheWVyQm9hcmQgfSBmcm9tIFwiLi9wb3B1bGF0ZVBsYXllclwiO1xuaW1wb3J0IHsgYWksIHBvcHVsYXRlQWlCb2FyZCB9IGZyb20gXCIuL3BvcHVsYXRlQWlcIjtcblxuLy8gZ2FtZSBsb29wXG5mdW5jdGlvbiBnYW1lbG9vcCgpIHtcbiAgY29uc3QgYWlHYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FpXCIpO1xuXG4gIGFpR2FtZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdCk7XG4gICAgLy8gTm90aGluZyBoYXBwZW5zIGlmIHBsYXllciBjbGlja3Mgb24gYWkgYm9hcmQncyBhbHJlZHkgY29sb3JlZCBjZWxscyBvclxuICAgIC8vIHdoZW4gdGhlIGdhbWUgaGFzIGVuZGVkLlxuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhpdENlbGxcIikgfHxcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NDZWxsXCIpIHx8XG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpIHx8XG4gICAgICBhaS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlIGdhbWUgaGFzIG5vdCBiZWVuIHdvbiBwbGF5ZXIgYW5kIGFpIHdpbGwgYXR0YWNrYWluZyBlYWNoIG90aGVyXG4gICAgLy8gYXMgd2VsbCBhcyBzaG93IHRoZSBoaXRzIGFuZCBtaXNzZXMgb24gdGhlIGJvYXJkcy5cbiAgICBpZiAoXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpICE9IHRydWUgJiZcbiAgICAgIGFpLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSAhPSB0cnVlXG4gICAgKSB7XG4gICAgICAvLyBQbGF5ZXIgYXR0YWNrcyBBSVxuICAgICAgLy8gY29udmVydCBjZWxsIGNsYXNzIHN0cmluZyB0byBhcnJheVxuICAgICAgbGV0IHBsYXllclRhcmdldCA9IFtcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NOYW1lWzJdKSxcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NOYW1lWzRdKSxcbiAgICAgIF07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllclRhcmdldCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhaS5hbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocGxheWVyVGFyZ2V0KSkpO1xuXG4gICAgICAvLyBIaXRzIHBhaW50cyB0YXJnZXQgcmVkLCBtaXNzZXMgcGFpbnRzIHRhcmdldCByZWQuXG4gICAgICBpZiAoYWkuYWxsQUlTaGlwTG9jYXRpb25zLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KHBsYXllclRhcmdldCkpKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZXBsYWNlKFwic2hpcENlbGxcIiwgXCJoaXRDZWxsXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlcGxhY2UoXCJhaUNlbGxcIiwgXCJtaXNzQ2VsbFwiKTtcbiAgICAgIH1cbiAgICAgIHBsYXllci5hdHRhY2socGxheWVyVGFyZ2V0LCBhaSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQubWlzc2VkU2hvdHMpO1xuXG4gICAgICAvLyBBaSBhdHRhY2tzIFBsYXllciAoYWZ0ZXIgcGxheWVyIGF0dGFja3MpIGFuZCBwcmludCBhdHRhY2tzIG9uIGdhbWVib2FyZC5cbiAgICAgIGFpLmF0dGFjayhwbGF5ZXIpO1xuXG4gICAgICAvLyBmaW5kIHRoZSBsYXRlc3QgYXR0YWNrICh3aGljaCBpcyBsYXN0IGl0ZW0gb24gdGhlIGxpc3QpXG4gICAgICBsZXQgdGFyZ2V0ID0gYWkuYWlBdHRhY2tMaXN0W2FpLmFpQXR0YWNrTGlzdC5sZW5ndGggLSAxXTtcbiAgICAgIHRhcmdldCA9IEpTT04uc3RyaW5naWZ5KHRhcmdldCk7XG5cbiAgICAgIGxldCBhaVRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGFyZ2V0KVswXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFpVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBDZWxsXCIpKTtcbiAgICAgIC8vIHByaW50IHN1Y2Nlc3NmdWwgYXR0YWNrIHllbGxvdyBhbmQgdW5zdWNjZXNzZnVsIHJlZFxuICAgICAgaWYgKGFpVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBDZWxsXCIpKSB7XG4gICAgICAgIGFpVGFyZ2V0LmNsYXNzTGlzdC5yZXBsYWNlKFwic2hpcENlbGxcIiwgXCJoaXRDZWxsXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWlUYXJnZXQuY2xhc3NMaXN0LnJlcGxhY2UoXCJwbGF5ZXJDZWxsXCIsIFwibWlzc0NlbGxcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFpVGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NOYW1lKTtcblxuICAgIC8vIElmIHRoZSBnYW1lIGlzIHdvbiwgYWxlcnQgd2lubmVycyBuYW1lLlxuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBhbGVydChcIkFpIHdpbnNcIik7XG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclwiKS5yZW1vdmUoKTtcbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWlcIikucmVtb3ZlKCk7XG4gICAgICAvLyBib2R5LmFwcGVuZENoaWxkKHVpR2FtZUJvYXJkKFwicGxheWVyXCIpKTtcbiAgICAgIC8vIGJvZHkuYXBwZW5kQ2hpbGQodWlHYW1lQm9hcmQoXCJhaVwiKSk7XG4gICAgICAvLyAvLyBhaS5haUF0dGFja0xpc3QgPSBbXTtcbiAgICAgIC8vIHBvcHVsYXRlUGxheWVyQm9hcmQoKTtcbiAgICAgIC8vIHBvcHVsYXRlQWlCb2FyZCgpO1xuICAgIH1cblxuICAgIGlmIChhaS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGFsZXJ0KFwiUGxheWVyIHdpbnNcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVQbGF5ZXJCb2FyZCwgcG9wdWxhdGVBaUJvYXJkLCBnYW1lbG9vcCB9O1xuIiwiZnVuY3Rpb24gZ2VuZXJhdGVHYW1lQm9hcmRVaShpZCkge1xuICBjb25zdCBnYW1lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lQm9hcmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXG4gIGdhbWVCb2FyZENvbnRhaW5lci50ZXh0Q29udGVudCA9IGlkICsgXCIgQm9hcmRcIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICBsZXQgY29sdW1uRGl2ID0gYWRkQ29sdW1uRGl2KGdhbWVCb2FyZENvbnRhaW5lcik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICBhZGRSb3dEaXYoY29sdW1uRGl2LCBbaSwgal0sIGlkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2FtZUJvYXJkQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBhZGRDb2x1bW5EaXYocGFyZW50RGl2KSB7XG4gIGNvbnN0IGNvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbHVtbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uQ2VsbFwiKTtcblxuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoY29sdW1uRGl2KTtcblxuICByZXR1cm4gY29sdW1uRGl2O1xufVxuXG5mdW5jdGlvbiBhZGRSb3dEaXYocGFyZW50RGl2LCBhcnJheSwgY2xhc3NuYW1lKSB7XG4gIC8vIGRvIG5vdCBrbm93IHdoeSBKU09OLnN0cmluZ2Z5IGlzIG5lZWRlZCB0d2ljZSBoZXJlLlxuICBhcnJheSA9IEpTT04uc3RyaW5naWZ5KGFycmF5KTtcbiAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyAnYXJyYXknIGNsYXNzIGZvciB0YXJnZXR0aW5nLiBBZGQgdGhpcyBiZWZvcmUgJ2NlbGwnIGZvciBnYW1lTG9vcCgpICdpbmRleCcgdGFyZ2V0aW5nLlxuICByb3dEaXYuY2xhc3NMaXN0LmFkZChKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuXG4gIC8vICdjZWxsJyBjbGFzcyBmb3Igc3R5bGluZ1xuICByb3dEaXYuY2xhc3NMaXN0LmFkZChjbGFzc25hbWUgKyBcIkNlbGxcIik7XG5cbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKHJvd0Rpdik7XG5cbiAgcmV0dXJuIHJvd0Rpdjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVEcmFnZ2FibGVQbGF5ZXJTaGlwcygpIHtcbiAgY29uc3QgZHJhZ1NoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmFnU2hpcENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRyYWdTaGlwQ29udGFpbmVyXCIpO1xuXG4gIGRyYWdTaGlwQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJEcm9wIHNoaXBzIG9uIHlvdXIgYm9hcmQuXCI7XG5cbiAgY29uc3QgZHJvcFNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcm9wU2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRyb3BTaGlwRGl2XCIpO1xuXG4gIGxldCBzaGlwMSA9IGdlbmVyYXRlU2hpcENlbGxzKDIsIFwic2hpcDFcIik7XG4gIGxldCBzaGlwMiA9IGdlbmVyYXRlU2hpcENlbGxzKDMsIFwic2hpcDJcIik7XG4gIGxldCBzaGlwMyA9IGdlbmVyYXRlU2hpcENlbGxzKDMsIFwic2hpcDNcIik7XG4gIGxldCBzaGlwNCA9IGdlbmVyYXRlU2hpcENlbGxzKDQsIFwic2hpcDRcIik7XG4gIGxldCBzaGlwNSA9IGdlbmVyYXRlU2hpcENlbGxzKDUsIFwic2hpcDVcIik7XG5cbiAgZHJvcFNoaXBEaXYuYXBwZW5kKHNoaXAxLCBzaGlwMiwgc2hpcDMsIHNoaXA0LCBzaGlwNSk7XG5cbiAgZHJhZ1NoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcFNoaXBEaXYpO1xuXG4gIHJldHVybiBkcmFnU2hpcENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTaGlwQ2VsbHMocXVhbnRpdHksIHNoaXBOYW1lKSB7XG4gIGNvbnN0IGRyYWdTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJhZ1NoaXAuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICBkcmFnU2hpcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzaGlwTmFtZSk7XG4gIGRyYWdTaGlwLmNsYXNzTGlzdC5hZGQoXCJkcmFnSG9yaXpvbnRhbFwiLCBcImRyYWdEaXZcIik7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcXVhbnRpdHk7IGkrKykge1xuICAgIGxldCBkcmFnQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHJhZ0NlbGwuY2xhc3NMaXN0LmFkZChcImRyYWdDZWxsXCIpO1xuXG4gICAgZHJhZ1NoaXAuYXBwZW5kKGRyYWdDZWxsKTtcbiAgfVxuXG4gIHJldHVybiBkcmFnU2hpcDtcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVHYW1lQm9hcmRVaSwgZ2VuZXJhdGVEcmFnZ2FibGVQbGF5ZXJTaGlwcyB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgbGV0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IGF0dGFjayA9IChjb09yZCwgYW5vdGhlclBsYXllcikgPT4ge1xuICAgIHJldHVybiBhbm90aGVyUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvT3JkKTtcbiAgfTtcblxuICByZXR1cm4geyBnYW1lYm9hcmQsIGF0dGFjayB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJpbXBvcnQgeyBBSSB9IGZyb20gXCIuL2FpXCI7XG5cbmxldCBhaSA9IEFJKCk7XG5cbmxldCBsb2NhdGlvbjEgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbig1KTtcbmxldCBsb2NhdGlvbjIgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbig0KTtcbmxldCBsb2NhdGlvbjMgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbigzKTtcbmxldCBsb2NhdGlvbjQgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbigzKTtcbmxldCBsb2NhdGlvbjUgPSBhaS5jcmVhdGVWYWxpZFNoaXBMb2NhdGlvbigyKTtcblxuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjEpO1xuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjIpO1xuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjMpO1xuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjQpO1xuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChsb2NhdGlvbjUpO1xuXG4vLyBhaSBib2FyZCBwcmludGluZyBmb3IgdGVzdFxuZnVuY3Rpb24gcG9wdWxhdGVBaUJvYXJkKCkge1xuICAvLyBjb25zb2xlLmxvZyhhaS5hbGxBSVNoaXBMb2NhdGlvbnMpO1xuICBhaS5hbGxBSVNoaXBMb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICBsZXQgeCA9IEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKTtcbiAgICAvLyBbMV0gaW5kaWNhdGVzIGNlbGxzIGZyb20gYWkgYm9hcmRcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoeClbMV07XG4gICAgLy8gY29uc29sZS5sb2coY2VsbCk7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVwbGFjZShcImFpQ2VsbFwiLCBcInNoaXBDZWxsXCIpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgYWksIHBvcHVsYXRlQWlCb2FyZCB9O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmxldCBwbGF5ZXIgPSBQbGF5ZXIoKTtcblxuLy8gcGxheWVyIGJvYXJkXG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllckJvYXJkKCkge1xuICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBMb2NhdGlvbkxpc3RzKTtcbiAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJcIik7XG4gIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkKTtcblxuICBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBMb2NhdGlvbkxpc3RzLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKTtcbiAgICAvLyBbMF0gaW5kaWNhdGVzIGNlbGxzIGZyb20gcGxheWVyIGJvYXJkXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSlbMF07XG4gICAgY2VsbC5jbGFzc0xpc3QucmVwbGFjZShcInBsYXllckNlbGxcIiwgXCJzaGlwQ2VsbFwiKTtcbiAgfSk7XG59XG4vLyBwb3B1bGF0ZVBsYXllckJvYXJkKCk7XG5cbmV4cG9ydCB7IHBsYXllciwgcG9wdWxhdGVQbGF5ZXJCb2FyZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbiAgZ2VuZXJhdGVHYW1lQm9hcmRVaSxcbiAgZ2VuZXJhdGVEcmFnZ2FibGVQbGF5ZXJTaGlwcyxcbn0gZnJvbSBcIi4vZ2VuZXJhdGVHYW1lQm9hcmRVaVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVBaUJvYXJkLCBnYW1lbG9vcCB9IGZyb20gXCIuL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBwbGF5ZXIsIHBvcHVsYXRlUGxheWVyQm9hcmQgfSBmcm9tIFwiLi9wb3B1bGF0ZVBsYXllclwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5jb25zdCBnYW1lQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZ2FtZUJvYXJkRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZUJvYXJkRGl2XCIpO1xuXG5nYW1lQm9hcmREaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVHYW1lQm9hcmRVaShcInBsYXllclwiKSk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkRGl2KTtcblxuLy8gRFJBRyAmIERST1BcbmdhbWVCb2FyZERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZURyYWdnYWJsZVBsYXllclNoaXBzKCkpO1xuXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyQ2VsbFwiKTtcbi8vIGNvbnNvbGUubG9nKGNlbGxzKTtcblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAvLyBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NMaXN0WzBdKTtcbiAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBbXG4gICAgZS50YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0WzBdLFxuICAgIGUudGFyZ2V0LmlkLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ092ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlcihlKSB7XG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnRW50ZXJcIik7XG5cbiAgbWFya0JvYXJkV2l0aERyYWdORHJvcChlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ0xlYXZlKGUpIHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdFbnRlclwiKTtcblxuICBtYXJrQm9hcmRXaXRoRHJhZ05Ecm9wKGUpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcm9wKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBlLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyYWdEaXZcIikpO1xuICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG5cbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdFbnRlclwiKTtcblxuICBtYXJrQm9hcmRXaXRoRHJhZ05Ecm9wKGUpO1xuXG4gIGxldCBzaGlwTG9jYXRpb24gPSBbXG4gICAgW3BhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVsyXSksIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVs0XSldLFxuICBdO1xuXG4gIGxldCBjZWxsQ291bnQgPSBwYXJzZUludChlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKVswXSk7XG4gIGxldCBjZWxsQ2xhc3MgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKS5zbGljZSgyLCAxNik7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjZWxsQ291bnQ7IGkrKykge1xuICAgIGlmIChjZWxsQ2xhc3MgPT0gXCJkcmFnSG9yaXpvbnRhbFwiKSB7XG4gICAgICBzaGlwTG9jYXRpb24ucHVzaChbXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVsyXSksXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVs0XSkgKyBpLFxuICAgICAgXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBMb2NhdGlvbi5wdXNoKFtcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzBdWzJdKSArIGksXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVs0XSksXG4gICAgICBdKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coc2hpcExvY2F0aW9uKTtcblxuICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwTG9jYXRpb24pO1xuICBwb3B1bGF0ZVBsYXllckJvYXJkKCk7XG5cbiAgLy8gY29uc29sZS5sb2coZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIikuc2xpY2UoLTUpKTtcbiAgbGV0IHNoaXBOYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIikuc2xpY2UoLTUpO1xuICBsZXQgZHJvcFNoaXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3BTaGlwRGl2XCIpO1xuICBkcm9wU2hpcERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwTmFtZSkpO1xuXG4gIC8vIEFkZCBhaSBib2FyZCBhbmQgcnVuIGdhbWUgYWZ0ZXIgYWxsIHBsYXllciBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLlxuICBpZiAoZHJvcFNoaXBEaXYuY2hpbGRFbGVtZW50Q291bnQgPT0gMCkge1xuICAgIGdhbWVCb2FyZERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyYWdTaGlwQ29udGFpbmVyXCIpKTtcbiAgICBnYW1lQm9hcmREaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVHYW1lQm9hcmRVaShcImFpXCIpKTtcbiAgICBwb3B1bGF0ZUFpQm9hcmQoKTtcbiAgICBnYW1lbG9vcCgpO1xuICB9XG59XG5cbmxldCBkcmFnRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnRGl2XCIpO1xuZHJhZ0Rpdi5mb3JFYWNoKChkaXYpID0+IHtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgaGFuZGxlRHJhZ1N0YXJ0KTtcbn0pO1xuXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGhhbmRsZURyYWdPdmVyKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGhhbmRsZURyYWdFbnRlcik7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBoYW5kbGVEcmFnTGVhdmUpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGhhbmRsZURyb3ApO1xufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xucG9wdWxhdGVQbGF5ZXJCb2FyZCgpO1xuLy8gcG9wdWxhdGVBaUJvYXJkKCk7XG4vLyBnYW1lbG9vcCgpO1xuXG5mdW5jdGlvbiBtYXJrQm9hcmRXaXRoRHJhZ05Ecm9wKGUpIHtcbiAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcbiAgbGV0IGNlbGxDb3VudCA9IHBhcnNlSW50KGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpWzBdKTtcbiAgLy8gY29uc29sZS5sb2coY2VsbENvdW50KTtcbiAgbGV0IGNlbGxDbGFzcyA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpLnNsaWNlKDIsIDE2KTtcbiAgLy8gY29uc29sZS5sb2coY2VsbENsYXNzKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IGNlbGxDb3VudDsgaSsrKSB7XG4gICAgbGV0IHNoaXBMb2NhdGlvbjtcbiAgICBpZiAoY2VsbENsYXNzID09IFwiZHJhZ0hvcml6b250YWxcIikge1xuICAgICAgc2hpcExvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bMl0pLFxuICAgICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVs0XSkgKyBpLFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcExvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bMl0pICsgaSxcbiAgICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF1bNF0pLFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwTG9jYXRpb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2hpcExvY2F0aW9uKVswXSk7XG4gICAgaWYgKGUudHlwZSA9PSBcImRyYWdlbnRlclwiKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzaGlwTG9jYXRpb24pWzBdXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiZHJhZ0VudGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzaGlwTG9jYXRpb24pWzBdXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ0VudGVyXCIpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9