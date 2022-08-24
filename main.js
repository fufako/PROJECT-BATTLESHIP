/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".grid {\n  display: grid;\n  width: 500px;\n  height: 500px;\n  border-color: #fffff0;\n  background-color: #fffaf0;\n  border-style: inset;\n}\n\nh1 {\n  color: blanchedalmond;\n}\n.grid-container {\n  display: flex;\n  gap: 50px;\n  align-items: center;\n}\nbody {\n  background-color: grey;\n}\n.grid-item {\n  border: 1px solid black;\n}\n#popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n\n  color: #e4dccf;\n  z-index: 100;\n  background-color: whitesmoke;\n}\n.grid-popup {\n  display: grid;\n  visibility: visible;\n  width: 500px;\n  height: 500px;\n}\n.grid-item-popup {\n  border: 1px solid black;\n  background-color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,SAAS;EACT,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;;EAEvB,cAAc;EACd,YAAY;EACZ,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,uBAAuB;AACzB","sourcesContent":[".grid {\n  display: grid;\n  width: 500px;\n  height: 500px;\n  border-color: #fffff0;\n  background-color: #fffaf0;\n  border-style: inset;\n}\n\nh1 {\n  color: blanchedalmond;\n}\n.grid-container {\n  display: flex;\n  gap: 50px;\n  align-items: center;\n}\nbody {\n  background-color: grey;\n}\n.grid-item {\n  border: 1px solid black;\n}\n#popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n\n  color: #e4dccf;\n  z-index: 100;\n  background-color: whitesmoke;\n}\n.grid-popup {\n  display: grid;\n  visibility: visible;\n  width: 500px;\n  height: 500px;\n}\n.grid-item-popup {\n  border: 1px solid black;\n  background-color: white;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");



class GameBoard {
  constructor(owner) {
    this.gameBoardArray = this.createBoardArray()
    this.missedAttacks = []
    this.landedAttacks = []
    this.owner = owner
    this.ships = []
  }

  createBoardArray = () => {
    let array = []
    let arrayItem = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arrayItem[j] = new Array({
          x: i,
          y: j,
          shipName: undefined,
          shipPosition: undefined,
        })
      }
      array.push(arrayItem)
      arrayItem = []
    }
    return array
  }
  receiveAttack = (x, y) => {
    const attackedField = this.gameBoardArray[x][y][0]
    const attackedShip = this.ships.find(
      (item) => item.name == attackedField.shipName
    )

    const isThereShip = attackedField.shipName === undefined ? false : true

    if (this.checkIfLanded(x, y)) return

    if (!isThereShip) {
      this.missedAttacks.push({ x: x, y: y })
      ;(0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.markGridMissedAttack)(x, y, this.owner)

      return
    }
    if (attackedShip.isSunk()) return
    this.landedAttacks.push({ x: x, y: y })
    attackedShip.hit(attackedField.shipPosition)
    console.log(this.landedAttacks)

    ;(0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.hitGridItem)(x, y, this.owner)
  }
  checkShipPlacement = (length, x, y) => {
    if (x > 10 || x < 0 || y > 10 || y < 0 || y + length >= 10) return false

    for (let i = 0; i < x + length; i++) {
      if (this.gameBoardArray[x][y][0].shipName !== undefined) return false
    }
    return true
  }
  placeShip = (ship, x, y) => {
    for (let i = 0; i < ship.getLength(); i++) {
      this.gameBoardArray[x][y + i][0].shipName = ship.nameHandler()
      this.gameBoardArray[x][y + i][0].shipPosition = i
      ;(0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.markGridItem)(x, y + i, this.owner)
    }
    this.ships.push(ship)
    return this.ships
  }
  getMissedAttacks = () => {
    return this.missedAttacks
  }
  getGameBoard = () => {
    return this.gameBoardArray
  }
  getShips = () => {
    return this.ships
  }

  checkIfLanded = (x, y) => {
    if (this.landedAttacks.some((attack) => attack.x === x && attack.y === y))
      return true
    return false
  }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


class Player {
  constructor(name) {
    this.name = name
    this.gameBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard(name)
    this.grid = (0,_UI__WEBPACK_IMPORTED_MODULE_1__.createGrid)(name)
  }
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length
    this.hits = []
    this.name = this.nameHandler()
  }
  hit(position) {
    if (this.hits.includes(position) || position < 0 || position >= this.length)
      return

    this.hits.push(position)
    console.log(this.hits)
  }
  isSunk() {
    return this.hits.length === this.length
  }
  nameHandler() {
    if (this.length === 6) return "Carrier"
    if (this.length === 5) return "Battleship"
    if (this.length === 4) return "Destroyer"
    if (this.length === 3) return "Submarine"
    if (this.length === 2) return "Patrol Boat"
  }
  getLength() {
    return this.length
  }
}


/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkGridShipPlacement": () => (/* binding */ checkGridShipPlacement),
/* harmony export */   "closePopup": () => (/* binding */ closePopup),
/* harmony export */   "createGrid": () => (/* binding */ createGrid),
/* harmony export */   "createPopup": () => (/* binding */ createPopup),
/* harmony export */   "getUserSelectedLocations": () => (/* binding */ getUserSelectedLocations),
/* harmony export */   "gridPlaceShip": () => (/* binding */ gridPlaceShip),
/* harmony export */   "hitGridItem": () => (/* binding */ hitGridItem),
/* harmony export */   "hoverShipPlacement": () => (/* binding */ hoverShipPlacement),
/* harmony export */   "markGridItem": () => (/* binding */ markGridItem),
/* harmony export */   "markGridMissedAttack": () => (/* binding */ markGridMissedAttack)
/* harmony export */ });
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ "./src/startGame.js");

const SIZE = 10

function createGrid(name) {
  const girdContainer = document.querySelector(".grid-container")
  const grid = document.createElement("div")
  girdContainer.appendChild(grid)
  grid.className = "grid"
  grid.id = name

  grid.style.gridTemplateColumns = "repeat(" + SIZE + ", 1fr)"
  grid.style.gridTemplateRows = "repeat(" + SIZE + ", 1fr)"

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div")
      gridItem.classList.add(`grid-item-${name}`)
      gridItem.id = name
      gridItem.dataset.x = i
      gridItem.dataset.y = j
      grid.appendChild(gridItem)
    }
  }
}

function markGridItem(x, y, name) {
  const gridItems = document.querySelectorAll(`.grid-item-${name}`)
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "pink"
    }
  })
}
function hitGridItem(x, y, name) {
  const gridItems = document.querySelectorAll(`.grid-item-${name}`)
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "yellow"
    }
  })
}

function markGridMissedAttack(x, y, name) {
  const gridItems = document.querySelectorAll(`#${name}`)
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "red"
    }
  })
}

let n = 6

function hoverShipPlacement(e) {
  const shipLocation = []
  const startingX = parseInt(e.target.getAttribute("data-x"))
  const startingY = parseInt(e.target.getAttribute("data-y"))
  for (let i = 0; i < n; i++) {
    shipLocation.push(startingY + i)
  }
  const gridItems = document.querySelectorAll(".grid-item-popup")
  gridItems.forEach((item) => {
    if (item.dataset.x == startingX) {
      for (let i = 0; i < n; i++) {
        if (
          item.dataset.y == shipLocation[i] &&
          item.dataset.marked !== "true"
        ) {
          item.style.backgroundColor = e.type === "mouseover" ? "blue" : "white"
        }
      }
    }
  })
}

//Save locations that user have picked
const userLocations = []
function gridPlaceShip(event) {
  const shipLocation = []
  const startingX = parseInt(event.target.getAttribute("data-x"))
  const startingY = parseInt(event.target.getAttribute("data-y"))

  if (!checkGridShipPlacement(startingX, startingY, n)) return
  for (let i = 0; i < n; i++) {
    shipLocation.push(startingY + i)
  }
  const gridItems = document.querySelectorAll(".grid-item-popup")
  gridItems.forEach((item) => {
    if (item.dataset.x == startingX) {
      for (let i = 0; i < n; i++) {
        if (item.dataset.y == shipLocation[i]) {
          item.style.backgroundColor = "grey"
          item.dataset.marked = "true"
        }
      }
    }
  })

  userLocations.push({ startingX, startingY, n })
  if (n === 2) closePopup()
  n--
  return
}

function createPopup() {
  const popup = document.querySelector("#popup")
  const grid = document.createElement("div")
  popup.appendChild(grid)
  grid.className = "grid-popup"

  grid.style.gridTemplateColumns = "repeat(" + SIZE + ", 1fr)"
  grid.style.gridTemplateRows = "repeat(" + SIZE + ", 1fr)"

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div")
      gridItem.classList.add("grid-item-popup")
      gridItem.dataset.x = i
      gridItem.dataset.y = j
      grid.appendChild(gridItem)
    }
  }
}

function closePopup() {
  const popup = document.querySelector("#popup")
  const gridPopup = document.querySelector(".grid-popup")
  popup.style.visibility = "hidden"
  gridPopup.style.visibility = "hidden"
  ;(0,_startGame__WEBPACK_IMPORTED_MODULE_0__.gameStart)()
}

function checkGridShipPlacement(x, y, n) {
  if (x > 10 || x < 0 || y > 10 || y < 0 || y + n > 10) return false

  const gridItems = document.querySelectorAll(
    `.grid-item-popup[data-x="${x - 1}"],
    .grid-item-popup[data-x="${x + 1}"],
    .grid-item-popup[data-x="${x}"][data-y="${y - 1}"],
    .grid-item-popup[data-x="${x}"][data-y="${y + n}"
     `
  )
  const indexes = []

  for (let i = y - 1; i <= y + n; i++) {
    indexes.push(i)
  }
  let check = true
  gridItems.forEach((item) => {
    if (
      indexes.includes(parseInt(item.dataset.y)) &&
      item.dataset.marked == "true"
    ) {
      check = false
    }
  })
  if (!check) return false
  return true
}
function getUserSelectedLocations() {
  return userLocations
}


/***/ }),

/***/ "./src/startGame.js":
/*!**************************!*\
  !*** ./src/startGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameStart": () => (/* binding */ gameStart),
/* harmony export */   "popupGridEventListener": () => (/* binding */ popupGridEventListener)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");




function popupGridEventListener(i) {
  const gridItems = document.querySelectorAll(".grid-item-popup")
  gridItems.forEach((item) => {
    item.addEventListener("click", (event) => (0,_UI__WEBPACK_IMPORTED_MODULE_0__.gridPlaceShip)(event))
    item.addEventListener("mouseover", _UI__WEBPACK_IMPORTED_MODULE_0__.hoverShipPlacement)
    item.addEventListener("mouseout", _UI__WEBPACK_IMPORTED_MODULE_0__.hoverShipPlacement)
  })
}

let pcShipLocations = []
function gameStart() {
  const player = new _Player__WEBPACK_IMPORTED_MODULE_1__.Player("player")
  const playerShipLocations = (0,_UI__WEBPACK_IMPORTED_MODULE_0__.getUserSelectedLocations)()

  playerShipLocations.forEach((location) => {
    player.gameBoard.placeShip(
      new _Ship__WEBPACK_IMPORTED_MODULE_3__.Ship(location.n),
      location.startingX,
      location.startingY
    )
  })

  console.log(player.gameBoard)

  const PC = new _Player__WEBPACK_IMPORTED_MODULE_1__.Player("PC")

  let i = 6
  while (pcShipLocations.length < 5) {
    let x = getRandomCoords()
    let y = getRandomCoords()
    if (checkPcShips(x, y, i)) {
      placePcShips(x, y, i)
      i--
    }
  }

  console.log(pcShipLocations)
  pcShipLocations.forEach((location) => {
    PC.gameBoard.placeShip(
      new _Ship__WEBPACK_IMPORTED_MODULE_3__.Ship(location.n),
      location.startingX,
      location.startingY
    )
  })

  console.log(PC.gameBoard)
  const battlefieldGridItems = document.querySelectorAll("#PC")
  battlefieldGridItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log("dsd")
      PC.gameBoard.receiveAttack(e.target.dataset.x, e.target.dataset.y)
      player.gameBoard.receiveAttack(getRandomCoords(), 2)
    })
  })
}

function getRandomCoords() {
  return Math.floor(Math.random() * 10)
}
function placePcShips(x, y, i) {
  const shipLocation = []
  const startingX = x
  const startingY = y
  const n = i
  if (!checkPcShips(startingX, startingY, n)) return

  for (let i = 0; i < n; i++) {
    shipLocation.push(startingY + i)
  }
  const gridItems = document.querySelectorAll(".grid-item-PC")
  gridItems.forEach((item) => {
    if (item.dataset.x == startingX) {
      for (let i = 0; i < n; i++) {
        if (item.dataset.y == shipLocation[i]) {
          item.dataset.marked = "true"
        }
      }
    }
  })
  pcShipLocations.push({ startingX: x, startingY: y, n: n })
}

function checkPcShips(x, y, n) {
  if (x > 10 || x < 0 || y > 10 || y < 0 || y + n > 10) return false

  const gridItems = document.querySelectorAll(
    `.grid-item-PC[data-x="${x - 1}"],
      .grid-item-PC[data-x="${x + 1}"],
      .grid-item-PC[data-x="${x}"][data-y="${y - 1}"],
      .grid-item-PC[data-x="${x}"][data-y="${y + n}"
       `
  )
  const indexes = []

  for (let i = y - 1; i <= y + n; i++) {
    indexes.push(i)
  }
  let check = true
  gridItems.forEach((item) => {
    if (
      indexes.includes(parseInt(item.dataset.y)) &&
      item.dataset.marked == "true"
    ) {
      check = false
    }
  })
  if (!check) return false
  return true
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
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startGame */ "./src/startGame.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_UI__WEBPACK_IMPORTED_MODULE_4__.createPopup)()
;(0,_startGame__WEBPACK_IMPORTED_MODULE_3__.popupGridEventListener)()
console.log((0,_UI__WEBPACK_IMPORTED_MODULE_4__.getUserSelectedLocations)())

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDUztBQUNwRDtBQUNwQixnREFBVztBQUNYLG1FQUFzQjtBQUN0QixZQUFZLDZEQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXItY29sb3I6ICNmZmZmZjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWYwO1xcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLmdyaWQtaXRlbSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI3BvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiAjZTRkY2NmO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLmdyaWQtcG9wdXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG4uZ3JpZC1pdGVtLXBvcHVwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsdUJBQXVCOztFQUV2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmYwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFmMDtcXG4gIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcbi5ncmlkLWl0ZW0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNwb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBjb2xvcjogI2U0ZGNjZjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcbi5ncmlkLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuLmdyaWQtaXRlbS1wb3B1cCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCJcbmltcG9ydCB7XG4gIGhpdEdyaWRJdGVtLFxuICBtYXJrR3JpZEl0ZW0sXG4gIG1hcmtHcmlkTWlzc2VkQXR0YWNrLFxuICBncmlkUGxhY2VTaGlwLFxufSBmcm9tIFwiLi9VSS5qc1wiXG5cbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXkgPSB0aGlzLmNyZWF0ZUJvYXJkQXJyYXkoKVxuICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdXG4gICAgdGhpcy5sYW5kZWRBdHRhY2tzID0gW11cbiAgICB0aGlzLm93bmVyID0gb3duZXJcbiAgICB0aGlzLnNoaXBzID0gW11cbiAgfVxuXG4gIGNyZWF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XG4gICAgbGV0IGFycmF5ID0gW11cbiAgICBsZXQgYXJyYXlJdGVtID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBhcnJheUl0ZW1bal0gPSBuZXcgQXJyYXkoe1xuICAgICAgICAgIHg6IGksXG4gICAgICAgICAgeTogaixcbiAgICAgICAgICBzaGlwTmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgIHNoaXBQb3NpdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYXJyYXkucHVzaChhcnJheUl0ZW0pXG4gICAgICBhcnJheUl0ZW0gPSBbXVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlcbiAgfVxuICByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBhdHRhY2tlZEZpZWxkID0gdGhpcy5nYW1lQm9hcmRBcnJheVt4XVt5XVswXVxuICAgIGNvbnN0IGF0dGFja2VkU2hpcCA9IHRoaXMuc2hpcHMuZmluZChcbiAgICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT0gYXR0YWNrZWRGaWVsZC5zaGlwTmFtZVxuICAgIClcblxuICAgIGNvbnN0IGlzVGhlcmVTaGlwID0gYXR0YWNrZWRGaWVsZC5zaGlwTmFtZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiB0cnVlXG5cbiAgICBpZiAodGhpcy5jaGVja0lmTGFuZGVkKHgsIHkpKSByZXR1cm5cblxuICAgIGlmICghaXNUaGVyZVNoaXApIHtcbiAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKHsgeDogeCwgeTogeSB9KVxuICAgICAgbWFya0dyaWRNaXNzZWRBdHRhY2soeCwgeSwgdGhpcy5vd25lcilcblxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChhdHRhY2tlZFNoaXAuaXNTdW5rKCkpIHJldHVyblxuICAgIHRoaXMubGFuZGVkQXR0YWNrcy5wdXNoKHsgeDogeCwgeTogeSB9KVxuICAgIGF0dGFja2VkU2hpcC5oaXQoYXR0YWNrZWRGaWVsZC5zaGlwUG9zaXRpb24pXG4gICAgY29uc29sZS5sb2codGhpcy5sYW5kZWRBdHRhY2tzKVxuXG4gICAgaGl0R3JpZEl0ZW0oeCwgeSwgdGhpcy5vd25lcilcbiAgfVxuICBjaGVja1NoaXBQbGFjZW1lbnQgPSAobGVuZ3RoLCB4LCB5KSA9PiB7XG4gICAgaWYgKHggPiAxMCB8fCB4IDwgMCB8fCB5ID4gMTAgfHwgeSA8IDAgfHwgeSArIGxlbmd0aCA+PSAxMCkgcmV0dXJuIGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ2FtZUJvYXJkQXJyYXlbeF1beV1bMF0uc2hpcE5hbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHkpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgdGhpcy5nYW1lQm9hcmRBcnJheVt4XVt5ICsgaV1bMF0uc2hpcE5hbWUgPSBzaGlwLm5hbWVIYW5kbGVyKClcbiAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeF1beSArIGldWzBdLnNoaXBQb3NpdGlvbiA9IGlcbiAgICAgIG1hcmtHcmlkSXRlbSh4LCB5ICsgaSwgdGhpcy5vd25lcilcbiAgICB9XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApXG4gICAgcmV0dXJuIHRoaXMuc2hpcHNcbiAgfVxuICBnZXRNaXNzZWRBdHRhY2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm1pc3NlZEF0dGFja3NcbiAgfVxuICBnZXRHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkQXJyYXlcbiAgfVxuICBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zaGlwc1xuICB9XG5cbiAgY2hlY2tJZkxhbmRlZCA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKHRoaXMubGFuZGVkQXR0YWNrcy5zb21lKChhdHRhY2spID0+IGF0dGFjay54ID09PSB4ICYmIGF0dGFjay55ID09PSB5KSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiXG5pbXBvcnQgeyBjcmVhdGVHcmlkIH0gZnJvbSBcIi4vVUlcIlxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKG5hbWUpXG4gICAgdGhpcy5ncmlkID0gY3JlYXRlR3JpZChuYW1lKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgdGhpcy5oaXRzID0gW11cbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWVIYW5kbGVyKClcbiAgfVxuICBoaXQocG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5oaXRzLmluY2x1ZGVzKHBvc2l0aW9uKSB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpXG4gICAgICByZXR1cm5cblxuICAgIHRoaXMuaGl0cy5wdXNoKHBvc2l0aW9uKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuaGl0cylcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoXG4gIH1cbiAgbmFtZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSA2KSByZXR1cm4gXCJDYXJyaWVyXCJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDUpIHJldHVybiBcIkJhdHRsZXNoaXBcIlxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gNCkgcmV0dXJuIFwiRGVzdHJveWVyXCJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDMpIHJldHVybiBcIlN1Ym1hcmluZVwiXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAyKSByZXR1cm4gXCJQYXRyb2wgQm9hdFwiXG4gIH1cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aFxuICB9XG59XG4iLCJpbXBvcnQgeyBnYW1lU3RhcnQgfSBmcm9tIFwiLi9zdGFydEdhbWVcIlxuY29uc3QgU0laRSA9IDEwXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHcmlkKG5hbWUpIHtcbiAgY29uc3QgZ2lyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jb250YWluZXJcIilcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgZ2lyZENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKVxuICBncmlkLmNsYXNzTmFtZSA9IFwiZ3JpZFwiXG4gIGdyaWQuaWQgPSBuYW1lXG5cbiAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoXCIgKyBTSVpFICsgXCIsIDFmcilcIlxuICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcInJlcGVhdChcIiArIFNJWkUgKyBcIiwgMWZyKVwiXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoYGdyaWQtaXRlbS0ke25hbWV9YClcbiAgICAgIGdyaWRJdGVtLmlkID0gbmFtZVxuICAgICAgZ3JpZEl0ZW0uZGF0YXNldC54ID0gaVxuICAgICAgZ3JpZEl0ZW0uZGF0YXNldC55ID0galxuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtHcmlkSXRlbSh4LCB5LCBuYW1lKSB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ncmlkLWl0ZW0tJHtuYW1lfWApXG4gIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGF0YXNldC54ID09IHggJiYgaXRlbS5kYXRhc2V0LnkgPT0geSkge1xuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInBpbmtcIlxuICAgIH1cbiAgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaXRHcmlkSXRlbSh4LCB5LCBuYW1lKSB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ncmlkLWl0ZW0tJHtuYW1lfWApXG4gIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGF0YXNldC54ID09IHggJiYgaXRlbS5kYXRhc2V0LnkgPT0geSkge1xuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0dyaWRNaXNzZWRBdHRhY2soeCwgeSwgbmFtZSkge1xuICBjb25zdCBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtuYW1lfWApXG4gIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGF0YXNldC54ID09IHggJiYgaXRlbS5kYXRhc2V0LnkgPT0geSkge1xuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXG4gICAgfVxuICB9KVxufVxuXG5sZXQgbiA9IDZcblxuZXhwb3J0IGZ1bmN0aW9uIGhvdmVyU2hpcFBsYWNlbWVudChlKSB7XG4gIGNvbnN0IHNoaXBMb2NhdGlvbiA9IFtdXG4gIGNvbnN0IHN0YXJ0aW5nWCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKSlcbiAgY29uc3Qgc3RhcnRpbmdZID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIHNoaXBMb2NhdGlvbi5wdXNoKHN0YXJ0aW5nWSArIGkpXG4gIH1cbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLWl0ZW0tcG9wdXBcIilcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5kYXRhc2V0LnggPT0gc3RhcnRpbmdYKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXRlbS5kYXRhc2V0LnkgPT0gc2hpcExvY2F0aW9uW2ldICYmXG4gICAgICAgICAgaXRlbS5kYXRhc2V0Lm1hcmtlZCAhPT0gXCJ0cnVlXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlLnR5cGUgPT09IFwibW91c2VvdmVyXCIgPyBcImJsdWVcIiA6IFwid2hpdGVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG4vL1NhdmUgbG9jYXRpb25zIHRoYXQgdXNlciBoYXZlIHBpY2tlZFxuY29uc3QgdXNlckxvY2F0aW9ucyA9IFtdXG5leHBvcnQgZnVuY3Rpb24gZ3JpZFBsYWNlU2hpcChldmVudCkge1xuICBjb25zdCBzaGlwTG9jYXRpb24gPSBbXVxuICBjb25zdCBzdGFydGluZ1ggPSBwYXJzZUludChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKVxuICBjb25zdCBzdGFydGluZ1kgPSBwYXJzZUludChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKVxuXG4gIGlmICghY2hlY2tHcmlkU2hpcFBsYWNlbWVudChzdGFydGluZ1gsIHN0YXJ0aW5nWSwgbikpIHJldHVyblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIHNoaXBMb2NhdGlvbi5wdXNoKHN0YXJ0aW5nWSArIGkpXG4gIH1cbiAgY29uc3QgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLWl0ZW0tcG9wdXBcIilcbiAgZ3JpZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5kYXRhc2V0LnggPT0gc3RhcnRpbmdYKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBpZiAoaXRlbS5kYXRhc2V0LnkgPT0gc2hpcExvY2F0aW9uW2ldKSB7XG4gICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIlxuICAgICAgICAgIGl0ZW0uZGF0YXNldC5tYXJrZWQgPSBcInRydWVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHVzZXJMb2NhdGlvbnMucHVzaCh7IHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBuIH0pXG4gIGlmIChuID09PSAyKSBjbG9zZVBvcHVwKClcbiAgbi0tXG4gIHJldHVyblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9wdXAoKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cFwiKVxuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBwb3B1cC5hcHBlbmRDaGlsZChncmlkKVxuICBncmlkLmNsYXNzTmFtZSA9IFwiZ3JpZC1wb3B1cFwiXG5cbiAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoXCIgKyBTSVpFICsgXCIsIDFmcilcIlxuICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcInJlcGVhdChcIiArIFNJWkUgKyBcIiwgMWZyKVwiXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJncmlkLWl0ZW0tcG9wdXBcIilcbiAgICAgIGdyaWRJdGVtLmRhdGFzZXQueCA9IGlcbiAgICAgIGdyaWRJdGVtLmRhdGFzZXQueSA9IGpcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBcIilcbiAgY29uc3QgZ3JpZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLXBvcHVwXCIpXG4gIHBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gIGdyaWRQb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICBnYW1lU3RhcnQoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tHcmlkU2hpcFBsYWNlbWVudCh4LCB5LCBuKSB7XG4gIGlmICh4ID4gMTAgfHwgeCA8IDAgfHwgeSA+IDEwIHx8IHkgPCAwIHx8IHkgKyBuID4gMTApIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgYC5ncmlkLWl0ZW0tcG9wdXBbZGF0YS14PVwiJHt4IC0gMX1cIl0sXG4gICAgLmdyaWQtaXRlbS1wb3B1cFtkYXRhLXg9XCIke3ggKyAxfVwiXSxcbiAgICAuZ3JpZC1pdGVtLXBvcHVwW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5IC0gMX1cIl0sXG4gICAgLmdyaWQtaXRlbS1wb3B1cFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIG59XCJcbiAgICAgYFxuICApXG4gIGNvbnN0IGluZGV4ZXMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSB5IC0gMTsgaSA8PSB5ICsgbjsgaSsrKSB7XG4gICAgaW5kZXhlcy5wdXNoKGkpXG4gIH1cbiAgbGV0IGNoZWNrID0gdHJ1ZVxuICBncmlkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGluZGV4ZXMuaW5jbHVkZXMocGFyc2VJbnQoaXRlbS5kYXRhc2V0LnkpKSAmJlxuICAgICAgaXRlbS5kYXRhc2V0Lm1hcmtlZCA9PSBcInRydWVcIlxuICAgICkge1xuICAgICAgY2hlY2sgPSBmYWxzZVxuICAgIH1cbiAgfSlcbiAgaWYgKCFjaGVjaykgcmV0dXJuIGZhbHNlXG4gIHJldHVybiB0cnVlXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlbGVjdGVkTG9jYXRpb25zKCkge1xuICByZXR1cm4gdXNlckxvY2F0aW9uc1xufVxuIiwiaW1wb3J0IHtcbiAgaG92ZXJTaGlwUGxhY2VtZW50LFxuICBncmlkUGxhY2VTaGlwLFxuICBnZXRVc2VyU2VsZWN0ZWRMb2NhdGlvbnMsXG4gIGNsb3NlUG9wdXAsXG4gIGNoZWNrR3JpZFNoaXBQbGFjZW1lbnQsXG4gIG1hcmtHcmlkSXRlbSxcbn0gZnJvbSBcIi4vVUlcIlxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiXG5leHBvcnQgZnVuY3Rpb24gcG9wdXBHcmlkRXZlbnRMaXN0ZW5lcihpKSB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1pdGVtLXBvcHVwXCIpXG4gIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBncmlkUGxhY2VTaGlwKGV2ZW50KSlcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXJTaGlwUGxhY2VtZW50KVxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGhvdmVyU2hpcFBsYWNlbWVudClcbiAgfSlcbn1cblxubGV0IHBjU2hpcExvY2F0aW9ucyA9IFtdXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVN0YXJ0KCkge1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKFwicGxheWVyXCIpXG4gIGNvbnN0IHBsYXllclNoaXBMb2NhdGlvbnMgPSBnZXRVc2VyU2VsZWN0ZWRMb2NhdGlvbnMoKVxuXG4gIHBsYXllclNoaXBMb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICBwbGF5ZXIuZ2FtZUJvYXJkLnBsYWNlU2hpcChcbiAgICAgIG5ldyBTaGlwKGxvY2F0aW9uLm4pLFxuICAgICAgbG9jYXRpb24uc3RhcnRpbmdYLFxuICAgICAgbG9jYXRpb24uc3RhcnRpbmdZXG4gICAgKVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKHBsYXllci5nYW1lQm9hcmQpXG5cbiAgY29uc3QgUEMgPSBuZXcgUGxheWVyKFwiUENcIilcblxuICBsZXQgaSA9IDZcbiAgd2hpbGUgKHBjU2hpcExvY2F0aW9ucy5sZW5ndGggPCA1KSB7XG4gICAgbGV0IHggPSBnZXRSYW5kb21Db29yZHMoKVxuICAgIGxldCB5ID0gZ2V0UmFuZG9tQ29vcmRzKClcbiAgICBpZiAoY2hlY2tQY1NoaXBzKHgsIHksIGkpKSB7XG4gICAgICBwbGFjZVBjU2hpcHMoeCwgeSwgaSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKHBjU2hpcExvY2F0aW9ucylcbiAgcGNTaGlwTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgUEMuZ2FtZUJvYXJkLnBsYWNlU2hpcChcbiAgICAgIG5ldyBTaGlwKGxvY2F0aW9uLm4pLFxuICAgICAgbG9jYXRpb24uc3RhcnRpbmdYLFxuICAgICAgbG9jYXRpb24uc3RhcnRpbmdZXG4gICAgKVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKFBDLmdhbWVCb2FyZClcbiAgY29uc3QgYmF0dGxlZmllbGRHcmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1BDXCIpXG4gIGJhdHRsZWZpZWxkR3JpZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJkc2RcIilcbiAgICAgIFBDLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGUudGFyZ2V0LmRhdGFzZXQueCwgZS50YXJnZXQuZGF0YXNldC55KVxuICAgICAgcGxheWVyLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGdldFJhbmRvbUNvb3JkcygpLCAyKVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkcygpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxufVxuZnVuY3Rpb24gcGxhY2VQY1NoaXBzKHgsIHksIGkpIHtcbiAgY29uc3Qgc2hpcExvY2F0aW9uID0gW11cbiAgY29uc3Qgc3RhcnRpbmdYID0geFxuICBjb25zdCBzdGFydGluZ1kgPSB5XG4gIGNvbnN0IG4gPSBpXG4gIGlmICghY2hlY2tQY1NoaXBzKHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBuKSkgcmV0dXJuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBzaGlwTG9jYXRpb24ucHVzaChzdGFydGluZ1kgKyBpKVxuICB9XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1pdGVtLVBDXCIpXG4gIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGF0YXNldC54ID09IHN0YXJ0aW5nWCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC55ID09IHNoaXBMb2NhdGlvbltpXSkge1xuICAgICAgICAgIGl0ZW0uZGF0YXNldC5tYXJrZWQgPSBcInRydWVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuICBwY1NoaXBMb2NhdGlvbnMucHVzaCh7IHN0YXJ0aW5nWDogeCwgc3RhcnRpbmdZOiB5LCBuOiBuIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrUGNTaGlwcyh4LCB5LCBuKSB7XG4gIGlmICh4ID4gMTAgfHwgeCA8IDAgfHwgeSA+IDEwIHx8IHkgPCAwIHx8IHkgKyBuID4gMTApIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgYC5ncmlkLWl0ZW0tUENbZGF0YS14PVwiJHt4IC0gMX1cIl0sXG4gICAgICAuZ3JpZC1pdGVtLVBDW2RhdGEteD1cIiR7eCArIDF9XCJdLFxuICAgICAgLmdyaWQtaXRlbS1QQ1tkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSAtIDF9XCJdLFxuICAgICAgLmdyaWQtaXRlbS1QQ1tkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIG59XCJcbiAgICAgICBgXG4gIClcbiAgY29uc3QgaW5kZXhlcyA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IHkgLSAxOyBpIDw9IHkgKyBuOyBpKyspIHtcbiAgICBpbmRleGVzLnB1c2goaSlcbiAgfVxuICBsZXQgY2hlY2sgPSB0cnVlXG4gIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKFxuICAgICAgaW5kZXhlcy5pbmNsdWRlcyhwYXJzZUludChpdGVtLmRhdGFzZXQueSkpICYmXG4gICAgICBpdGVtLmRhdGFzZXQubWFya2VkID09IFwidHJ1ZVwiXG4gICAgKSB7XG4gICAgICBjaGVjayA9IGZhbHNlXG4gICAgfVxuICB9KVxuICBpZiAoIWNoZWNrKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIlxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIlxuaW1wb3J0IHsgZ2FtZVN0YXJ0LCBwb3B1cEdyaWRFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vc3RhcnRHYW1lXCJcbmltcG9ydCB7IGNyZWF0ZVBvcHVwLCBnZXRVc2VyU2VsZWN0ZWRMb2NhdGlvbnMsIGNsb3NlUG9wdXAgfSBmcm9tIFwiLi9VSVwiXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5jcmVhdGVQb3B1cCgpXG5wb3B1cEdyaWRFdmVudExpc3RlbmVyKClcbmNvbnNvbGUubG9nKGdldFVzZXJTZWxlY3RlZExvY2F0aW9ucygpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9