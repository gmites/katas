import { filterEvenNumbers } from './filter-even-numbers'

describe('filterEvenNumbers', () => {
  it('Given an array of numbers it should filter the even numbers.', () => {
    const given = [5, 4, 7, 1]

    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([4])
  })
})
