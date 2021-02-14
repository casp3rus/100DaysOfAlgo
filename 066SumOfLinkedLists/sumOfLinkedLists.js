// Solution
// O(n) time / O(n) space
// n - length of the longest linked list

// This is the input class

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const sumOfLinkedLists = (linkedListOne, linkedListTwo) => {
  const newLinkedListPointer = new LinkedList(0);
  let currentNode = newLinkedListPointer;
  let carry = 0;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;

  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    const valueOne = nodeOne !== null ? nodeOne.value : 0;
    const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
    const sumOfValues = valueOne + valueTwo + carry;

    const nextValue = sumOfValues % 10;
    const newNode = new LinkedList(nextValue);
    currentNode.next = newNode;
    currentNode = newNode;

    carry = Math.floor(sumOfValues / 10);
    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
  }
  return newLinkedListPointer.next;
};
