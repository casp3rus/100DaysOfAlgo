// Solution
// O(n) time / O(n) space

const invertBinaryTree = (tree) => {
  const queue = [tree];
  while (queue.length) {
    const currentNode = queue.shift();
    if (currentNode === null) continue;
    swapLeftAndRight(currentNode);
    queue.push(currentNode.left);
    queue.push(currentNode.right);
  }
};

const swapLeftAndRight = (tree) => {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
};

// Solution 2 - recursion
// O(n) time / O(d) space
// d - depth of binary tree

const invertBinaryTree = (tree) => {
  if (tree === null) return;
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
};

const swapLeftAndRight = (tree) => {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
};

// This is the class of the input binary tree.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
