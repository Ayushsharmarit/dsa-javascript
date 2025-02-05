
const { rotate, rotateSlice } = require("../../src/arrays/rotateArrayByK"); // Replace with the actual filename

describe("rotate function", () => {
  test("rotates the array by 1 position", () => {
    expect(rotate([1, 2, 3, 4, 5, 6], 1)).toEqual([6, 1, 2, 3, 4, 5]);
  });

  test("rotates the array by 2 positions", () => {
    expect(rotate([1, 2, 3, 4, 5, 6], 2)).toEqual([5, 6, 1, 2, 3, 4]);
  });

  test("rotates the array by its length (should remain same)", () => {
    expect(rotate([1, 2, 3, 4, 5, 6], 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("rotates the array by more than its length (mod check)", () => {
    expect(rotate([1, 2, 3, 4, 5, 6], 8)).toEqual([5, 6, 1, 2, 3, 4]);
  });

  test("rotates an array of size 1 (should remain same)", () => {
    expect(rotate([42], 3)).toEqual([42]);
  });

  test("rotates an empty array (should remain same)", () => {
    expect(rotate([], 2)).toEqual([]);
  });
});


describe("rotateSlice function", () => {
  test("rotates the array by 1 position", () => {
    expect(rotateSlice([1, 2, 3, 4, 5, 6], 1)).toEqual([6, 1, 2, 3, 4, 5]);
  });

  test("rotates the array by 2 positions", () => {
    expect(rotateSlice([1, 2, 3, 4, 5, 6], 2)).toEqual([5, 6, 1, 2, 3, 4]);
  });

  test("rotates the array by its length (should remain same)", () => {
    expect(rotateSlice([1, 2, 3, 4, 5, 6], 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("rotates the array by more than its length (mod check)", () => {
    expect(rotateSlice([1, 2, 3, 4, 5, 6], 8)).toEqual([5, 6, 1, 2, 3, 4]);
  });

  test("rotates an array of size 1 (should remain same)", () => {
    expect(rotateSlice([42], 3)).toEqual([42]);
  });

  test("rotates an empty array (should remain same)", () => {
    expect(rotateSlice([], 2)).toEqual([]);
  });
});
