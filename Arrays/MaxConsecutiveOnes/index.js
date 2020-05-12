//Given a binary array, find the maximum number of consecutive 1s in this array.


function maxConsecutive(nums) {
  let max = 0;
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if(count > max) {
      max = count;
    }
  }
  return max;
}

module.exports = maxConsecutive;