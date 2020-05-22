const sameFrequency = require('./index.js')

test('sameFrequency should equal true', () => {
  expect(sameFrequency(182,281)).toEqual(true);
});

test('sameFrequency should equal false', () => {
  expect(sameFrequency(34,14)).toEqual(false);
});

test('sameFrequency should equal true', () => {
  expect(sameFrequency(3589578, 5879385)).toEqual(true);
});

test('sameFrequency should equal false', () => {
  expect(sameFrequency(22, 222)).toEqual(false);
});