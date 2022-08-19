const size = 10
const grid = document.querySelector(".grid")
grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)"
grid.style.gridTemplateRows = "repeat(" + size + ", 1fr)"

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const gridItem = document.createElement("div")
    gridItem.classList.add("grid-item")
    gridItem.dataset.x = i
    gridItem.dataset.y = j
    grid.appendChild(gridItem)
  }
}

export function markGridItem(x, y) {
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "pink"
    }
  })
}
export function hitGridItem(x, y) {
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    if (item.dataset.x == x && item.dataset.y == y) {
      item.style.backgroundColor = "yellow"
    }
  })
}
