const maxSum = require('./index.js')

test('maxSum should equal 20', () => {
  expect(maxSum([1,2,3,5,7,8,4,5], 3)).toEqual(20);
});

test('maxSum should equal 23', () => {
  expect(maxSum([1,4,6,8,15,3,6], 2)).toEqual(23);
});

test('maxSum should equal False', () => {
  expect(maxSum([1,2], 3)).toEqual(false);
});
