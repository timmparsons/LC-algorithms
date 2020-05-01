//Given a string, determine if it is a palindrome, considering only 
//alphanumeric characters and ignoring cases.

var isPalindrome = function(s) {
  let newString = s.replace(/[^A-Z0-9]/ig, "").toLowerCase();
 if(newString == newString.split('').reverse().join('')) { 
     return true
 } else return false
};

module.exports = isPalindrome;