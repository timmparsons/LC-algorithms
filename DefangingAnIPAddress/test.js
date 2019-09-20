const defangIPaddr = require('./index.js')

test('defFangIPaddrr should equal "1[.]1[.]1[.]1"', () => {
  expect(defangIPaddr("1.1.1.1")).toEqual("1[.]1[.]1[.]1");
});