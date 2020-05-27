function findOddNumbers(arr) {
  let result = [];

  function helper(helperArray) {
    if(helperArray.length === 0) return;

    if(helperArray[0] % 2 !== 0) {
      result.push(helperArray[0])
    }
    helper(helperArray.slice(1))
  }
  helper(arr);
  return result;
}

module.exports = findOddNumbers;