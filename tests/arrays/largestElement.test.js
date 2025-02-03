const findMaxForLoop = require('../../src/arrays/largestElement'); // Replace with actual file name

describe('findMax functions', () => {
//   test('Math.max approach - should return the maximum element', () => {
//     expect(findMaxMath([1, 5, 3, 9, 2])).toBe(9);
//     expect(findMaxMath([-10, -5, -1, -20])).toBe(-1);
//     expect(findMaxMath([100])).toBe(100);
//     expect(findMaxMath([])).toBeNull();
//   });

  test('For loop approach - should return the maximum element', () => {
    expect(findMaxForLoop([1, 5, 3, 9, 2])).toBe(9);
    expect(findMaxForLoop([-10, -5, -1, -20])).toBe(-1);
    expect(findMaxForLoop([100])).toBe(100);
    expect(findMaxForLoop([])).toBeNull();
  });

//   test('Reduce approach - should return the maximum element', () => {
//     expect(findMaxReduce([1, 5, 3, 9, 2])).toBe(9);
//     expect(findMaxReduce([-10, -5, -1, -20])).toBe(-1);
//     expect(findMaxReduce([100])).toBe(100);
//     expect(findMaxReduce([])).toBeNull();
//   });

  test('Handles large arrays correctly', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    // expect(findMaxMath(largeArray)).toBe(999);
    expect(findMaxForLoop(largeArray)).toBe(999);
    // expect(findMaxReduce(largeArray)).toBe(999);
  });

  test('Handles array with duplicate max values', () => {
    // expect(findMaxMath([3, 9, 9, 2, 9])).toBe(9);
    expect(findMaxForLoop([3, 9, 9, 2, 9])).toBe(9);
    // expect(findMaxReduce([3, 9, 9, 2, 9])).toBe(9);
  });
});
