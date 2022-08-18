export class GameBoard {
  constructor() {
    this.gameBoardArray = this.createBoardArray()
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
    return isThereShip
  }
}
