const LinkedList = require('./linkedList');

test("Insert and search works", () =>
{
    const list = new LinkedList();

    list.insert(10);
    list.insert(20);

    expect(list.search(10)).toBe(true);
    expect(list.search(20)).toBe(true);
});

test("Delete works", () =>
{
    const list = new LinkedList();

    list.insert(10);
    list.insert(20);

    list.delete(10);

    expect(list.search(10)).toBe(false);
});

test("Handles empty list", () =>
{
    const list = new LinkedList();

    expect(list.search(30)).toBe(false);
});