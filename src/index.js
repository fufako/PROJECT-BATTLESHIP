export function capitalize(text) {
  const result = text.charAt(0).toUpperCase() + text.slice(1)
  return result
}
export function reverseString(text) {
  let result = ""
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i]
  }
  return result
}
