const subtractProductAndSum = require('./index.js')

test('subtractProductAndSum should equal 15', () => {
  expect(subtractProductAndSum(234)).toEqual(15);
});

test('subtractProductAndSum should equal 21', () => {
  expect(subtractProductAndSum(4421)).toEqual(21);
});