const numJewelsInStones = require('./index.js')

test('numJewelsInStones should equal 3', () => {
  expect(numJewelsInStones("aA", "aAAbbbb")).toEqual(3);
});