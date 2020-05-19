const anagram = require('./index.js')

test('anagram should equal true', () => {
  expect(anagram("car", "rac")).toEqual(true);
});

test('anagram should equal true', () => {
  expect(anagram("cinema", "iceman")).toEqual(true);
});

test('anagram should equal false', () => {
  expect(anagram("aaacg", "aacg")).toEqual(false);
});

test('anagram should equal false', () => {
  expect(anagram("aaacg", "aabcg")).toEqual(false);
});