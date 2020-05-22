const areThereDuplicates = require('./index.js')

test('areThereDuplicates should equal false', () => {
  expect(areThereDuplicates(1,2,3)).toEqual(false);
});

test('areThereDuplicates should equal false', () => {
  expect(areThereDuplicates()).toEqual(false);
});

test('areThereDuplicates should equal true', () => {
  expect(areThereDuplicates(1,2,2,3)).toEqual(true);
});

test('areThereDuplicates should equal true', () => {
  expect(areThereDuplicates("a","b","b","c")).toEqual(true);
});