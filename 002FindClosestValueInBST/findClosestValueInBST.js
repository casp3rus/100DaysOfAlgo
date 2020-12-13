// Solution 1 - recursion

// Average: O(log(n)) time / O(log(n)) space
// Worst: O(n) time / O(n) space

const findClosestValueInBST1 = (tree, target) => {
  return findClosestValueInBSTHelper1(tree, target, tree.value);
};

const findClosestValueInBSTHelper1 = (tree, target, closest) => {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBSTHelper1(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBSTHelper1(tree.right, target, closest);
  } else {
    return closest;
  }
};

// Solution 2 - iteration

// Average: O(log(n)) time / O(1) space
// Worst: O(n) time / O(1) space

const findClosestValueInBST2 = (tree, target) => {
  return findClosestValueInBSTHelper2(tree, target, tree.value);
};

const findClosestValueInBSTHelper2 = (tree, target, closest) => {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
};
