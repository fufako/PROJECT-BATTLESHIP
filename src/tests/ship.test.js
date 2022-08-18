import { Ship } from "../Ship"

//Lepsza metoda niż tworzenie ship w każdym tescie?

test("creates and initializes a ship", () => {
  let ship = new Ship(3)
  expect(ship).toEqual({ length: 3, hits: [], name: "Submarine" })
})

test("creates good name", () => {
  let ship = new Ship(6)
  expect(ship.name).toEqual("Carrier")
})
test("ship takes a hit", () => {
  let ship = new Ship(3)
  ship.hit(2)
  expect(ship.hits).toContain(2)
})
test("ship sinks", () => {
  let ship = new Ship(3)
  ship.hit(0)
  ship.hit(1)
  ship.hit(2)
  expect(ship.isSunk()).toBe(true)
})
test("prevents being hit multiple times at the same spot", () => {
  let ship = new Ship(3)
  ship.hit(1)
  ship.hit(1)
  expect(ship.hits.length).toBe(1)
})
