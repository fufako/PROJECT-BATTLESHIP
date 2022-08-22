import { GameBoard } from "./Gameboard"
import { Ship } from "./Ship"
import "./style.css"

const playerGameBoard = new GameBoard("Player")
const pcGameBoard = new GameBoard("PC")

pcGameBoard.placeShip(new Ship(2), 0, 0)
pcGameBoard.placeShip(new Ship(3), 2, 0)
pcGameBoard.placeShip(new Ship(4), 4, 4)
pcGameBoard.placeShip(new Ship(5), 0, 3)
pcGameBoard.placeShip(new Ship(6), 8, 0)

pcGameBoard.receiveAttack(0, 0)
pcGameBoard.receiveAttack(0, 0)
pcGameBoard.receiveAttack(0, 0)

console.log(pcGameBoard.getGameBoard())
console.log(pcGameBoard.getShips())
