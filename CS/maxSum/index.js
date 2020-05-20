function maxSum(arr, num) {
  let max = 0;
  let temp = 0;
  if(arr.length < num) return false;
  for(let i = 0; i < num; i++) {
    max += arr[i]
  }
  temp = max;
  for(let i = num; i < arr.length; i++) {
    temp = temp - arr[num - 1] + arr[i]
    max = Math.max(max, temp)
  }
  return max;
}

module.exports = maxSum;