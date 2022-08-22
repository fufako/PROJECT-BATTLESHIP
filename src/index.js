import { GameBoard } from "./Gameboard"
import { Player } from "./Player"
import { Ship } from "./Ship"
import { gridEventListener } from "./startGame"
import { createPopup, getUserSelectedLocations } from "./UI"
import "./style.css"
createPopup()
gridEventListener()

const player1 = new Player("player1")
const PC = new Player("PC")

console.log(getUserSelectedLocations())
