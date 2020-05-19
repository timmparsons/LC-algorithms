function anagram(str1, str2) {
  //if string lengths are different it can't be an anagram
  if(str1.length !== str2.length) {
    return false;
  }
  //create object to hold values of characters in first string
  let lookup = {};
  for(let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  /*loop through second string, if letter can't be found in object from first string values, return false
  or remove one of the current characters. Once characters are down to zero, if there are still values left, 
  the loop will be run again but the letter won't be found in the object */

  for(let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter -= 1]
    }
  }
  return true;
}

module.exports = anagram;