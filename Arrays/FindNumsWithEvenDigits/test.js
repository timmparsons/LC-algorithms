const findNumbers = require('./index.js')

test('findNumbers should equal 2', () => {
  expect(findNumbers([12,345,2,6,7896])).toEqual(2);
});

test('findNumbers should equal 1', () => {
  expect(findNumbers([555,901,482,1771])).toEqual(1);
});

test('findNumbers should equal 1', () => {
  expect(findNumbers([34637,26353,35262738,2])).toEqual(1);
});