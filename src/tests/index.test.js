import { capitalize, reverseString } from "../index"

test("Capitalize", () => {
  expect(capitalize("poland")).toBe("Poland")
})
test("Reverse", () => {
  expect(reverseString("poland")).toBe("dnalop")
})
