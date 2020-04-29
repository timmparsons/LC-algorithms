/*We are given two sentences A and B.  (A sentence is a string of space separated words.  
Each word consists only of lowercase letters.)A word is uncommon if it appears exactly once 
in one of the sentences, and does not appear in the other sentence.
Return a list of all uncommon words. 
You may return the list in any order. */

var uncommonFromSentences = function(A, B) {
  let result ={};
  let newA = A.split(' ');
  let newB = B.split(' ');
  let newArray = [...newA, ...newB]
  
  newArray.forEach(item => {
    result[item] = (result[item] || 0) + 1
  })
  return Object.keys(result).filter(item => result[item] < 2)
}


module.exports = uncommonFromSentences;