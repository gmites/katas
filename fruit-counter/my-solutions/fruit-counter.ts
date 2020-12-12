export function fruitCounter(fruits: string[]): Record<string, number> {
  const fruitCounter: Record<string, number> = {}
  for (let fruit of fruits) {
    if (fruitCounter.hasOwnProperty(fruit)) {
      fruitCounter[fruit]++
    } else {
      fruitCounter[fruit] = 1
    }
  }

  return fruitCounter
}
