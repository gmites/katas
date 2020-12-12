import { powerOfTwo } from './power-of-two'

describe('powerOfTwo', () => {
  //test 1
  it('Given a list of one number it should return a new list that are to the power of 2.', () => {
    const given = [5]

    const actual = powerOfTwo(given)

    expect(actual).toEqual([25])
  })

  //test 2
  it('Given a list of numbers it should return a new list of numbers that are to the power of 2.', () => {
    const given = [2, 4, 3]

    const actual = powerOfTwo(given)

    expect(actual).toEqual([4, 16, 9])
  })
})
