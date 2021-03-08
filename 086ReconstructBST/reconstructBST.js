// Input class.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Solution 1
// O(n^2) time / O(n) space
// n - number of nodes / length of preOrderTraversalValues array.

const reconstructBST = (preOrderTraversalValues) => {
  if (preOrderTraversalValues.length === 0) return null;

  const currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;

  for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
    const value = preOrderTraversalValues[idx];
    if (value >= currentValue) {
      rightSubtreeRootIdx = idx;
      break;
    }
  }
  const leftSubtree = reconstructBST(
    preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
  );
  const rightSubtree = reconstructBST(
    preOrderTraversalValues.slice(rightSubtreeRootIdx)
  );
  return new BST(currentValue, leftSubtree, rightSubtree);
};

// Solution 2
// O(n) time / O(n) space
// n - number of nodes / length of preOrderTraversalValues array.

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

const reconstructBst = (preOrderTraversalValues) => {
  const treeInfo = new TreeInfo(0);
  return reconstructBSTFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
};

const reconstructBSTFromRange = (
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubtreeInfo
) => {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length)
    return null;

  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubtreeInfo.rootIdx++;
  const leftSubtree = reconstructBSTFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  const rightSubtree = reconstructBSTFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  return new BST(rootValue, leftSubtree, rightSubtree);
};
