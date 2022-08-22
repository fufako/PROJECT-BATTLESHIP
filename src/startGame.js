import { hoverShipPlacement, gridPlaceShip } from "./UI"
import { GameBoard } from "./Gameboard"
export function gridEventListener(i) {
  const gridItems = document.querySelectorAll(".grid-item-popup")
  gridItems.forEach((item) => {
    item.addEventListener("click", (event) => gridPlaceShip(event))
    item.addEventListener("mouseover", hoverShipPlacement)
    item.addEventListener("mouseout", hoverShipPlacement)
  })
}
function gameStart() {
  const player1 = new Player("player1")
  const PC = new Player("PC")

  for (let i = 2; i < 7; i++) {
    player1.gameBoard.placeShip(new Ship(i), 0, 0)
    gridEventListener(i)
  }
}
