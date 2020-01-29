//Reverse a singly linked list.

var reverse = function(head) {
  let current = head;
  let prev = null;
  let next = null;

  while(current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}