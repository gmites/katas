import {getHighestNumber} from './highest-number'

describe('getHighestNumber', () => {
    it('should get the highest number given with an array of one number', () => {
      const given = [5]
  
      const actual = getHighestNumber(given)
  
      expect(actual).toBe(5)
    })

    it('should get the highest number given with an array of numbers', () => {
      const given = [5,7,3]
  
      const actual = getHighestNumber(given)
  
      expect(actual).toBe(7)
    })
})