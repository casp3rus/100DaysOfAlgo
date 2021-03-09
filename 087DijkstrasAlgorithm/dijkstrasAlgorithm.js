// Solution 1
// O(v^2 + e) time / O(v) space
// v - number of vertices
// e - number of edges

const dijkstrasAlgorithm = (start, edges) => {
  const numberOfVertices = edges.length;

  const minDistances = [];
  for (let i = 0; i < numberOfVertices; i++) {
    minDistances.push(Infinity);
  }
  minDistances[start] = 0;

  const visited = new Set();

  while (visited.size != numberOfVertices) {
    const [vertex, currentMinDistance] = getVertexWithMinDistance(
      minDistances,
      visited
    );

    if (currentMinDistance === Infinity) break;

    visited.add(vertex);

    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;

      if (visited.has(destination)) continue;

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }
  return minDistances.map((x) => (x === Infinity ? -1 : x));
};

const getVertexWithMinDistance = (distances, visited) => {
  let currentMinDistance = Infinity;
  let vertex = -1;

  for (const [vertexIdx, distance] of distances.entries()) {
    if (visited.has(vertexIdx)) continue;

    if (distance <= currentMinDistance) {
      vertex = vertexIdx;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
};

// Solution 2
// O((v + e) * log(v)) time / O(v) space
// v - number of vertices
// e - number of edges

const dijkstrasAlgorithm = (start, edges) => {
  const numberOfVertices = edges.length;

  const minDistances = [];
  const initialDistances = [];
  for (let i = 0; i < numberOfVertices; i++) {
    minDistances.push(Infinity);
    initialDistances.push([i, Infinity]);
  }
  minDistances[start] = 0;

  const minDistancesHeap = new MinHeap(initialDistances);
  minDistancesHeap.update(start, 0);

  while (!minDistancesHeap.isEmpty()) {
    const [vertex, currentMinDistance] = minDistancesHeap.remove();

    if (currentMinDistance === Infinity) break;

    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
        minDistancesHeap.update(destination, newPathDistance);
      }
    }
  }
  return minDistances.map((x) => (x === Infinity ? -1 : x));
};

class MinHeap {
  constructor(array) {
    this.vertexMap = array.reduce((obj, _, i) => {
      obj[i] = i;
      return obj;
    }, {});
    this.heap = this.buildHeap(array);
  }

  isEmpty() {
    return this.heap.length == 0;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; (currentIdx += 0); currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;

      if (childTwoIdx !== -1 && heap[childTwoIdx][1] < heap[childOneIdx][1]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap][1] < heap[currentIdx][1]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  remove() {
    if (this.isEmpty()) return;

    this.swap(0, this.heap.length - 1, this.heap);
    const [vertex, distance] = this.heap.pop();
    delete this.vertexMap[vertex];
    this.siftDown(0, this.heap.length - 1, this.heap);
    return [vertex, distance];
  }

  swap(i, j, heap) {
    this.vertexMap[heap[i][0]] = j;
    this.vertexMap[heap[j][0]] = i;
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }

  update(vertex, value) {
    this.heap[this.vertexMap[vertex]] = [vertex, value];
    this.siftUp(this.vertexMap[vertex], this.heap);
  }
}
