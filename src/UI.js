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

export function gridEventListener() {
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    item.addEventListener("click", gridPlaceShip)
    item.addEventListener("mouseover", hoverShipPlacement)
    item.addEventListener("mouseout", hoverShipPlacement)
  })
}

function hoverShipPlacement(e) {
  const shipLocation = []
  const startingX = parseInt(e.target.getAttribute("data-x"))
  const startingY = parseInt(e.target.getAttribute("data-y"))
  for (let i = 0; i < 5; i++) {
    shipLocation.push(startingY + i)
  }
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    if (item.dataset.x == startingX) {
      for (let i = 0; i < 5; i++) {
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

function gridPlaceShip(e) {
  const shipLocation = []
  const startingX = parseInt(e.target.getAttribute("data-x"))
  const startingY = parseInt(e.target.getAttribute("data-y"))
  for (let i = 0; i < 5; i++) {
    shipLocation.push(startingY + i)
  }
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    if (item.dataset.x == startingX) {
      for (let i = 0; i < 5; i++) {
        if (item.dataset.y == shipLocation[i]) {
          item.style.backgroundColor = "grey"
          item.dataset.marked = "true"
        }
      }
    }
  })
}
