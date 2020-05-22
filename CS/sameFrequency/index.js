
function sameFrequency(num1, num2){
  let newNum1 = num1.toString().split('').sort().join('');
  let newNum2 = num2.toString().split('').sort().join('');
  console.log(newNum1, newNum2)
  if(newNum1.length !== newNum2.length) return false;
  if(newNum1 !== newNum2) {
    return false;
  } else return true 
}

module.exports = sameFrequency;