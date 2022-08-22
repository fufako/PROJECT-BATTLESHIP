import { Ship } from "./Ship"
import {
  hitGridItem,
  markGridItem,
  markGridMissedAttack,
  gridPlaceShip,
} from "./UI.js"
export class GameBoard {
  constructor(owner) {
    this.gameBoardArray = this.createBoardArray()
    this.missedAttacks = []
    this.landedAttacks = []
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

    if (this.checkIfLanded(x, y)) return

    if (!isThereShip) {
      this.missedAttacks.push({ x: x, y: y })
      markGridMissedAttack(x, y, this.owner)

      return
    }
    if (attackedShip.isSunk()) return
    this.landedAttacks.push({ x: x, y: y })
    attackedShip.hit(attackedField.shipPosition)
    console.log(this.landedAttacks)

    hitGridItem(x, y, this.owner)
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
      markGridItem(x, y + i, this.owner)
    }
    this.ships.push(ship)
    return this.ships
  }
  getMissedAttacks = () => {
    return this.missedAttacks
  }
  getGameBoard = () => {
    return this.gameBoardArray
  }
  getShips = () => {
    return this.ships
  }

  checkIfLanded = (x, y) => {
    if (this.landedAttacks.some((attack) => attack.x === x && attack.y === y))
      return true
    return false
  }
}
