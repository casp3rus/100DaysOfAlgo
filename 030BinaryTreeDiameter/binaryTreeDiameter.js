// Solution
// O(n) time / O(n) space

const binaryTreeDiameter = (tree) => {
  return getTreeInfo(tree.diameter);
};

const getTreeInfo = (tree) => {
  if (tree === null) {
    return new TreeInfo(0, 0);
  }
  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
};

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

// This is an input class.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
