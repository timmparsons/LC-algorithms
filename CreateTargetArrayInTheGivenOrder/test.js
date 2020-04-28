const createTargetArray = require('./index.js')

test('createTargetArray should equal "[0,4,1,3,2]"', () => {
  expect(createTargetArray([0,1,2,3,4], [0,1,2,2,1])).toEqual([0,4,1,3,2]);
});