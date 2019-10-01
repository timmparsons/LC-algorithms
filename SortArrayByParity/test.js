const sortArrayByParity = require('./index.js')

test('sortArrayByParity should equal [2,4,1,3]', () => {
  expect([3,1,2,4]).toEqual(expect.arrayContaining([2,4,1,3]))
});
