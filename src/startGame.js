import {
  hoverShipPlacement,
  gridPlaceShip,
  getUserSelectedLocations,
  closePopup,
} from "./UI"
import { Player } from "./Player"
import { GameBoard } from "./Gameboard"
import { Ship } from "./Ship"
export function gridEventListener(i) {
  const gridItems = document.querySelectorAll(".grid-item-popup")
  gridItems.forEach((item) => {
    item.addEventListener("click", (event) => gridPlaceShip(event))
    item.addEventListener("mouseover", hoverShipPlacement)
    item.addEventListener("mouseout", hoverShipPlacement)
  })
}
export function gameStart() {
  const player = new Player("player1")
  const playerShipLocations = getUserSelectedLocations()

  playerShipLocations.forEach((location) => {
    player.gameBoard.placeShip(
      new Ship(location.n),
      location.startingX,
      location.startingY
    )
    console.log()
  })
  const PC = new Player("PC")
}
