import {stitchArrays} from './copy'

describe('stitchArrays', () => {
    //test 1
    it('should get one array of an array of one array', () => {
      const given = [[5]] 

      const actual = stitchArrays(...   given)

      expect(actual).toEqual([5])
    })

    /*//test 2
    it('should get one array of an array of 2 arrays', () => {
      const given = [[5],[2]]
  
      const actual = stitchArrays(...given)
  
      expect(actual).toEqual([5,2])
    })*/

    //test 3
    it('should get one array of an array of n arrays', () => {
      const given = [[5,2],[3,6,1],[0,1],[6,9]]
  
      const actual = stitchArrays(...given)
  
      expect(actual).toEqual([5,2,3,6,1,0,1,6,9])
    })
})