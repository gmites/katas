export function powerOfTwo(numbers: number[]): number[] {
  //test 1
  /*const arrayPowerOfTwo =[];
    arrayPowerOfTwo [0] = Math.pow(numbers[0], 2);
    return arrayPowerOfTwo;*/

  //test 2
  const arrayPowerOfTwo: number[] = []
  for (let i = 0; i < numbers.length; i++) {
    arrayPowerOfTwo[i] = Math.pow(numbers[i], 2)
    // arrayPowerOfTwo.push(number[i]**2)
  }
  return arrayPowerOfTwo
}
