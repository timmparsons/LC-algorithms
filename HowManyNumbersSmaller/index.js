//Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
//That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
//return the answer in an array.

var smallerNumbersThanCurrent = function(nums) {
  //sort array and use spread operator so it doesn't alter original array
  let sortedArray = [...nums].sort((a,b) => a - b)
  let result = [];

  for(num in nums) {
    //check if num in nums array can be found in sortedArray. The result will be the index of the item and how how many are less than index
    let index = sortedArray.indexOf(num)
    result.push(index);
  }
  return result;
}

module.exports = smallerNumbersThanCurrent;