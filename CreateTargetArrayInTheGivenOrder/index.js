/*Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.*/

var createTargetArray = function(nums, index) {
  let result = [];

  for(let i = 0; i < nums.length; i++) {
    result.splice(index[i], 0, nums[i])
  }
  return result;
}

module.exports = createTargetArray;