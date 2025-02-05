const { union, unionWithForEach, unionWithUniqueElements } = require('../../src/arrays/unionOfArrays'); // Replace with actual file name


describe("Union Functions", () => {
    test("union should return all elements including duplicates", () => {
        expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 3, 4, 5]);
        expect(union([1, 2], [2, 3, 4])).toEqual([1, 2, 2, 3, 4]);
    });

    test("unionWithUniqueElements should return unique elements in the union", () => {
        expect(unionWithUniqueElements([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        expect(unionWithUniqueElements([1, 2], [2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(unionWithUniqueElements([1, 1], [1, 2, 3])).toEqual([1, 2, 3]);
    });


    test("unionWithForEach should handle empty arrays", () => {
        expect(unionWithForEach([], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(unionWithForEach([1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(unionWithForEach([], [])).toEqual([]);
    });
});
