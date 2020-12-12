import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given of an array of one number', () => {
    const given = [5]

    const actual = getHighestNumber(5)

    expect(actual).toBe(5)
  })

  it('should get the highest number given of an array of numbers', () => {
    const given = [5, 7, 3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(7)
  })

  it('should get the highest number given of an array of negative numbers', () => {
    const given = [-1, -2, -3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(-1)
  })
})
