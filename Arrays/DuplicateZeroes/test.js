const duplicateZeros = require('./index.js')

test('duplicateZeros should equal [1,0,0,2,3,0,0,4]', () => {
  expect(duplicateZeros([1,0,2,3,0,4,5,0])).toEqual([1,0,0,2,3,0,0,4]);
});

test('duplicateZeros should equal [1,2,3]', () => {
  expect(duplicateZeros([1,2,3])).toEqual([1,2,3]);
});
