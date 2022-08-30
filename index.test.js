const { cToF } = require('./index');

console.log(cToF)
test('test A', () => {
    expect(cToF(30)).not.toBeUndefined()
    expect(cToF(30)).toBe(86);
    expect(cToF(5)).toBe(30);
})