const { intersection, intersectionForLoop } = require('../../src/arrays/intersectionOfArrays'); // Update this path accordingly

describe("Intersection of arrays", () => {

    test("Intersection of two arrays with common elements", () => {
        expect(intersection([1, 2, 3, 4], [2, 3, 6, 7])).toEqual([2, 3]);
        expect(intersectionForLoop([1, 2, 3, 4], [2, 3, 6, 7])).toEqual([2, 3]);
    });

    test("Intersection when one array is empty", () => {
        expect(intersection([], [2, 3, 6, 7])).toEqual([]);
        expect(intersectionForLoop([], [2, 3, 6, 7])).toEqual([]);
    });

    test("Intersection when both arrays are empty", () => {
        expect(intersection([], [])).toEqual([]);
        expect(intersectionForLoop([], [])).toEqual([]);
    });

    test("Intersection with no common elements", () => {
        expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
        expect(intersectionForLoop([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    test("Intersection with duplicates in one array", () => {
        expect(intersection([1, 2, 2, 3, 4], [2, 3, 6, 7])).toEqual([2, 3]);
        expect(intersectionForLoop([1, 2, 2, 3, 4], [2, 3, 6, 7])).toEqual([2, 3]);
    });

    test("Intersection with same arrays", () => {
        expect(intersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(intersectionForLoop([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("Intersection when second array has extra elements", () => {
        expect(intersection([1, 2, 3], [1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
        expect(intersectionForLoop([1, 2, 3], [1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
    });

});
