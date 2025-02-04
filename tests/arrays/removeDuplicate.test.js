const {
    removeDuplicate,
    removeDuplicateReduce,
    removeDuplicateFilter,
    removeDuplicatesMap,
  } = require("../../src/arrays/removeDuplicate"); // Adjust file path as needed
  
  describe("Remove Duplicates Functions", () => {
    const inputArray = [1, 2, 3, 4, 1, 2, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
  
    test("removeDuplicate (Set) removes duplicates correctly", () => {
      expect(removeDuplicate(inputArray)).toEqual(expectedOutput);
    });
  
    test("removeDuplicateReduce removes duplicates correctly", () => {
      expect(removeDuplicateReduce(inputArray)).toEqual(expectedOutput);
    });
  
    test("removeDuplicateFilter removes duplicates correctly", () => {
      expect(removeDuplicateFilter(inputArray)).toEqual(expectedOutput);
    });
  
    test("removeDuplicatesMap removes duplicates correctly", () => {
      expect(removeDuplicatesMap(inputArray)).toEqual(expectedOutput);
    });
  
    test("Handles empty array", () => {
      expect(removeDuplicate([])).toEqual([]);
      expect(removeDuplicateReduce([])).toEqual([]);
      expect(removeDuplicateFilter([])).toEqual([]);
      expect(removeDuplicatesMap([])).toEqual([]);
    });
  
    test("Handles array with one element", () => {
      expect(removeDuplicate([42])).toEqual([42]);
      expect(removeDuplicateReduce([42])).toEqual([42]);
      expect(removeDuplicateFilter([42])).toEqual([42]);
      expect(removeDuplicatesMap([42])).toEqual([42]);
    });
  
    test("Handles array with no duplicates", () => {
      const noDuplicates = [10, 20, 30];
      expect(removeDuplicate(noDuplicates)).toEqual(noDuplicates);
      expect(removeDuplicateReduce(noDuplicates)).toEqual(noDuplicates);
      expect(removeDuplicateFilter(noDuplicates)).toEqual(noDuplicates);
      expect(removeDuplicatesMap(noDuplicates)).toEqual(noDuplicates);
    });
  
    test("Handles array with different data types", () => {
      const mixedArray = [1, "1", 2, "2", 1, "1"];
      const expectedMixedOutput = [1, "1", 2, "2"];
      expect(removeDuplicate(mixedArray)).toEqual(expectedMixedOutput);
      expect(removeDuplicateReduce(mixedArray)).toEqual(expectedMixedOutput);
      expect(removeDuplicateFilter(mixedArray)).toEqual(expectedMixedOutput);
      expect(removeDuplicatesMap(mixedArray)).toEqual(expectedMixedOutput);
    });
  
    test("Handles large array efficiently", () => {
      const largeArray = Array.from({ length: 10000 }, (_, i) => i % 100);
      expect(removeDuplicate(largeArray)).toHaveLength(100);
      expect(removeDuplicateReduce(largeArray)).toHaveLength(100);
      expect(removeDuplicateFilter(largeArray)).toHaveLength(100);
      expect(removeDuplicatesMap(largeArray)).toHaveLength(100);
    });
  });
  