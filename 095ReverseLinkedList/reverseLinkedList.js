// This is an input class.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Solution
// O(n) time / O(1) space

const reverseLinkedList = (head) => {
  let p1 = null;
  let p2 = head;
  while (p2 !== null) {
    const p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
  return p1;
};
