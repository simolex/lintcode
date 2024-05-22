const solution = require(".");

describe("3361. Missing Element in Sorted Array", () => {
    test("test-1", () => {
        const result = solution([1, 3, 5, 7, 9], 1);
        expect(result).toBe(2);
    });
    test("test-2", () => {
        const result = solution([1, 3, 5, 7, 9], 4);
        expect(result).toBe(8);
    });
    test("test-3", () => {
        const result = solution([2, 3, 4, 5, 7], 4);
        expect(result).toBe(10);
    });
});
