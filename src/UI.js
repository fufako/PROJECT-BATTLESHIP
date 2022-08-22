import { gameStart } from "./startGame"
const SIZE = 10

export function createGrid(name) {
  const girdContainer = document.querySelector(".grid-container")
  const grid = document.createElement("div")
  girdContainer.appendChild(grid)
  grid.className = "grid"
  grid.id = name

  grid.style.gridTemplateColumns = "repeat(" + SIZE + ", 1fr)"
  grid.style.gridTemplateRows = "repeat(" + SIZE + ", 1fr)"

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div")
      gridItem.classList.add("grid-item")
      gridItem.id = name
      gridItem.dataset.x = i
      gridItem.dataset.y = j
      grid.appendChild(gridItem)
    }
  }
}

export function markGridItem(x, y, name) {
  const gridItems = document.querySelectorAll(`#${name}`)
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "pink"
    }
  })
}
export function hitGridItem(x, y, name) {
  const gridItems = document.querySelectorAll(`#${name}`)
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "yellow"
    }
  })
}

export function markGridMissedAttack(x, y, name) {
  const gridItems = document.querySelectorAll(`#${name}`)
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "red"
    }
  })
}

let n = 6

export function hoverShipPlacement(e) {
  const shipLocation = []
  const startingX = parseInt(e.target.getAttribute("data-x"))
  const startingY = parseInt(e.target.getAttribute("data-y"))
  for (let i = 0; i < n; i++) {
    shipLocation.push(startingY + i)
  }
  const gridItems = document.querySelectorAll(".grid-item-popup")
  gridItems.forEach((item) => {
    if (item.dataset.x == startingX) {
      for (let i = 0; i < n; i++) {
        if (
          item.dataset.y == shipLocation[i] &&
          item.dataset.marked !== "true"
        ) {
          item.style.backgroundColor = e.type === "mouseover" ? "blue" : "white"
        }
      }
    }
  })
}

//Save locations that user have picked
let userLocations = []
export function gridPlaceShip(event) {
  const shipLocation = []
  const startingX = parseInt(event.target.getAttribute("data-x"))
  const startingY = parseInt(event.target.getAttribute("data-y"))

  if (!checkGridShipPlacement(startingX, startingY, n)) return
  for (let i = 0; i < n; i++) {
    shipLocation.push(startingY + i)
  }
  const gridItems = document.querySelectorAll(".grid-item-popup")
  gridItems.forEach((item) => {
    if (item.dataset.x == startingX) {
      for (let i = 0; i < n; i++) {
        if (item.dataset.y == shipLocation[i]) {
          item.style.backgroundColor = "grey"
          item.dataset.marked = "true"
        }
      }
    }
  })
  console.log(userLocations)
  n--
  if (n < 2) closePopup()
  userLocations.push({ startingX, startingY, n })

  return
}

export function createPopup() {
  const popup = document.querySelector("#popup")
  const grid = document.createElement("div")
  popup.appendChild(grid)
  grid.className = "grid-popup"

  grid.style.gridTemplateColumns = "repeat(" + SIZE + ", 1fr)"
  grid.style.gridTemplateRows = "repeat(" + SIZE + ", 1fr)"

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div")
      gridItem.classList.add("grid-item-popup")
      gridItem.dataset.x = i
      gridItem.dataset.y = j
      grid.appendChild(gridItem)
    }
  }
}

export function closePopup() {
  const popup = document.querySelector("#popup")
  const gridPopup = document.querySelector(".grid-popup")
  popup.style.visibility = "hidden"
  gridPopup.style.visibility = "hidden"
  gameStart()
}

function checkGridShipPlacement(x, y, n) {
  if (x > 10 || x < 0 || y > 10 || y < 0 || y + n > 10) return false

  const gridItems = document.querySelectorAll(
    `.grid-item-popup[data-x="${x - 1}"],
    .grid-item-popup[data-x="${x + 1}"],
    .grid-item-popup[data-x="${x}"][data-y="${y - 1}"],
    .grid-item-popup[data-x="${x}"][data-y="${y + n}"
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
export function getUserSelectedLocations() {
  return userLocations
}
