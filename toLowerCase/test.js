const toLowerCase = require('./index.js.js')

test('toLowerCase should equal "hello', () => {
  expect(toLowerCase("Hello")).toEqual("hello");
});

test('toLowerCase should equal "hear', () => {
  expect(toLowerCase("HEar")).toEqual("hear");
});

test('toLowerCase should equal "lovely', () => {
  expect(toLowerCase("LOVELY")).toEqual("lovely");
});