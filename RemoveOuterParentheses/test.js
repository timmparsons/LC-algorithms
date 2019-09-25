const RemoveOuterParenthesis = require('./index.js')

test('RemoveOuterParenthesis should equal "()()()"', () => {
  expect(RemoveOuterParenthesis("(()())(())")).toEqual("()()()");
});

test('RemoveOuterParenthesis should equal "()()()()(())"', () => {
  expect(RemoveOuterParenthesis("(()())(())(()(()))")).toEqual("()()()()(())");
});

test('RemoveOuterParenthesis should equal ""', () => {
  expect(RemoveOuterParenthesis("()()")).toEqual("");
});