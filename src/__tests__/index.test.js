const math = require('./math')
test('two plus two is four', () => {
    expect(math(2, 2)).toBe(4);
});
