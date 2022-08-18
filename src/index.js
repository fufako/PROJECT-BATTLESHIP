import { GameBoard } from "./Gameboard"
import { Ship } from "./Ship"

const playerGameBoard = new GameBoard("Player")
const pcGameBoard = new GameBoard("PC")

for (let i = 2; i < 6; i++) {
  playerGameBoard.placeShip(new Ship(i), i - 2, i - 2)
  pcGameBoard.placeShip(new Ship(i), i - 2, i - 2)
}

console.log(pcGameBoard.getGameBoard())
