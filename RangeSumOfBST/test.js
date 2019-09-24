const rangeSumBST = require('./index.js')

test('rangeSumBST should equal 32', () => {
  expect(rangeSumBST([10,5,15,3,7,null,18], 7, 15)).toEqual(32);
});

test('rangeSumBST should equal 23', () => {
  expect(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10)).toEqual(23);
});