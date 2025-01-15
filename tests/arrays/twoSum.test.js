const twoSum = require('../../src/arrays/twoSum'); 

describe('twoSum Function', () => {
  // Test case 1: Normal case - target sum exists
  test('should return indices of two numbers that sum to the target', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 9;
    const result = twoSum(arr, target);
    expect(result).toEqual([3, 4]); 
  });

  // Test case 2: Normal case - no two numbers sum to target
  test('should return -1 if no two numbers sum to the target', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 93;
    const result = twoSum(arr, target);
    expect(result).toBe(-1);
  });

  // Test case 3: Edge case - empty array
  test('should return -1 for an empty array', () => {
    const arr = [];
    const target = 5;
    const result = twoSum(arr, target);
    expect(result).toBe(-1);
  });

  // Test case 4: Edge case - single element array
  test('should return -1 for a single-element array', () => {
    const arr = [1];
    const target = 2;
    const result = twoSum(arr, target);
    expect(result).toBe(-1);
  });

  // Test case 5: Duplicate numbers can be used
  test('should return correct indices when duplicate numbers exist', () => {
    const arr = [3, 3];
    const target = 6;
    const result = twoSum(arr, target);
    expect(result).toEqual([0, 1]); // 3 + 3 = 6
  });

  // Test case 6: Large numbers
  test('should handle large numbers correctly', () => {
    const arr = [1000000000, 2000000000, 3000000000];
    const target = 5000000000;
    const result = twoSum(arr, target);
    expect(result).toEqual([1, 2]); // 2000000000 + 3000000000 = 5000000000
  });

  // Test case 7: Negative numbers
  test('should handle negative numbers correctly', () => {
    const arr = [-1, -2, -3, -4, -5];
    const target = -8;
    const result = twoSum(arr, target);
    expect(result).toEqual([2, 4]); // -3 + -5 = -8
  });

  // Test case 8: Mixed positive and negative numbers
  test('should handle mixed positive and negative numbers', () => {
    const arr = [-1, 2, -3, 4, -5];
    const target = -6;
    const result = twoSum(arr, target);
    expect(result).toEqual([0, 4]); // -1 + -5 = -6
  });

  // Test case 9: Array contains zeros
  test('should handle arrays with zeros', () => {
    const arr = [0, 4, 3, 0];
    const target = 0;
    const result = twoSum(arr, target);
    expect(result).toEqual([0, 3]); // 0 + 0 = 0
  });

  // Test case 10: Invalid input - not an array
  test('should throw a TypeError if input is not an array', () => {
    const arr = 'not an array';
    const target = 5;
    expect(() => twoSum(arr, target)).toThrow(TypeError);
    expect(() => twoSum(arr, target)).toThrow('Input must be an array');
  });

  // Test case 11: Target sum is zero
  test('should return correct indices when target is zero', () => {
    const arr = [1, -1, 2, -2];
    const target = 0;
    const result = twoSum(arr, target);
    expect(result).toEqual([0, 1]); // 1 + -1 = 0
  });

  // Test case 12: Floating-point numbers
  test('should handle floating-point numbers correctly', () => {
    const arr = [1.1, 2.2, 3.3, 4.4];
    const target = 5.5;
    const result = twoSum(arr, target);
    expect(result).toEqual([1, 2]); // 2.2 + 3.3 = 5.5
  });

  // Test case 13: No matching pair but array has duplicate numbers
  test('should return -1 if no matching pair exists, even with duplicate numbers', () => {
    const arr = [1, 1, 1, 1];
    const target = 10;
    const result = twoSum(arr, target);
    expect(result).toBe(-1);
  });
});
