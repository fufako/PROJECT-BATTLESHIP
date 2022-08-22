import { GameBoard } from "./Gameboard"
import { Player } from "./Player"
import { Ship } from "./Ship"
import "./style.css"

const player1 = new Player("player1")
const PC = new Player("PC")

player1.gameBoard.placeShip(new Ship(2), 0, 0)
PC.gameBoard.placeShip(new Ship(2), 4, 0)
