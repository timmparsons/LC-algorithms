const middleNode = require('./index.js')

test('middleNode should equal [3,4,5]', () => {
  expect(middleNode([1,2,3,4,5])).toEqual([3]);
});

test('middleNode should equal [1,2,3,4,5,6]', () => {
  expect(middleNode([1,2,3,4,5,6])).toEqual([4]);
});
