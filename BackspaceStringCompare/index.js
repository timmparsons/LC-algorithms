//Given two strings S and T, return if they are equal when both are 
//typed into empty text editors. # means a backspace character.
//Note that after backspacing an empty text, the text will continue empty.

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    
  
  let process = (string) => {
    //create empty array for result
    let result = [];
    //split each item in string loop through each one
    for(let item of S.split('')) {
      //if we find a #, the last item from the array is removed, otherwise push the item into the array
      item === '#' ? result.pop() : result.push(item);
    }
    return result.join('');
  }

  return process(S) == process(T)
};

module.exports = backspaceCompare;
