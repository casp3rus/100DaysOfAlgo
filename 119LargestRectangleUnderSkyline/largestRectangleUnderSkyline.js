// Solution 1
// O(n^2) time / O(1) space
// n - number of buildings

const largestRectangleUnderSkyline = (buildings) => {
  let maxArea = 0;
  for (let pillarIdx = 0; pillarIdx < buildings.length; pillarIdx++) {
    const currentHeight = buildings[pillarIdx];

    let furthestLeft = pillarIdx;
    while (furthestLeft > 0 && buildings[furthestLeft - 1] >= currentHeight) {
      furthestLeft--;
    }

    let furthestRight = pillarIdx;
    while (furthestLeft < buildings.length - 1 && buildings[furthestRight + 1] >= currentHeight) {
      furthestRight++;
    }

    const areaWithCurrentBuilding = (furthestRight - furthestLeft + 1) * currentHeight;
    maxArea = Math.max(areaWithCurrentBuilding, maxArea);
  }

  return maxArea;
}

// Solution 2
// O(n) time / O(n) space
// n - number of buildings

const largestRectangleUnderSkyline = (buildings) => {
  const pillarIndices = [];
  let maxArea = 0;

  const extendedBuildings = buildings.concat([0]);
  for (let idx = 0; idx < extendedBuildings.length; idx++) {
    const height = extendedBuildings[idx];
    while (pillarIndices.length !== 0 && extendedBuildings[pillarIndices[pillarIndices.length - 1]] >= height) {
      const pillarHeight = extendedBuildings[pillarIndices.pop()];
      const width = pillarIndices.length === 0 ? idx : idx - pillarIndices[pillarIndices.length - 1] - 1;
      maxArea = Math.max(width * pillarHeight, maxArea);
    }
    pillarIndices.push(idx);
  }
  return maxArea;
}
