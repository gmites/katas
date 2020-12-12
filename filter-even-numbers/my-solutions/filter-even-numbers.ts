export function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers: number[] = []
  numbers.forEach(element => {
    if (element % 2 === 0) {
      evenNumbers.push(element)
    }
  })
  return evenNumbers
}
