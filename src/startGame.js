import {
  hoverShipPlacement,
  gridPlaceShip,
  getUserSelectedLocations,
  checkGridShipPlacement,
  markGridItem,
} from "./UI"
import { Player } from "./Player"
import { GameBoard } from "./Gameboard"
import { Ship } from "./Ship"
export function popupGridEventListener(i) {
  const gridItems = document.querySelectorAll(".grid-item-popup")
  gridItems.forEach((item) => {
    item.addEventListener("click", (event) => gridPlaceShip(event))
    item.addEventListener("mouseover", hoverShipPlacement)
    item.addEventListener("mouseout", hoverShipPlacement)
  })
}

let pcShipLocations = []
export function gameStart() {
  const player = new Player("player")
  const playerShipLocations = getUserSelectedLocations()

  playerShipLocations.forEach((location) => {
    player.gameBoard.placeShip(
      new Ship(location.n),
      location.startingX,
      location.startingY
    )
  })

  console.log(player.gameBoard)

  const PC = new Player("PC")

  let i = 6
  while (pcShipLocations.length < 5) {
    let x = getRandomCoords()
    let y = getRandomCoords()
    if (checkPcShips(x, y, i)) {
      placePcShips(x, y, i)
      i--
    }
  }

  pcShipLocations.forEach((location) => {
    PC.gameBoard.placeShip(
      new Ship(location.n),
      location.startingX,
      location.startingY
    )
  })

  console.log(PC.gameBoard)
  const pcHits = []
  const battlefieldGridItems = document.querySelectorAll(".grid-item-PC")
  battlefieldGridItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation()

      if (
        PC.gameBoard.receiveAttack(e.target.dataset.x, e.target.dataset.y) ===
        undefined
      )
        return

      let x = getRandomCoords()
      let y = getRandomCoords()
      do {
        x = getRandomCoords()
        y = getRandomCoords()
      } while (pcHits.some((attack) => attack.x === x && attack.y === y))
      player.gameBoard.receiveAttack(x, y)
      pcHits.push({ x: x, y: y })
    })
  })
}

function getRandomCoords() {
  return Math.floor(Math.random() * 10)
}
function placePcShips(x, y, i) {
  const shipLocation = []
  const startingX = x
  const startingY = y
  const n = i
  if (!checkPcShips(startingX, startingY, n)) return

  for (let i = 0; i < n; i++) {
    shipLocation.push(startingY + i)
  }
  const gridItems = document.querySelectorAll(".grid-item-PC")
  gridItems.forEach((item) => {
    if (item.dataset.x == startingX) {
      for (let i = 0; i < n; i++) {
        if (item.dataset.y == shipLocation[i]) {
          item.dataset.marked = "true"
        }
      }
    }
  })
  pcShipLocations.push({ startingX: x, startingY: y, n: n })
}

function checkPcShips(x, y, n) {
  if (x > 10 || x < 0 || y > 10 || y < 0 || y + n > 10) return false

  const gridItems = document.querySelectorAll(
    `.grid-item-PC[data-x="${x - 1}"],
      .grid-item-PC[data-x="${x + 1}"],
      .grid-item-PC[data-x="${x}"][data-y="${y - 1}"],
      .grid-item-PC[data-x="${x}"][data-y="${y + n}"
       `
  )
  const indexes = []

  for (let i = y - 1; i <= y + n; i++) {
    indexes.push(i)
  }
  let check = true
  gridItems.forEach((item) => {
    if (
      indexes.includes(parseInt(item.dataset.y)) &&
      item.dataset.marked == "true"
    ) {
      check = false
    }
  })
  if (!check) return false
  return true
}
