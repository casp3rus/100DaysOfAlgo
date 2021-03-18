// This is an input class
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Solution 1
// O(n + m) time / O(n + m) space
// n - length of first linked list
// m - length of the second linked list

const mergeLinkedLists = (headOne, headTwo) => {
  let p1 = headOne;
  let p1Prev = null;
  let p2 = headTwo;

  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1Prev !== null) {
        p1Prev.next = p2;
      }
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }
  if (p1 === null) {
    p1Prev.next = p2;
  }
  return headOne.value < headTwo.value ? headOne : headTwo;
};

// Solution 2
// O(n + m) time / O(n + m) space
// n - length of first linked list
// m - length of the second linked list

const mergeLinkedLists = (headOne, headTwo) => {
  recursiveMerge(headOne, headTwo, null);
  return headOne.value < headTwo.value ? headOne : headTwo;
};

const recursiveMerge = (p1, p2, p1Prev) => {
  if (p1 === null) {
    p1Prev.next = p2;
    return;
  }
  if (p2 === null) return;

  if (p1.value < p2.value) {
    recursiveMerge(p1.next, p2, p1);
  } else {
    if (p1Prev !== null) p1Prev.next = p2;
    let newP2 = p2.next;
    p2.next = p1;
    recursiveMerge(p1, newP2, p2);
  }
};
