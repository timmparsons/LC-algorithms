const isPalindrome = require('./index.js')

test('isPalindrome should equal "A man, a plan, a canal: Panama"', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
});

test('isPalindrome should equal "race a car"', () => {
  expect(isPalindrome("race a car")).toEqual(false);
});
