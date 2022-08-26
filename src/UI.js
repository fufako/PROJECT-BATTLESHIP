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
      gridItem.classList.add(`grid-item-${name}`)
      gridItem.id = name
      gridItem.dataset.x = i
      gridItem.dataset.y = j
      grid.appendChild(gridItem)
    }
  }
}

export function markGridItem(x, y, name) {
  const gridItems = document.querySelectorAll(`.grid-item-${name}`)
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "pink"
    }
  })
}
export function hitGridItem(x, y, name) {
  const gridItems = document.querySelectorAll(`.grid-item-${name}`)
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
const userLocations = []
export function gridPlaceShip(event) {
  let isPopup = true
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

  userLocations.push({ startingX, startingY, n })
  if (n === 2 && isPopup) {
    closePopup()
    isPopup = false
  }
  displayShipName(n)
  n--
  return
}

function displayShipName(n) {
  const info = document.querySelector(".info")

  info.innerHTML = "Place your " + `<u>` + getShipName(n - 1) + `</u>`
}
function getShipName(n) {
  if (n === 6) return "Carrier"
  if (n === 5) return "Battleship"
  if (n === 4) return "Destroyer"
  if (n === 3) return "Submarine"
  if (n === 2) return "Patrol Boat"
}

export function playAgainPopup(winner) {
  const body = document.body
  const container = document.createElement("div")
  const playDiv = document.createElement("div")
  const h3 = document.createElement("h3")
  const playAgainBtn = document.createElement("button")
  container.className = "play-again"
  playDiv.className = "play-again-div"

  playAgainBtn.className = "play-again-btn"
  playAgainBtn.textContent = "Play again"
  if (winner == "PC") {
    h3.textContent = "You won"
  } else {
    h3.textContent = "Computer won"
  }

  playDiv.appendChild(h3)
  playDiv.appendChild(playAgainBtn)
  container.appendChild(playDiv)
  body.appendChild(container)
}
export function createPopup() {
  const popup = document.querySelector("#popup")
  const infoHeader = document.createElement("h2")
  const info = document.createElement("div")
  const grid = document.createElement("div")

  popup.appendChild(infoHeader)
  popup.appendChild(info)
  popup.appendChild(grid)

  info.className = "info"
  grid.className = "grid-popup"
  infoHeader.textContent = "Battleship Game"
  info.innerHTML = `Place your <u>Carrier</u>`

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

export function checkGridShipPlacement(x, y, n) {
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
