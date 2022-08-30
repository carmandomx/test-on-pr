const { cToF } = require('./index');

test('test A', () => {
    expect(cToF(30)).toBe(86);
    expect(cToF(5)).toBe(41);
})