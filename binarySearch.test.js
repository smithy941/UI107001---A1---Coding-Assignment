const { binarySearch } = require('./algorithms');

test("Finds item in array", () =>
{
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
});

test("Returns -1 if not found", () =>
{
    expect(binarySearch([1, 2, 3], 4)).toBe(-1);
});

test("Handles empty array", () =>
{
    expect(binarySearch([], 1)).toBe(-1);
});

test("Handles single item array", () =>
{
    expect(binarySearch([1], 1)).toBe(0);
});

test("Finds first item", () =>
{
    expect(binarySearch([1, 2, 3], 1)).toBe(0);
});

test("Finds last item", () =>
{
    expect(binarySearch([1, 2, 3], 3)).toBe(2);
});