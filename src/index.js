import { GameBoard } from "./Gameboard"
import { Player } from "./Player"
import { Ship } from "./Ship"
import { gameStart, gridEventListener } from "./startGame"
import { createPopup, getUserSelectedLocations, closePopup } from "./UI"
import "./style.css"
createPopup()
gridEventListener()
console.log(getUserSelectedLocations())
