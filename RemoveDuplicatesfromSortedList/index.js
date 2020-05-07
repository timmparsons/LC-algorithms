//Given a sorted linked list, delete all duplicates such that each element appear only once.

function removeDups(head) {
  let current = head;

  while(current.val !== null && current.next !== null) {
    if(current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next
    }
  }
  return head;
}