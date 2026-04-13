const { mergeSort } = require('./algorithms');

test("Sorts array correctly", () =>
{
    expect(mergeSort([3, 1, 2])).toEqual([1, 2, 3]);
});

test("Handles empty array", () =>
{
    expect(mergeSort([])).toEqual([]);
});

test("Handles duplicates", () =>
{
    expect(mergeSort([4, 2, 4, 1])).toEqual([1, 2, 4, 4]);
});

test("Handles sorted array", () =>
{
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
});