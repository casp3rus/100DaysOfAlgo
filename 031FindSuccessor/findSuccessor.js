// Solution
// O(n) time / O(n) space

const findSuccessor = (tree, node) => {
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);

  for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
    const currentNode = inOrderTraversalOrder[idx];
    if (currentNode !== node) continue;

    if (idx === inOrderTraversalOrder.length - 1) return null;

    return inOrderTraversalOrder[idx + 1];
  }
};

const getInOrderTraversalOrder = (node, order = []) => {
  if (node === null) return order;

  getInOrderTraversalOrder(node.left, order);
  order.push(node);
  getInOrderTraversalOrder(node.right, order);

  return order;
};

// Solution
// O(h) time / O(1) space
// h - height of the tree

const findSuccessor = (tree, node) => {
  if (node.right != null) return getLeftmostChild(node.right)

  return getRightmostParent(node)
};

const getLeftmostChild = (node) => {
    let currentNode = node

    while (currentNode.left !== null) {
        currentNode = currentNode.left
    }

    return currentNode
}

const getRightmostParent = (node) => {
    let currentNode = node

    while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
        currentNode = currentNode.parent    
    }

    return currentNode.parent
}

// This is the Binary Tree input class.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
