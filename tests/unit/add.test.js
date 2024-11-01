// add.test.js
const add = require('./add.js');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});
