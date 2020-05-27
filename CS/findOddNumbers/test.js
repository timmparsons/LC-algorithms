const findOdd = require('./index.js')

test('findOdd should equal 1,3,5,7', () => {
  expect(findOdd([1,2,3,4,5,6,7,8])).toEqual([1,3,5,7]);
});

test('findOdd should equal 5', () => {
  expect(findOdd([2,2,2,5,6,6,8])).toEqual([5]);
});
