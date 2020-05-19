// Find the first pair of numbers in array that equal zero

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right]
    if(sum == 0) {
      return [arr[left], arr[right]]
    } else if(sum > 0) {
      right--;
    } else {
      left++
    }
  }
}

module.exports = sumZero;