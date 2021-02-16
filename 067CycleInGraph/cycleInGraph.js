// Solution 1
// O(v + e) time / O(v) space
// v - number of vertices
// e - number of edges

const cycleInGraph = (edges) => {
  const numberOfNodes = edges.length;
  const visited = new Array(numberOfNodes).fill(false);
  const currentlyInStack = new Array(numberOfNodes).fill(false);

  for (let node = 0; node < numberOfNodes; node++) {
    if (visited[node]) continue;

    const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
    if (containsCycle) return true;
  }

  return false;
};

const isNodeInCycle = (node, edges, visited, currentlyInStack) => {
  visited[node] = true;
  currentlyInStack[node] = true;

  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      const containsCycle = isNodeInCycle(
        neighbor,
        edges,
        visited,
        currentlyInStack
      );
      if (containsCycle) return true;
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }

  currentlyInStack[node] = false;
  return false;
};

// Solution 2
// O(v + e) time / O(v) space
// v - number of vertices
// e - number of edges

const [WHITE, GREY, BLACK] = [0, 1, 2];

const cycleInGraph = (edges) => {
  const numberOfNodes = edges.length;
  const colors = new Array(numberOfNodes).fill(WHITE);

  for (let node = 0; node < numberOfNodes; node++) {
    if (colors[node] != WHITE) continue;

    const containsCycle = traverseAndColorNodes(node, edges, colors);
    if (containsCycle) return true;
  }

  return false;
};

const traverseAndColorNodes = (node, edges, colors) => {
  colors[node] = GREY;

  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    const neighborColor = colors[neighbor];

    if (neighborColor === GREY) return true;

    if (neighborColor === BLACK) continue;

    const containsCycle = traverseAndColorNodes(neighbor, edges, colors);
    if (containsCycle) return true;
  }

  colors[node] = BLACK;
  return false;
};
