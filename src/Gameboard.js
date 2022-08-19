import { Ship } from "./Ship"
import { hitGridItem, markGridItem } from "./UI.js"
export class GameBoard {
  constructor(owner) {
    this.gameBoardArray = this.createBoardArray()
    this.missedAttack = []
    this.owner = owner
    this.ships = []
  }

  createBoardArray = () => {
    let array = []
    let arrayItem = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arrayItem[j] = new Array({
          x: i,
          y: j,
          shipName: undefined,
          shipPosition: undefined,
        })
      }
      array.push(arrayItem)
      arrayItem = []
    }
    return array
  }
  receiveAttack = (x, y) => {
    const attackedField = this.gameBoardArray[x][y][0]
    const attackedShip = this.ships.find(
      (item) => item.name == attackedField.shipName
    )
    const isThereShip = attackedField.shipName === undefined ? false : true
    if (!isThereShip) {
      this.missedAttack.push({ x: x, y: y })
      return
    }

    attackedShip.hit(attackedField.shipPosition)

    hitGridItem(x, y)
    console.log(attackedShip.isSunk())
  }
  checkShipPlacement = (length, x, y) => {
    if (x > 10 || x < 0 || y > 10 || y < 0 || y + length >= 10) return false

    for (let i = 0; i < x + length; i++) {
      if (this.gameBoardArray[x][y][0].shipName !== undefined) return false
    }
    return true
  }
  placeShip = (ship, x, y) => {
    if (!this.checkShipPlacement(ship.getLength(), x, y)) return
    for (let i = 0; i < ship.getLength(); i++) {
      this.gameBoardArray[x][y + i][0].shipName = ship.nameHandler()
      this.gameBoardArray[x][y + i][0].shipPosition = i
      markGridItem(x, y + i)
    }
    this.ships.push(ship)
    return this.ships
  }
  getMissedAttacks = () => {
    return this.missedAttack
  }
  getGameBoard = () => {
    return this.gameBoardArray
  }
  getShips = () => {
    return this.ships
  }
  checkIfSunk = (ship) => {
    console.log(ship.isSunk())
  }
}
