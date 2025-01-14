const reverseArray = require('../../src/arrays/reverseArray');

describe('reverseArray', () => {
  // Positive test cases
  test('Reverses an array of numbers', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  test('Reverses an array of strings', () => {
    expect(reverseArray(['a', 'b', 'c', 'd'])).toEqual(['d', 'c', 'b', 'a']);
  });

  test('Reverses an array of mixed data types', () => {
    expect(reverseArray([1, 'a', true, null])).toEqual([null, true, 'a', 1]);
  });

  test('Reverses an array with a single element', () => {
    expect(reverseArray([42])).toEqual([42]);
  });

  test('Reverses an empty array', () => {
    expect(reverseArray([])).toEqual([]);
  });

  // Edge cases
//   test('Does not modify the original array', () => {
//     const originalArray = [1, 2, 3];
//     const result = reverseArray(originalArray);
//     expect(result).toEqual([3, 2, 1]);
//     expect(originalArray).toEqual([1, 2, 3]); // Ensure original is unchanged
//   });

  test('Modifies the original array for in-place reversal', () => {
    const originalArray = [1, 2, 3];
    reverseArray(originalArray);
    expect(originalArray).toEqual([3, 2, 1]);
  });
  

  test('Handles an array with duplicate elements', () => {
    expect(reverseArray([1, 2, 2, 3])).toEqual([3, 2, 2, 1]);
  });

  test('Reverses an array of nested arrays', () => {
    expect(reverseArray([[1, 2], [3, 4], [5]])).toEqual([[5], [3, 4], [1, 2]]);
  });

  // Error handling
  test('Throws an error if input is not an array', () => {
    expect(() => reverseArray('not an array')).toThrow('Input must be an array');
    expect(() => reverseArray(123)).toThrow('Input must be an array');
    expect(() => reverseArray({ key: 'value' })).toThrow('Input must be an array');
    expect(() => reverseArray(null)).toThrow('Input must be an array');
    expect(() => reverseArray(undefined)).toThrow('Input must be an array');
  });
});
