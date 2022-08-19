import { GameBoard } from "./Gameboard"
import { Ship } from "./Ship"
import "./style.css"

const playerGameBoard = new GameBoard("Player")
const pcGameBoard = new GameBoard("PC")

console.log(pcGameBoard.gameBoardArray)
console.log(pcGameBoard.placeShip(new Ship(2), 0, 0))

console.log(pcGameBoard.placeShip(new Ship(3), 2, 0))
console.log(pcGameBoard.placeShip(new Ship(4), 4, 4))
console.log(pcGameBoard.placeShip(new Ship(5), 0, 3))
console.log(pcGameBoard.placeShip(new Ship(6), 8, 0))

console.log(pcGameBoard.getGameBoard())
console.log(pcGameBoard.getShips())
