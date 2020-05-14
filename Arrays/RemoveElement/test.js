const removeElement = require('./index.js')

test('removeElement nums = [3,2,2,3], val = 3 should equal 2', () => {
  expect(removeElement([3,2,2,3], 3)).toEqual(2);
});

test('removeElement nums = [0,1,2,2,3,0,4,2], val = 2 should equal 5', () => {
  expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5);
});
