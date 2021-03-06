// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution 1
// O(n) time / O(n) space
// n - number of nodes in the tree

const findKthLargestValueInBST = (tree, k) => {
  const sortedNodeValues = [];
  inOrderTraverse(tree, sortedNodeValues);
  return sortedNodeValues[sortedNodeValues.length - k];
};

const inOrderTraverse = (node, sortedNodeValues) => {
  if (node === null) return;

  inOrderTraverse(node.left, sortedNodeValues);
  sortedNodeValues.push(node.value);
  inOrderTraverse(node.right, sortedNodeValues);
};

// Solution 2
// O(n) time / O(1) space
// n - number of nodes in the tree

class TreeInfo {
  constructor(numberOfNodesVisited, latestVisitedNodeValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}

const findKthLargestValueInBST = (tree, k) => {
  const treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.latestVisitedNodeValue;
};

const reverseInOrderTraverse = (node, k, treeInfo) => {
  if (node === null || treeInfo.numberOfNodesVisited >= k) return;

  reverseInOrderTraverse(node.right, k, treeInfo);
  if (treeInfo.numberOfNodesVisited < k) {
    treeInfo.numberOfNodesVisited++;
    treeInfo.latestVisitedNodeValue = node.value;
    reverseInOrderTraverse(node.left, k, treeInfo);
  }
};
