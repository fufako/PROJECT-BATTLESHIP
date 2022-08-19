/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

class GameBoard {
  constructor(owner) {
    this.gameBoardArray = this.createBoardArray()
    this.missedAttack = []
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
    const isThereShip = attackedField.shipName === undefined ? false : true
    if (!isThereShip) {
      this.missedAttack.push({ x: x, y: y })
      return
    }
    this.ships.shipName.hit(this.gameBoardArray[x][y][0].shipPosition)
  }
  checkShipPlacement = (length, x, y) => {
    if (x > 10 || x < 0 || y > 10 || y < 0 || x + length >= 10) return "1dd"
    for (let i = 0; i < x + length; i++) {
      if (this.gameBoardArray[x][y][0].shipName !== undefined) return "2dd"
    }
    return true
  }
  placeShip = (ship, x, y) => {
    if (!this.checkShipPlacement(ship.getLength(), x, y)) return
    for (let i = 0; i < ship.getLength(); i++) {
      this.gameBoardArray[x][y + i][0].shipName = ship.nameHandler()
      this.gameBoardArray[x][y + i][0].shipPosition = i
    }
    this.ships.push([ship.nameHandler()])
    return this.checkShipPlacement(ship.getLength(), x, y)
  }
  getMissedAttacks = () => {
    return this.missedAttack
  }
  getGameBoard = () => {
    return this.gameBoardArray
  }
  getShips = () => {
    return this.ships
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
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");



const playerGameBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard("Player")
const pcGameBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard("PC")

console.log(pcGameBoard.gameBoardArray)
console.log(pcGameBoard.placeShip(new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2), 0, 0))
console.log(pcGameBoard.placeShip(new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3), 2, 0))
console.log(pcGameBoard.placeShip(new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4), 4, 4))
console.log(pcGameBoard.placeShip(new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5), 0, 0))
console.log(pcGameBoard.placeShip(new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(6), 0, 3))

console.log(pcGameBoard.getGameBoard())
console.log(pcGameBoard.getShips())

const grid = document.querySelector(".grid")
grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)"
grid.style.gridTemplateRows = "repeat(" + size + ", 1fr)"

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDdEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ051QztBQUNWOztBQUU3Qiw0QkFBNEIsaURBQVM7QUFDckMsd0JBQXdCLGlEQUFTOztBQUVqQztBQUNBLHNDQUFzQyx1Q0FBSTtBQUMxQyxzQ0FBc0MsdUNBQUk7QUFDMUMsc0NBQXNDLHVDQUFJO0FBQzFDLHNDQUFzQyx1Q0FBSTtBQUMxQyxzQ0FBc0MsdUNBQUk7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIlxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRBcnJheSA9IHRoaXMuY3JlYXRlQm9hcmRBcnJheSgpXG4gICAgdGhpcy5taXNzZWRBdHRhY2sgPSBbXVxuICAgIHRoaXMub3duZXIgPSBvd25lclxuICAgIHRoaXMuc2hpcHMgPSBbXVxuICB9XG5cbiAgY3JlYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGxldCBhcnJheUl0ZW0gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGFycmF5SXRlbVtqXSA9IG5ldyBBcnJheSh7XG4gICAgICAgICAgeDogaSxcbiAgICAgICAgICB5OiBqLFxuICAgICAgICAgIHNoaXBOYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgc2hpcFBvc2l0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBhcnJheS5wdXNoKGFycmF5SXRlbSlcbiAgICAgIGFycmF5SXRlbSA9IFtdXG4gICAgfVxuICAgIHJldHVybiBhcnJheVxuICB9XG4gIHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IGF0dGFja2VkRmllbGQgPSB0aGlzLmdhbWVCb2FyZEFycmF5W3hdW3ldWzBdXG4gICAgY29uc3QgaXNUaGVyZVNoaXAgPSBhdHRhY2tlZEZpZWxkLnNoaXBOYW1lID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHRydWVcbiAgICBpZiAoIWlzVGhlcmVTaGlwKSB7XG4gICAgICB0aGlzLm1pc3NlZEF0dGFjay5wdXNoKHsgeDogeCwgeTogeSB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuc2hpcHMuc2hpcE5hbWUuaGl0KHRoaXMuZ2FtZUJvYXJkQXJyYXlbeF1beV1bMF0uc2hpcFBvc2l0aW9uKVxuICB9XG4gIGNoZWNrU2hpcFBsYWNlbWVudCA9IChsZW5ndGgsIHgsIHkpID0+IHtcbiAgICBpZiAoeCA+IDEwIHx8IHggPCAwIHx8IHkgPiAxMCB8fCB5IDwgMCB8fCB4ICsgbGVuZ3RoID49IDEwKSByZXR1cm4gXCIxZGRcIlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeCArIGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5nYW1lQm9hcmRBcnJheVt4XVt5XVswXS5zaGlwTmFtZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gXCIyZGRcIlxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5KSA9PiB7XG4gICAgaWYgKCF0aGlzLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwLmdldExlbmd0aCgpLCB4LCB5KSkgcmV0dXJuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeF1beSArIGldWzBdLnNoaXBOYW1lID0gc2hpcC5uYW1lSGFuZGxlcigpXG4gICAgICB0aGlzLmdhbWVCb2FyZEFycmF5W3hdW3kgKyBpXVswXS5zaGlwUG9zaXRpb24gPSBpXG4gICAgfVxuICAgIHRoaXMuc2hpcHMucHVzaChbc2hpcC5uYW1lSGFuZGxlcigpXSlcbiAgICByZXR1cm4gdGhpcy5jaGVja1NoaXBQbGFjZW1lbnQoc2hpcC5nZXRMZW5ndGgoKSwgeCwgeSlcbiAgfVxuICBnZXRNaXNzZWRBdHRhY2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm1pc3NlZEF0dGFja1xuICB9XG4gIGdldEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmRBcnJheVxuICB9XG4gIGdldFNoaXBzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNoaXBzXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGlzLmhpdHMgPSBbXVxuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZUhhbmRsZXIoKVxuICB9XG4gIGhpdChwb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmhpdHMuaW5jbHVkZXMocG9zaXRpb24pIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aClcbiAgICAgIHJldHVyblxuXG4gICAgdGhpcy5oaXRzLnB1c2gocG9zaXRpb24pXG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aFxuICB9XG4gIG5hbWVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gNikgcmV0dXJuIFwiQ2FycmllclwiXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSA1KSByZXR1cm4gXCJCYXR0bGVzaGlwXCJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDQpIHJldHVybiBcIkRlc3Ryb3llclwiXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAzKSByZXR1cm4gXCJTdWJtYXJpbmVcIlxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMikgcmV0dXJuIFwiUGF0cm9sIEJvYXRcIlxuICB9XG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGhcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIlxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIlxuXG5jb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKFwiUGxheWVyXCIpXG5jb25zdCBwY0dhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoXCJQQ1wiKVxuXG5jb25zb2xlLmxvZyhwY0dhbWVCb2FyZC5nYW1lQm9hcmRBcnJheSlcbmNvbnNvbGUubG9nKHBjR2FtZUJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCgyKSwgMCwgMCkpXG5jb25zb2xlLmxvZyhwY0dhbWVCb2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoMyksIDIsIDApKVxuY29uc29sZS5sb2cocGNHYW1lQm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDQpLCA0LCA0KSlcbmNvbnNvbGUubG9nKHBjR2FtZUJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCg1KSwgMCwgMCkpXG5jb25zb2xlLmxvZyhwY0dhbWVCb2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoNiksIDAsIDMpKVxuXG5jb25zb2xlLmxvZyhwY0dhbWVCb2FyZC5nZXRHYW1lQm9hcmQoKSlcbmNvbnNvbGUubG9nKHBjR2FtZUJvYXJkLmdldFNoaXBzKCkpXG5cbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRcIilcbmdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KFwiICsgc2l6ZSArIFwiLCAxZnIpXCJcbmdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwicmVwZWF0KFwiICsgc2l6ZSArIFwiLCAxZnIpXCJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==