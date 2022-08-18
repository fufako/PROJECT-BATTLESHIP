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

test("Check if ship is placing", () => {
  let gameBoard = new GameBoard()
  let ship = new Ship(5)
  expect(gameBoard.placeShip(ship, 0, 0)).toEqual("Battleship")
})
test("Add to missed attacks", () => {
  let gameBoard = new GameBoard()
  let ship = new Ship(5)
  gameBoard.receiveAttack(2, 5)
  expect(gameBoard.getMissedAttacks()).toEqual([{ x: 2, y: 5 }])
})
test("Successful attack", () => {
  let gameBoard = new GameBoard()
  let ship = new Ship(5)
  gameBoard.placeShip(ship, 0, 0)
  expect(gameBoard.receiveAttack(0, 0)).toEqual("Battleship")
})
