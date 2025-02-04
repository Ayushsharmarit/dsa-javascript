const { checkDuplicateSet, checkDuplicateMap } = require('../../src/arrays/containDuplicate'); // Replace with actual file name

describe('Test checkDuplicateSet function', () => {
    it('should return true when there are duplicates', () => {
      expect(checkDuplicateSet([1, 2, 3, 4, 5, 5])).toBe(true);
    });
  
    it('should return false when there are no duplicates', () => {
      expect(checkDuplicateSet([1, 2, 3, 4, 5, 6])).toBe(false);
    });
  
    it('should return true when there is a duplicate', () => {
      expect(checkDuplicateSet([1, 2, 3, 3, 4])).toBe(true);
    });
  
    it('should return false for an empty array', () => {
      expect(checkDuplicateSet([])).toBe(false);
    });
  
    it('should return false when all values are unique', () => {
      expect(checkDuplicateSet([10, 20, 30, 40, 50])).toBe(false);
    });
  });
  
  describe('Test checkDuplicateMap function', () => {
    it('should return true when there are duplicates', () => {
      expect(checkDuplicateMap([1, 2, 3, 4, 5, 5])).toBe(true);
    });
  
    it('should return false when there are no duplicates', () => {
      expect(checkDuplicateMap([1, 2, 3, 4, 5, 6])).toBe(false);
    });
  
    it('should return true when there is a duplicate', () => {
      expect(checkDuplicateMap([1, 2, 3, 3, 4])).toBe(true);
    });
  
    it('should return false for an empty array', () => {
      expect(checkDuplicateMap([])).toBe(false);
    });
  
    it('should return false when all values are unique', () => {
      expect(checkDuplicateMap([10, 20, 30, 40, 50])).toBe(false);
    });
  });
  