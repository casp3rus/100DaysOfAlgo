// Solution
// O(n) time / O(d) space
// d - depth of the tree

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const validateBST = (tree) => {
  return validateBSTHelper(tree, -Infinity, Infinity);
};

const validateBSTHelper = (tree, minValue, maxValue) => {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBSTHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBSTHelper(tree.right, tree.value, maxValue);
};
