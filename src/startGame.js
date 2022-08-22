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
  const battlefieldGridItems = document.querySelectorAll("#PC")
  console.log(battlefieldGridItems)
  battlefieldGridItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(event)
    })
  })
}
export function gameStart() {
  const player = new Player("player")
  const playerShipLocations = getUserSelectedLocations()
  console.log(playerShipLocations)

  playerShipLocations.forEach((location) => {
    player.gameBoard.placeShip(
      new Ship(location.n),
      location.startingX,
      location.startingY
    )
  })

  console.log(player.gameBoard)
}
