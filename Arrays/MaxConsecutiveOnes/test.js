const maxConsecutive = require('./index.js')

test('maxConsecutive should equal 3', () => {
  expect(maxConsecutive([1,1,0,1,1,1])).toEqual(3);
});

test('maxConsecutive should equal 2', () => {
  expect(maxConsecutive([1,0,1,1,0,1])).toEqual(2);
});