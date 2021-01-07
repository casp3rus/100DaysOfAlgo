// Solution 1

// O(n) time / O(n) space

const inOrderTraverse = (tree, array) => {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
};

// O(n) time / O(n) space

const preOrderTraverse = (tree, array) => {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
};

// O(n) time / O(n) space

const postOrderTraverse = (tree, array) => {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
};
