/* Given an array of integers A sorted in non-decreasing order, 
return an array of the squares of each number, also in sorted non-decreasing order. */

function sortedSquares(A) {
  let array = []
  for(let num of A) {
    array.push(num * num)
  }
  return array.sort((a,b) => a - b)
}

module.exports = sortedSquares;