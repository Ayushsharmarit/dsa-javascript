const { findMinForLoop, findMinReduce } = require("../../src/arrays/smallestElement");

describe("findMinForLoop", () => {
  test("should return the minimum element in a non-empty array", () => {
    expect(findMinForLoop([3, 1, 4, 1, 5, 9, -2, 6, 5])).toBe(-2);
    expect(findMinForLoop([10, 20, 30, 5, 40])).toBe(5);
  });

  test("should return null for an empty array", () => {
    expect(findMinForLoop([])).toBeNull();
  });

  test("should handle arrays with a single element", () => {
    expect(findMinForLoop([7])).toBe(7);
  });

  test("should handle arrays with negative numbers", () => {
    expect(findMinForLoop([-1, -5, -3, -10, 0])).toBe(-10);
  });
});

describe("findMinReduce", () => {
  test("should return the minimum element in a non-empty array", () => {
    expect(findMinReduce([3, 1, 4, 1, 5, 9, -2, 6, 5])).toBe(-2);
    expect(findMinReduce([10, 20, 30, 5, 40])).toBe(5);
  });

  test("should return null for an empty array", () => {
    expect(findMinReduce([])).toBeNull();
  });

  test("should handle arrays with a single element", () => {
    expect(findMinReduce([7])).toBe(7);
  });

  test("should handle arrays with negative numbers", () => {
    expect(findMinReduce([-1, -5, -3, -10, 0])).toBe(-10);
  });
});
