function areThereDuplicates() {
  let lookup = {};

  for(let item of arguments) {
    lookup[arguments[item]] = (lookup[arguments[item]] || 0) + 1
  }
  for(let key in lookup) {
    if(lookup[key] > 1) {return true};
  }
  return false;
}

module.exports = areThereDuplicates;