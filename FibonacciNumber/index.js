/*The Fibonacci numbers, commonly denoted F(n) form a sequence, 
called the Fibonacci sequence, such that each number is the sum of 
the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).*/


var fib = function(N) {
  let result = [0,1]

  for(let i = 2; i <= N; i++) {
    result.push(result[i - 1] + result[i - 2])
  }
  return result;
}

module.exports = fib;