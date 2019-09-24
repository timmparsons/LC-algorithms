
/*Given the root node of a binary search tree, return the sum of values of all nodes with value 
between L and R (inclusive). The binary search tree is guaranteed to have unique values. */

var rangeSumBST = function(root, L, R) {
  if (root.val === null || L === null || R === null) return 0
  
  let sum = 0
  
  checkNext = (node) => {
      if (node.val === null) return 
      if (node.val >= L && node.val <= R) sum += node.val 
      
      if (node.right) checkNext(node.right)
      
      if (node.left) checkNext(node.left)
  }
  
  checkNext(root)
  
  return sum
};

module.exports = rangeSumBST;