import { GameBoard } from "./Gameboard"
import { Player } from "./Player"
import { Ship } from "./Ship"
import { gridEventListener } from "./UI"
import "./style.css"

const player1 = new Player("player1")
const PC = new Player("PC")

player1.gameBoard.placeShip(new Ship(2), 0, 0)
PC.gameBoard.placeShip(new Ship(2), 4, 0)
PC.gameBoard.receiveAttack(4, 0)
PC.gameBoard.receiveAttack(4, 3)

gridEventListener()
