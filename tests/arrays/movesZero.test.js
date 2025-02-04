const {moveZeroFilter, moveZeroForLoop} = require('../../src/arrays/movesZeros'); // Replace with actual file name


describe('moveZero functions', () => {
    test('moveZeroFilter: should move all zeros to the end', () => {
      expect(moveZeroFilter([1, 2, 3, 0, 4, 0, 2, 0])).toEqual([1, 2, 3, 4, 2, 0, 0, 0]);
      expect(moveZeroFilter([0, 0, 0, 1, 2, 3])).toEqual([1, 2, 3, 0, 0, 0]);
      expect(moveZeroFilter([0, 0, 0])).toEqual([0, 0, 0]);
      expect(moveZeroFilter([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(moveZeroFilter([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
      expect(moveZeroFilter([0, 1, 0, 1, 0, 1, 0])).toEqual([1, 1, 1, 0, 0, 0, 0]);
    });
  
    test('moveZeroForLoop: should move all zeros to the end', () => {
      expect(moveZeroForLoop([1, 2, 3, 0, 4, 0, 2, 0])).toEqual([1, 2, 3, 4, 2, 0, 0, 0]);
      expect(moveZeroForLoop([0, 0, 0, 1, 2, 3])).toEqual([1, 2, 3, 0, 0, 0]);
      expect(moveZeroForLoop([0, 0, 0])).toEqual([0, 0, 0]);
      expect(moveZeroForLoop([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(moveZeroForLoop([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
      expect(moveZeroForLoop([0, 1, 0, 1, 0, 1, 0])).toEqual([1, 1, 1, 0, 0, 0, 0]);
    });
  });
  

  