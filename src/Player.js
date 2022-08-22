import { GameBoard } from "./Gameboard"
import { createGrid } from "./UI"
export class Player {
  constructor(name) {
    this.name = name
    this.gameBoard = new GameBoard(name)
    this.grid = createGrid(name)
  }
}
