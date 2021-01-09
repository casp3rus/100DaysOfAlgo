// Solution
// O(nlog(n)) time / O(n) space

const minHeightBST = (array) => {
    return constructMinHeightBST(array, null, 0, array.length - 1)
};

const constructMinHeightBST = (array, bst, startIdx, endIdx) => {
    if (startIdx > endIdx) return
    const midIdx = Math.floor((startIdx + endIdx) / 2)
    const valueToAdd = array[midIdx]
    if (bst === null) {
        bst = new BST(valueToAdd)
    } else {
        bst.insert(valueToAdd)
    }
    constructMinHeightBST(array, bst, startIdx, midIdx - 1)
    constructMinHeightBST(array, bst, midIdx + 1, endIdx)
    return bst
}

// Solution
// O() time / O() space

const minHeightBST = (array) => {
    return constructMinHeightBST(array, null, 0, array.length - 1)
};

const constructMinHeightBST = (array, bst, startIdx, endIdx) => {
    if (startIdx > endIdx) return
    const midIdx = Math.floor((startIdx + endIdx) / 2)
    const newBstNode = new BST(array[midIdx])
    if (bst === null) {
        bst = newBstNode
    } else {
        if (array[midIdx] < bst.value) {
            bst.left = newBstNode
            bst = bst.left
        } else {
            bst.right = newBstNode
            bst = bst.right
        }
    }
    constructMinHeightBST(array, bst, startIdx, midIdx - 1)
    constructMinHeightBST(array, bst, midIdx + 1, endIdx)
    return bst
}

// Solution
// O() time / O() space

const minHeightBST = (array) => {
    return constructMinHeightBST(array, 0, array.length - 1)
};

const constructMinHeightBST = (array, startIdx, endIdx) => {
    if (startIdx > endIdx) return null
    const midIdx = Math.floor((startIdx + endIdx) / 2)
    const bst = new BST(array[midIdx])
    bst.left = constructMinHeightBST(array, startIdx, midIdx - 1)
    bst.right = constructMinHeightBST(array, midIdx + 1, endIdx)
    return bst
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
