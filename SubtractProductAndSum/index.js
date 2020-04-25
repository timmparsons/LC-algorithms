//Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;

  for(let num of n.toString().split('')) {
    product *= Number(num);
    sum += Number(num)
  }
  return product - sum;
}

module.exports = subtractProductAndSum;