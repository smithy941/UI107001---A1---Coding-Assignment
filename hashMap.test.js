const HashMap = require('./hashMap');

test("Insert and search works", () =>
{
    const map = new HashMap();

    map.insert("studentId", 12345);
    map.insert("course", "Applied Software Development");
    map.insert("grade", "A");

    expect(map.search("studentId")).toBe(12345);
    expect(map.search("course")).toBe("Applied Software Development");
    expect(map.search("grade")).toBe("A");
});

test("Delete works", () =>
{
    const map = new HashMap();

    map.insert("studentId", 12345);
    map.delete("studentId");

    expect(map.search("studentId")).toBe(null);
});

test("Handles missing data", () =>
{
    const map = new HashMap();

    expect(map.search("tutor")).toBe(null);
});

test("Handles collisions", () =>
{
    const map = new HashMap();

    map.insert("grade", "A");
    map.insert("level", "First Year");

    expect(map.search("grade")).toBe("A");
    expect(map.search("level")).toBe("First Year");
});