const uncommonFromSentences = require('./index.js')

test('uncommonFromSentences should equal ["sweet","sour"]', () => {
  expect(uncommonFromSentences("this apple is sweet", "this apple is sour")).toEqual(["sweet","sour"]);
});

test('uncommonFromSentences should equal ["banana"]', () => {
  expect(uncommonFromSentences("apple apple","banana" )).toEqual(["banana"]);
});
