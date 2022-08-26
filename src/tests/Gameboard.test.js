import { GameBoard } from "../Gameboard"
import { Ship } from "../Ship"

test("Create array check first item", () => {
  let gameBoard = new GameBoard()

  expect(gameBoard.gameBoardArray[0][0]).toEqual([
    { shipName: undefined, x: 0, y: 0 },
  ])
})
test("Access position", () => {
  let gameBoard = new GameBoard()

  expect([
    gameBoard.gameBoardArray[0][0][0].x,
    gameBoard.gameBoardArray[0][0][0].y,
  ]).toEqual([0, 0])
})
test("Access the name of the ship", () => {
  let gameBoard = new GameBoard()
  expect(gameBoard.gameBoardArray[0][0][0].shipName).toEqual(undefined)
})

test("Check if user can place a ship", () => {
  let gameBoard = new GameBoard()
  expect(gameBoard.checkShipPlacement(5, 1, 1)).toEqual(true)
})
