import { Ship } from "./Ship"
export class GameBoard {
  constructor(owner) {
    this.gameBoardArray = this.createBoardArray()
    this.missedAttack = []
    this.owner = owner
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
    const isThereShip = attackedField.shipName === undefined ? false : true
    if (!isThereShip) {
      this.missedAttack.push({ x: x, y: y })
      return
    }
    this.gameBoardArray[x][y][0].shipName.hit(
      this.gameBoardArray[x][y][0].shipPosition
    )
  }
  checkShipPlacement = (length, x, y) => {
    if (x > 10 || x < 0 || y > 10 || y < 0 || x + length >= 10) return false
    for (let i = 0; i < x + length; i++) {
      if (this.gameBoardArray[x][i][0].shipName !== undefined) return false
    }
    return true
  }
  placeShip = (ship, x, y) => {
    if (!this.checkShipPlacement(ship.getLength(), x, y)) return
    for (let i = 0; i < ship.getLength(); i++) {
      this.gameBoardArray[x + i][y][0].shipName = ship.nameHandler()
      this.gameBoardArray[x + i][y][0].shipPosition = i
    }
    return this.gameBoardArray[x + 1][y][0]
  }
  getMissedAttacks = () => {
    return this.missedAttack
  }
  getGameBoard = () => {
    return this.gameBoardArray
  }
}
