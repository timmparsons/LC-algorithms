//Given a non-empty, singly linked list with head node head, return a middle node of 
//linked list. If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = middleNode;