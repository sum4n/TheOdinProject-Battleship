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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(28, 60, 91);\n}\n\n#gameBoardDiv {\n  display: flex;\n  justify-content: space-around;\n  height: 500px;\n  border: 1px solid blue;\n  margin: 10px;\n}\n\n/* player and ai board */\n#player,\n#ai,\n#dragShipContainer {\n  height: 420px;\n  width: 400px;\n  text-align: center;\n  color: white;\n}\n\n#dropShipDiv {\n  border: 2px solid red;\n  height: 415px;\n  width: 410px;\n}\n\n.columnCell {\n  display: flex;\n  height: 40px;\n  width: 400px;\n  border: 1px solid red;\n}\n\n.playerCell,\n.aiCell,\n.shipCell,\n.hitCell,\n.missCell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid red;\n}\n\n.shipCell {\n  background-color: green;\n}\n\n.hitCell {\n  background-color: yellow;\n}\n\n.missCell {\n  background-color: rgb(218, 137, 137);\n}\n\n.dragDiv {\n  margin-bottom: 10px;\n  width: fit-content;\n}\n\n.dragHorizontal {\n  display: flex;\n}\n\n.dragEnter {\n  background-color: green;\n}\n\n.dragCell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid green;\n  background-color: rgb(4, 255, 251);\n}\n\n#modalDiv {\n  display: block; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(128, 126, 121); /* Fallback color */\n  background-color: rgba(106, 109, 107, 0.4); /* Black w/ opacity */\n}\n\n.modalContent {\n  background-color: rgb(28, 60, 91);\n  margin: auto;\n  padding: 20px;\n  border: 1px solid antiquewhite;\n  width: 80%;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n}\n\n#winnerMsg {\n  font-size: 2rem;\n  color: antiquewhite;\n  font-weight: bold;\n}\n\n#playAgainBtn {\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 10px 20px;\n  background-color: antiquewhite;\n  border: none;\n  border-radius: 5px;\n}\n\n#playAgainBtn:hover {\n  background-color: aliceblue;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA,wBAAwB;AACxB;;;EAGE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA;;;;;EAKE,YAAY;EACZ,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,cAAc,EAAE,sBAAsB;EACtC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,kBAAkB,EAAE,wBAAwB;EAC5C,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,oCAAoC,EAAE,mBAAmB;EACzD,0CAA0C,EAAE,qBAAqB;AACnE;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["body {\n  background-color: rgb(28, 60, 91);\n}\n\n#gameBoardDiv {\n  display: flex;\n  justify-content: space-around;\n  height: 500px;\n  border: 1px solid blue;\n  margin: 10px;\n}\n\n/* player and ai board */\n#player,\n#ai,\n#dragShipContainer {\n  height: 420px;\n  width: 400px;\n  text-align: center;\n  color: white;\n}\n\n#dropShipDiv {\n  border: 2px solid red;\n  height: 415px;\n  width: 410px;\n}\n\n.columnCell {\n  display: flex;\n  height: 40px;\n  width: 400px;\n  border: 1px solid red;\n}\n\n.playerCell,\n.aiCell,\n.shipCell,\n.hitCell,\n.missCell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid red;\n}\n\n.shipCell {\n  background-color: green;\n}\n\n.hitCell {\n  background-color: yellow;\n}\n\n.missCell {\n  background-color: rgb(218, 137, 137);\n}\n\n.dragDiv {\n  margin-bottom: 10px;\n  width: fit-content;\n}\n\n.dragHorizontal {\n  display: flex;\n}\n\n.dragEnter {\n  background-color: green;\n}\n\n.dragCell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid green;\n  background-color: rgb(4, 255, 251);\n}\n\n#modalDiv {\n  display: block; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(128, 126, 121); /* Fallback color */\n  background-color: rgba(106, 109, 107, 0.4); /* Black w/ opacity */\n}\n\n.modalContent {\n  background-color: rgb(28, 60, 91);\n  margin: auto;\n  padding: 20px;\n  border: 1px solid antiquewhite;\n  width: 80%;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n}\n\n#winnerMsg {\n  font-size: 2rem;\n  color: antiquewhite;\n  font-weight: bold;\n}\n\n#playAgainBtn {\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 10px 20px;\n  background-color: antiquewhite;\n  border: none;\n  border-radius: 5px;\n}\n\n#playAgainBtn:hover {\n  background-color: aliceblue;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/gameFininshModal.js":
/*!*********************************!*\
  !*** ./src/gameFininshModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameFinishModal: () => (/* binding */ gameFinishModal)
/* harmony export */ });
function gameFinishModal(msg) {
  const modalDiv = document.createElement("div");
  modalDiv.setAttribute("id", "modalDiv");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modalContent");

  const winnerMsg = document.createElement("p");
  winnerMsg.setAttribute("id", "winnerMsg");
  winnerMsg.textContent = msg;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.setAttribute("id", "playAgainBtn");
  playAgainBtn.textContent = "Play Again";

  playAgainBtn.addEventListener("click", () => {
    location.reload();
    return false;
  });

  modalContent.append(winnerMsg, playAgainBtn);

  modalDiv.appendChild(modalContent);

  return modalDiv;
}




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
/* harmony import */ var _gameFininshModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameFininshModal */ "./src/gameFininshModal.js");




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
      document.querySelector("body").append((0,_gameFininshModal__WEBPACK_IMPORTED_MODULE_2__.gameFinishModal)("You Lose!!"));
    }

    if (_populateAi__WEBPACK_IMPORTED_MODULE_1__.ai.gameboard.allShipsSunk()) {
      document.querySelector("body").append((0,_gameFininshModal__WEBPACK_IMPORTED_MODULE_2__.gameFinishModal)("You Win!!"));
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
}

function handleDragLeave(e) {
  e.target.classList.remove("dragEnter");
}

function handleDrop(e) {
  e.preventDefault();
  // e.target.appendChild(document.getElementById("dragDiv"));
  // console.log(e.target);

  e.target.classList.remove("dragEnter");

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVFQUEwQjtBQUM5QixJQUFJLG9FQUFtQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUVBQW1CO0FBQ2hEO0FBQ0EsSUFBSSxtREFBUTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG9FQUFtQjtBQUNuQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVTaGlwLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUZpbmluc2hNb2RhbC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb29wLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2VuZXJhdGVHYW1lQm9hcmRVaS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BvcHVsYXRlQWkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9wb3B1bGF0ZVBsYXllci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDYwLCA5MSk7XFxufVxcblxcbiNnYW1lQm9hcmREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi8qIHBsYXllciBhbmQgYWkgYm9hcmQgKi9cXG4jcGxheWVyLFxcbiNhaSxcXG4jZHJhZ1NoaXBDb250YWluZXIge1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Ryb3BTaGlwRGl2IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGhlaWdodDogNDE1cHg7XFxuICB3aWR0aDogNDEwcHg7XFxufVxcblxcbi5jb2x1bW5DZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wbGF5ZXJDZWxsLFxcbi5haUNlbGwsXFxuLnNoaXBDZWxsLFxcbi5oaXRDZWxsLFxcbi5taXNzQ2VsbCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnNoaXBDZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGl0Q2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5taXNzQ2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxMzcsIDEzNyk7XFxufVxcblxcbi5kcmFnRGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5kcmFnSG9yaXpvbnRhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJhZ0VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZHJhZ0NlbGwge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAyNTUsIDI1MSk7XFxufVxcblxcbiNtb2RhbERpdiB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI2LCAxMjEpOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDYsIDEwOSwgMTA3LCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi5tb2RhbENvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCA2MCwgOTEpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGFudGlxdWV3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN3aW5uZXJNc2cge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcGxheUFnYWluQnRuIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcGxheUFnYWluQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLHdCQUF3QjtBQUN4Qjs7O0VBR0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsY0FBYyxFQUFFLHNCQUFzQjtFQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtFQUM1QyxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1QyxvQ0FBb0MsRUFBRSxtQkFBbUI7RUFDekQsMENBQTBDLEVBQUUscUJBQXFCO0FBQ25FOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDYwLCA5MSk7XFxufVxcblxcbiNnYW1lQm9hcmREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi8qIHBsYXllciBhbmQgYWkgYm9hcmQgKi9cXG4jcGxheWVyLFxcbiNhaSxcXG4jZHJhZ1NoaXBDb250YWluZXIge1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Ryb3BTaGlwRGl2IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGhlaWdodDogNDE1cHg7XFxuICB3aWR0aDogNDEwcHg7XFxufVxcblxcbi5jb2x1bW5DZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wbGF5ZXJDZWxsLFxcbi5haUNlbGwsXFxuLnNoaXBDZWxsLFxcbi5oaXRDZWxsLFxcbi5taXNzQ2VsbCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnNoaXBDZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGl0Q2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5taXNzQ2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxMzcsIDEzNyk7XFxufVxcblxcbi5kcmFnRGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5kcmFnSG9yaXpvbnRhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJhZ0VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZHJhZ0NlbGwge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAyNTUsIDI1MSk7XFxufVxcblxcbiNtb2RhbERpdiB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI2LCAxMjEpOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDYsIDEwOSwgMTA3LCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi5tb2RhbENvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCA2MCwgOTEpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGFudGlxdWV3aGl0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN3aW5uZXJNc2cge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcGxheUFnYWluQnRuIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcGxheUFnYWluQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5jb25zdCBBSSA9ICgpID0+IHtcbiAgbGV0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGxldCBhaUF0dGFja0xpc3QgPSBbXTtcblxuICBjb25zdCBhdHRhY2sgPSAodGFyZ2V0UGxheWVyLCBhdHRhY2tMb2NhdGlvbiA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKSkgPT4ge1xuICAgIC8vIGlmIHRoZSBhdHRhY2tMb2NhdGlvbiBpcyBpbiB0aGUgYWlBdHRhY2tMaXN0LCBjaG9zZSBhbm90aGVyIGF0dGFja0xvY2F0aW9uLlxuICAgIHdoaWxlIChhaUF0dGFja0xpc3QuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoYXR0YWNrTG9jYXRpb24pKSkge1xuICAgICAgYXR0YWNrTG9jYXRpb24gPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgfVxuICAgIGFpQXR0YWNrTGlzdC5wdXNoKEpTT04uc3RyaW5naWZ5KGF0dGFja0xvY2F0aW9uKSk7XG4gICAgcmV0dXJuIHRhcmdldFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2tMb2NhdGlvbik7XG4gIH07XG5cbiAgbGV0IGFsbEFJU2hpcExvY2F0aW9ucyA9IFtdO1xuXG4gIGNvbnN0IGNyZWF0ZVZhbGlkU2hpcExvY2F0aW9uID0gKFxuICAgIHNpemUgPSA1LFxuICAgIHNoaXBIZWFkID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpXG4gICkgPT4ge1xuICAgIGxldCBsZW5ndGggPSBzaXplIC0gMTtcbiAgICBsZXQgc2hpcExvY2F0aW9ucyA9IFtdO1xuXG4gICAgd2hpbGUgKFxuICAgICAgYWxsQUlTaGlwTG9jYXRpb25zLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KHNoaXBIZWFkKSkgfHxcbiAgICAgIHNoaXBIZWFkWzBdICsgbGVuZ3RoID49IDlcbiAgICApIHtcbiAgICAgIHNoaXBIZWFkID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgIH1cblxuICAgIGxldCBpID0gc2hpcEhlYWRbMF07XG4gICAgbGV0IGogPSBzaGlwSGVhZFsxXTtcbiAgICBsZXQgayA9IHNoaXBIZWFkWzBdICsgbGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgIT0gaykge1xuICAgICAgaSsrO1xuICAgICAgLy8gaWYgdGhlcmUgaXMgZHVwbGljYXRlLCByZWN1cnNpdmVseSBzdGFydCB0aGUgZnVuY3Rpb24gYWdhaW5cbiAgICAgIGlmIChhbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW2ksIGpdKSkpIHtcbiAgICAgICAgc2hpcExvY2F0aW9ucyA9IFtdO1xuICAgICAgICByZXR1cm4gY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oc2l6ZSk7XG4gICAgICB9XG4gICAgICBzaGlwTG9jYXRpb25zLnB1c2goW2ksIGpdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBMb2NhdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGFkZCBzaGlwaGVhZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG4gICAgc2hpcExvY2F0aW9ucy5zcGxpY2UoMCwgMCwgc2hpcEhlYWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBMb2NhdGlvbnMpO1xuXG4gICAgc2hpcExvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgYWxsQUlTaGlwTG9jYXRpb25zLnB1c2goSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwTG9jYXRpb25zO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGFpQXR0YWNrTGlzdCxcbiAgICBhdHRhY2ssXG4gICAgY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24sXG4gICAgYWxsQUlTaGlwTG9jYXRpb25zLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpIHtcbiAgbGV0IGNvT3JkWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IGNvT3JkWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICByZXR1cm4gW2NvT3JkWCwgY29PcmRZXTtcbn1cblxuZXhwb3J0IHsgQUkgfTtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCB0aW1lc0hpdCA9IDA7XG4gIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHJldHVybiArK3RpbWVzSGl0O1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAobGVuZ3RoID09IHRpbWVzSGl0KSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoICE9IHRpbWVzSGl0KSByZXR1cm4gc3VuaztcbiAgfTtcblxuICBjb25zdCBzaG93SGl0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aW1lc0hpdDtcbiAgfTtcblxuICByZXR1cm4geyBsZW5ndGgsIGhpdCwgaXNTdW5rLCBzaG93SGl0IH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vYmF0dGxlU2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIC8vIHNoaXBMaXN0cyB3aWxsIGJlIHVzZWQgZm9yIHRyYWNraW5nIHNoaXBzIGFuZCB0byBiZSBhYmxlIHRvIHVzZSBhY3Rpb25zIG9uIHRoZW0uXG4gIGxldCBzaGlwTGlzdHMgPSBbXTtcbiAgbGV0IG1pc3NlZFNob3RzID0gW107XG4gIGxldCBzaGlwTG9jYXRpb25MaXN0cyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb09yZCkgPT4ge1xuICAgIGxldCBzaGlwTGVuZ3RoID0gY29PcmQubGVuZ3RoO1xuXG4gICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuICAgIC8vIGxvY2F0aW9uIGlzIGNvbnZlcnRlZCBpbnRvIHN0cmluZyB0byB1c2UgLmluY2x1ZGVzIG1ldGhvZC5cbiAgICBzaGlwLmxvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkoY29PcmQpO1xuXG4gICAgc2hpcExpc3RzLnB1c2goc2hpcCk7XG5cbiAgICBjb09yZC5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgc2hpcExvY2F0aW9uTGlzdHMucHVzaChKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb09yZCkgPT4ge1xuICAgIC8vIGZpbHRlciB0aHJvdWdoIHNoaXAncyBsb2NhdGlvbiBjb29yZGluYXRlIHRvIGZpbmQgaWYgYXR0YWNrIGNvb3JkaW5hdGUgaGl0cyBzaGlwLlxuICAgIC8vIGlmIGF0dGFjayBoaXRzIHNoaXAsIHRhcmdldFNoaXAgd2lsbCBnZXQgdGhlICdzaGlwIG9iamVjdCcgdG8gc2VuZCBoaXQgZnVuY3Rpb25cbiAgICAvLyB0byB0aGUgJ3NoaXAgb2JqZWN0JyBvciB0aGUgYXR0YWNrIGNvb3JkaW5hdGUgZ29lcyBpbnRvIG1pc3NlZFNob3QuXG4gICAgbGV0IHRhcmdldFNoaXAgPSBzaGlwTGlzdHMuZmlsdGVyKChzaGlwKSA9PlxuICAgICAgc2hpcC5sb2NhdGlvbi5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb09yZCkpXG4gICAgKTtcblxuICAgIGlmICh0YXJnZXRTaGlwLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhcmdldFNoaXBbMF0uaGl0KCk7XG4gICAgICByZXR1cm4gdGFyZ2V0U2hpcFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2VkU2hvdHMucHVzaChjb09yZCk7XG4gICAgICByZXR1cm4gY29PcmQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc2hpcHNTdW5rID0gc2hpcExpc3RzLmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICAvLyBEb24ndCBmb3JnZXQgdG8gd3JpdGUgcmV0dXJuIG5leHQgdGltZS4gOylcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpID09IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHNTdW5rO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2hpcExpc3RzLFxuICAgIG1pc3NlZFNob3RzLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBzaGlwTG9jYXRpb25MaXN0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiZnVuY3Rpb24gZ2FtZUZpbmlzaE1vZGFsKG1zZykge1xuICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kYWxEaXZcIik7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbENvbnRlbnRcIik7XG5cbiAgY29uc3Qgd2lubmVyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHdpbm5lck1zZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndpbm5lck1zZ1wiKTtcbiAgd2lubmVyTXNnLnRleHRDb250ZW50ID0gbXNnO1xuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYXlBZ2FpbkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXlBZ2FpbkJ0blwiKTtcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG5cbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICBtb2RhbENvbnRlbnQuYXBwZW5kKHdpbm5lck1zZywgcGxheUFnYWluQnRuKTtcblxuICBtb2RhbERpdi5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIHJldHVybiBtb2RhbERpdjtcbn1cblxuZXhwb3J0IHsgZ2FtZUZpbmlzaE1vZGFsIH07XG4iLCJpbXBvcnQgeyBwbGF5ZXIsIHBvcHVsYXRlUGxheWVyQm9hcmQgfSBmcm9tIFwiLi9wb3B1bGF0ZVBsYXllclwiO1xuaW1wb3J0IHsgYWksIHBvcHVsYXRlQWlCb2FyZCB9IGZyb20gXCIuL3BvcHVsYXRlQWlcIjtcbmltcG9ydCB7IGdhbWVGaW5pc2hNb2RhbCB9IGZyb20gXCIuL2dhbWVGaW5pbnNoTW9kYWxcIjtcblxuLy8gZ2FtZSBsb29wXG5mdW5jdGlvbiBnYW1lbG9vcCgpIHtcbiAgY29uc3QgYWlHYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FpXCIpO1xuXG4gIGFpR2FtZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdCk7XG4gICAgLy8gTm90aGluZyBoYXBwZW5zIGlmIHBsYXllciBjbGlja3Mgb24gYWkgYm9hcmQncyBhbHJlZHkgY29sb3JlZCBjZWxscyBvclxuICAgIC8vIHdoZW4gdGhlIGdhbWUgaGFzIGVuZGVkLlxuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhpdENlbGxcIikgfHxcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NDZWxsXCIpIHx8XG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpIHx8XG4gICAgICBhaS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlIGdhbWUgaGFzIG5vdCBiZWVuIHdvbiBwbGF5ZXIgYW5kIGFpIHdpbGwgYXR0YWNrYWluZyBlYWNoIG90aGVyXG4gICAgLy8gYXMgd2VsbCBhcyBzaG93IHRoZSBoaXRzIGFuZCBtaXNzZXMgb24gdGhlIGJvYXJkcy5cbiAgICBpZiAoXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpICE9IHRydWUgJiZcbiAgICAgIGFpLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSAhPSB0cnVlXG4gICAgKSB7XG4gICAgICAvLyBQbGF5ZXIgYXR0YWNrcyBBSVxuICAgICAgLy8gY29udmVydCBjZWxsIGNsYXNzIHN0cmluZyB0byBhcnJheVxuICAgICAgbGV0IHBsYXllclRhcmdldCA9IFtcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NOYW1lWzJdKSxcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NOYW1lWzRdKSxcbiAgICAgIF07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllclRhcmdldCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhaS5hbGxBSVNoaXBMb2NhdGlvbnMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocGxheWVyVGFyZ2V0KSkpO1xuXG4gICAgICAvLyBIaXRzIHBhaW50cyB0YXJnZXQgcmVkLCBtaXNzZXMgcGFpbnRzIHRhcmdldCByZWQuXG4gICAgICBpZiAoYWkuYWxsQUlTaGlwTG9jYXRpb25zLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KHBsYXllclRhcmdldCkpKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZXBsYWNlKFwiYWlDZWxsXCIsIFwiaGl0Q2VsbFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZXBsYWNlKFwiYWlDZWxsXCIsIFwibWlzc0NlbGxcIik7XG4gICAgICB9XG4gICAgICBwbGF5ZXIuYXR0YWNrKHBsYXllclRhcmdldCwgYWkpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzKTtcblxuICAgICAgLy8gQWkgYXR0YWNrcyBQbGF5ZXIgKGFmdGVyIHBsYXllciBhdHRhY2tzKSBhbmQgcHJpbnQgYXR0YWNrcyBvbiBnYW1lYm9hcmQuXG4gICAgICBhaS5hdHRhY2socGxheWVyKTtcblxuICAgICAgLy8gZmluZCB0aGUgbGF0ZXN0IGF0dGFjayAod2hpY2ggaXMgbGFzdCBpdGVtIG9uIHRoZSBsaXN0KVxuICAgICAgbGV0IHRhcmdldCA9IGFpLmFpQXR0YWNrTGlzdFthaS5haUF0dGFja0xpc3QubGVuZ3RoIC0gMV07XG4gICAgICB0YXJnZXQgPSBKU09OLnN0cmluZ2lmeSh0YXJnZXQpO1xuXG4gICAgICBsZXQgYWlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRhcmdldClbMF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhhaVRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwQ2VsbFwiKSk7XG4gICAgICAvLyBwcmludCBzdWNjZXNzZnVsIGF0dGFjayB5ZWxsb3cgYW5kIHVuc3VjY2Vzc2Z1bCByZWRcbiAgICAgIGlmIChhaVRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwQ2VsbFwiKSkge1xuICAgICAgICBhaVRhcmdldC5jbGFzc0xpc3QucmVwbGFjZShcInNoaXBDZWxsXCIsIFwiaGl0Q2VsbFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFpVGFyZ2V0LmNsYXNzTGlzdC5yZXBsYWNlKFwicGxheWVyQ2VsbFwiLCBcIm1pc3NDZWxsXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhaVRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTmFtZSk7XG5cbiAgICAvLyBJZiB0aGUgZ2FtZSBpcyB3b24sIGFsZXJ0IHdpbm5lcnMgbmFtZS5cbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kKGdhbWVGaW5pc2hNb2RhbChcIllvdSBMb3NlISFcIikpO1xuICAgIH1cblxuICAgIGlmIChhaS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZChnYW1lRmluaXNoTW9kYWwoXCJZb3UgV2luISFcIikpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlUGxheWVyQm9hcmQsIHBvcHVsYXRlQWlCb2FyZCwgZ2FtZWxvb3AgfTtcbiIsImZ1bmN0aW9uIGdlbmVyYXRlR2FtZUJvYXJkVWkoaWQpIHtcbiAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZUJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcblxuICBnYW1lQm9hcmRDb250YWluZXIudGV4dENvbnRlbnQgPSBpZCArIFwiIEJvYXJkXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgbGV0IGNvbHVtbkRpdiA9IGFkZENvbHVtbkRpdihnYW1lQm9hcmRDb250YWluZXIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgYWRkUm93RGl2KGNvbHVtbkRpdiwgW2ksIGpdLCBpZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdhbWVCb2FyZENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkQ29sdW1uRGl2KHBhcmVudERpdikge1xuICBjb25zdCBjb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2x1bW5EaXYuY2xhc3NMaXN0LmFkZChcImNvbHVtbkNlbGxcIik7XG5cbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGNvbHVtbkRpdik7XG5cbiAgcmV0dXJuIGNvbHVtbkRpdjtcbn1cblxuZnVuY3Rpb24gYWRkUm93RGl2KHBhcmVudERpdiwgYXJyYXksIGNsYXNzbmFtZSkge1xuICAvLyBkbyBub3Qga25vdyB3aHkgSlNPTi5zdHJpbmdmeSBpcyBuZWVkZWQgdHdpY2UgaGVyZS5cbiAgYXJyYXkgPSBKU09OLnN0cmluZ2lmeShhcnJheSk7XG4gIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gJ2FycmF5JyBjbGFzcyBmb3IgdGFyZ2V0dGluZy4gQWRkIHRoaXMgYmVmb3JlICdjZWxsJyBmb3IgZ2FtZUxvb3AoKSAnaW5kZXgnIHRhcmdldGluZy5cbiAgcm93RGl2LmNsYXNzTGlzdC5hZGQoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcblxuICAvLyAnY2VsbCcgY2xhc3MgZm9yIHN0eWxpbmdcbiAgcm93RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lICsgXCJDZWxsXCIpO1xuXG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xuXG4gIHJldHVybiByb3dEaXY7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRHJhZ2dhYmxlUGxheWVyU2hpcHMoKSB7XG4gIGNvbnN0IGRyYWdTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJhZ1NoaXBDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkcmFnU2hpcENvbnRhaW5lclwiKTtcblxuICBkcmFnU2hpcENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiRHJhZyBzaGlwcy4gQ2xpY2sgdG8gUk9UQVRFLlwiO1xuXG4gIGNvbnN0IGRyb3BTaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJvcFNoaXBEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkcm9wU2hpcERpdlwiKTtcblxuICBsZXQgc2hpcDEgPSBnZW5lcmF0ZVNoaXBDZWxscygyLCBcInNoaXAxXCIpO1xuICBsZXQgc2hpcDIgPSBnZW5lcmF0ZVNoaXBDZWxscygzLCBcInNoaXAyXCIpO1xuICBsZXQgc2hpcDMgPSBnZW5lcmF0ZVNoaXBDZWxscygzLCBcInNoaXAzXCIpO1xuICBsZXQgc2hpcDQgPSBnZW5lcmF0ZVNoaXBDZWxscyg0LCBcInNoaXA0XCIpO1xuICBsZXQgc2hpcDUgPSBnZW5lcmF0ZVNoaXBDZWxscyg1LCBcInNoaXA1XCIpO1xuXG4gIGRyb3BTaGlwRGl2LmFwcGVuZChzaGlwMSwgc2hpcDIsIHNoaXAzLCBzaGlwNCwgc2hpcDUpO1xuXG4gIGRyYWdTaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3BTaGlwRGl2KTtcblxuICByZXR1cm4gZHJhZ1NoaXBDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2hpcENlbGxzKHF1YW50aXR5LCBzaGlwTmFtZSkge1xuICBjb25zdCBkcmFnU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyYWdTaGlwLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgZHJhZ1NoaXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgc2hpcE5hbWUpO1xuICBkcmFnU2hpcC5jbGFzc0xpc3QuYWRkKFwiZHJhZ0RpdlwiLCBcImRyYWdIb3Jpem9udGFsXCIpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHF1YW50aXR5OyBpKyspIHtcbiAgICBsZXQgZHJhZ0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRyYWdDZWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnQ2VsbFwiKTtcblxuICAgIGRyYWdTaGlwLmFwcGVuZChkcmFnQ2VsbCk7XG4gIH1cblxuICByZXR1cm4gZHJhZ1NoaXA7XG59XG5cbmV4cG9ydCB7IGdlbmVyYXRlR2FtZUJvYXJkVWksIGdlbmVyYXRlRHJhZ2dhYmxlUGxheWVyU2hpcHMgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBhdHRhY2sgPSAoY29PcmQsIGFub3RoZXJQbGF5ZXIpID0+IHtcbiAgICByZXR1cm4gYW5vdGhlclBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb09yZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2FtZWJvYXJkLCBhdHRhY2sgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9haVwiO1xuXG5sZXQgYWkgPSBBSSgpO1xuXG5sZXQgbG9jYXRpb24xID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oNSk7XG5sZXQgbG9jYXRpb24yID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oNCk7XG5sZXQgbG9jYXRpb24zID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oMyk7XG5sZXQgbG9jYXRpb240ID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oMyk7XG5sZXQgbG9jYXRpb241ID0gYWkuY3JlYXRlVmFsaWRTaGlwTG9jYXRpb24oMik7XG5cbmFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb24xKTtcbmFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb24yKTtcbmFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb24zKTtcbmFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb240KTtcbmFpLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb241KTtcblxuLy8gYWkgYm9hcmQgcHJpbnRpbmcgZm9yIHRlc3RcbmZ1bmN0aW9uIHBvcHVsYXRlQWlCb2FyZCgpIHtcbiAgLy8gY29uc29sZS5sb2coYWkuYWxsQUlTaGlwTG9jYXRpb25zKTtcbiAgYWkuYWxsQUlTaGlwTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgbGV0IHggPSBKU09OLnN0cmluZ2lmeShsb2NhdGlvbik7XG4gICAgLy8gWzFdIGluZGljYXRlcyBjZWxscyBmcm9tIGFpIGJvYXJkXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHgpWzFdO1xuICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgIGNlbGwuY2xhc3NMaXN0LnJlcGxhY2UoXCJhaUNlbGxcIiwgXCJzaGlwQ2VsbFwiKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGFpLCBwb3B1bGF0ZUFpQm9hcmQgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5sZXQgcGxheWVyID0gUGxheWVyKCk7XG5cbi8vIHBsYXllciBib2FyZFxuZnVuY3Rpb24gcG9wdWxhdGVQbGF5ZXJCb2FyZCgpIHtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyLmdhbWVib2FyZC5zaGlwTG9jYXRpb25MaXN0cyk7XG4gIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyXCIpO1xuICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZCk7XG5cbiAgcGxheWVyLmdhbWVib2FyZC5zaGlwTG9jYXRpb25MaXN0cy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSk7XG4gICAgLy8gWzBdIGluZGljYXRlcyBjZWxscyBmcm9tIHBsYXllciBib2FyZFxuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpWzBdO1xuICAgIGNlbGwuY2xhc3NMaXN0LnJlcGxhY2UoXCJwbGF5ZXJDZWxsXCIsIFwic2hpcENlbGxcIik7XG4gIH0pO1xufVxuLy8gcG9wdWxhdGVQbGF5ZXJCb2FyZCgpO1xuXG5leHBvcnQgeyBwbGF5ZXIsIHBvcHVsYXRlUGxheWVyQm9hcmQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGdlbmVyYXRlR2FtZUJvYXJkVWksXG4gIGdlbmVyYXRlRHJhZ2dhYmxlUGxheWVyU2hpcHMsXG59IGZyb20gXCIuL2dlbmVyYXRlR2FtZUJvYXJkVWlcIjtcbmltcG9ydCB7IHBvcHVsYXRlQWlCb2FyZCwgZ2FtZWxvb3AgfSBmcm9tIFwiLi9nYW1lTG9vcFwiO1xuaW1wb3J0IHsgcGxheWVyLCBwb3B1bGF0ZVBsYXllckJvYXJkIH0gZnJvbSBcIi4vcG9wdWxhdGVQbGF5ZXJcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgZ2FtZUJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmdhbWVCb2FyZERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWVCb2FyZERpdlwiKTtcblxuZ2FtZUJvYXJkRGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlR2FtZUJvYXJkVWkoXCJwbGF5ZXJcIikpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGdhbWVCb2FyZERpdik7XG5cbmdhbWVCb2FyZERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZURyYWdnYWJsZVBsYXllclNoaXBzKCkpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdEaXZcIikuZm9yRWFjaCgoZGl2KSA9PiB7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZHJhZ0hvcml6b250YWxcIik7XG4gIH0pO1xufSk7XG5cbi8vIERSQUcgJiBEUk9QXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyQ2VsbFwiKTtcbi8vIGNvbnNvbGUubG9nKGNlbGxzKTtcblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAvLyBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NMaXN0WzBdKTtcbiAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBbXG4gICAgZS50YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0WzFdLFxuICAgIGUudGFyZ2V0LmlkLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ092ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlcihlKSB7XG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnRW50ZXJcIik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZShlKSB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnRW50ZXJcIik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyb3AoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJhZ0RpdlwiKSk7XG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcblxuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ0VudGVyXCIpO1xuXG4gIGxldCBzaGlwTG9jYXRpb24gPSBbXG4gICAgW3BhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVsyXSksIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVs0XSldLFxuICBdO1xuXG4gIGxldCBjZWxsQ291bnQgPSBwYXJzZUludChlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKVswXSk7XG4gIGxldCBjZWxsQ2xhc3MgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKS5zbGljZSgyLCAxNik7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjZWxsQ291bnQ7IGkrKykge1xuICAgIGlmIChjZWxsQ2xhc3MgPT0gXCJkcmFnSG9yaXpvbnRhbFwiKSB7XG4gICAgICBzaGlwTG9jYXRpb24ucHVzaChbXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVsyXSksXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVs0XSkgKyBpLFxuICAgICAgXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBMb2NhdGlvbi5wdXNoKFtcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzBdWzJdKSArIGksXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXVs0XSksXG4gICAgICBdKTtcbiAgICB9XG4gIH1cblxuICBsZXQgY2hlY2tTaGlwQWxyZWFkeVRoZXJlID0gc2hpcExvY2F0aW9uLnNvbWUoKGxvY2F0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQuc2hpcExvY2F0aW9uTGlzdHMuaW5jbHVkZXMoXG4gICAgICBKU09OLnN0cmluZ2lmeShsb2NhdGlvbilcbiAgICApO1xuICB9KTtcblxuICBpZiAoIWNoZWNrU2hpcEFscmVhZHlUaGVyZSkge1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBMb2NhdGlvbik7XG4gICAgcG9wdWxhdGVQbGF5ZXJCb2FyZCgpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIikuc2xpY2UoLTUpKTtcbiAgICBsZXQgc2hpcE5hbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKS5zbGljZSgtNSk7XG4gICAgbGV0IGRyb3BTaGlwRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wU2hpcERpdlwiKTtcbiAgICBkcm9wU2hpcERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwTmFtZSkpO1xuICB9XG5cbiAgLy8gQWRkIGFpIGJvYXJkIGFuZCBydW4gZ2FtZSBhZnRlciBhbGwgcGxheWVyIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQuXG4gIGlmIChkcm9wU2hpcERpdi5jaGlsZEVsZW1lbnRDb3VudCA9PSAwKSB7XG4gICAgZ2FtZUJvYXJkRGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJhZ1NoaXBDb250YWluZXJcIikpO1xuICAgIGdhbWVCb2FyZERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZUdhbWVCb2FyZFVpKFwiYWlcIikpO1xuICAgIC8vIHBvcHVsYXRlQWlCb2FyZCgpO1xuICAgIGdhbWVsb29wKCk7XG4gIH1cbn1cblxubGV0IGRyYWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdEaXZcIik7XG5kcmFnRGl2LmZvckVhY2goKGRpdikgPT4ge1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBoYW5kbGVEcmFnU3RhcnQpO1xufSk7XG5cbmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgaGFuZGxlRHJhZ092ZXIpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgaGFuZGxlRHJhZ0VudGVyKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGhhbmRsZURyYWdMZWF2ZSk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgaGFuZGxlRHJvcCk7XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5wb3B1bGF0ZVBsYXllckJvYXJkKCk7XG4vLyBwb3B1bGF0ZUFpQm9hcmQoKTtcbi8vIGdhbWVsb29wKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=