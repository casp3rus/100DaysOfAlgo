// This is the input class

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution 1
// O(n) time / O(n) space

const findNodesAtDistanceK = (tree, target, k) => {
  const nodesToParents = {};
  populateNodesToParents(tree, nodesToParents);
  const targetNode = getNodeFromValue(target, tree, nodesToParents);

  return breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k);
};

const breadthFirstSearchForNodesDistanceK = (targetNode, nodesToParents, k) => {
  const queue = [[targetNode, 0]];
  const seen = new Set([targetNode.value]);
  while (queue.length > 0) {
    const [currentNode, distanceFromTarget] = queue.shift();

    if (distanceFromTarget === k) {
      const nodesDistanceK = queue.map((pair) => pair[0].value);
      nodesDistanceK.push(currentNode.value);
      return nodesDistanceK;
    }

    const connectedNodes = [
      currentNode.left,
      currentNode.right,
      nodesToParents[currentNode.value]
    ];
    for (const node of connectedNodes) {
      if (node === null) continue;

      if (seen.has(node.value)) continue;

      seen.add(node.value);
      queue.push([node, distanceFromTarget + 1]);
    }
  }
  return [];
};

const getNodeFromValue = (value, tree, nodesToParents) => {
  if (tree.value === value) return tree;

  const nodeParent = nodesToParents[value];
  if (nodeParent.left !== null && nodeParent.left.value === value)
    return nodeParent.left;

  return nodeParent.right;
};

const populateNodesToParents = (node, nodesToParents, parent = null) => {
  if (node !== null) {
    nodesToParents[node.value] = parent;
    populateNodesToParents(node.left, nodesToParents, node);
    populateNodesToParents(node.right, nodesToParents, node);
  }
};

// Solution 2
// O(n) time / O(n) space

const findNodesDistanceK = (tree, target, k) => {
  const nodesAtDistanceK = [];
  findDistanceFromNodeToTarget(tree, target, k, nodesAtDistanceK);
  return nodesAtDistanceK;
};

const findDistanceFromNodeToTarget = (node, target, k, nodesAtDistanceK) => {
  if (node === null) return -1;

  if (node.value === target) {
    addSubtreeNodeAtDistanceK(node, 0, k, nodesAtDistanceK);
    return 1;
  }

  const leftDistance = findDistanceFromNodeToTarget(
    node.left,
    target,
    k,
    nodesAtDistanceK
  );
  const rightDistance = findDistanceFromNodeToTarget(
    node.right,
    target,
    k,
    nodesAtDistanceK
  );

  if (leftDistance === k || rightDistance === k)
    nodesAtDistanceK.push(node.value);

  if (leftDistance !== -1) {
    addSubtreeNodeAtDistanceK(
      node.right,
      leftDistance + 1,
      k,
      nodesAtDistanceK
    );
    return leftDistance + 1;
  }

  if (rightDistance !== -1) {
    addSubtreeNodeAtDistanceK(
      node.left,
      rightDistance + 1,
      k,
      nodesAtDistanceK
    );
    return rightDistance + 1;
  }

  return -1;
};

const addSubtreeNodeAtDistanceK = (node, distance, k, nodesAtDistanceK) => {
  if (node === null) return;

  if (distance === k) nodesAtDistanceK.push(node.value);
  else {
    addSubtreeNodeAtDistanceK(node.left, distance + 1, k, nodesAtDistanceK);
    addSubtreeNodeAtDistanceK(node.right, distance + 1, k, nodesAtDistanceK);
  }
};
