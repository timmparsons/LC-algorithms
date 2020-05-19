const sumZero = require('./index.js')

test('sumZero should equal -3, 3', () => {
  expect(sumZero([-5,-4,-3,0,3,10])).toEqual([-3,3]);
});


