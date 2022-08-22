import { GameBoard } from "./Gameboard"
export class Player {
  constructor(name) {
    this.name = name
    this.gameBoard = new GameBoard(name)
  }
}
