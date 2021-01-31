// Solution
// O(n) time / O(n) space

const sunsetViews = (buildings, direction) => {
  const buildingsWithSunsetViews = [];

  const startIdx = direction === "WEST" ? 0 : buildings.length - 1;
  const step = direction === "WEST" ? 1 : -1;

  let idx = startIdx;
  let runningMaxHeight = 0;
  while (idx >= 0 && idx < buildings.length) {
    const buildingsHeight = buildings[idx];

    if (buildingsHeight > runningMaxHeight) buildingsWithSunsetViews.push(idx);

    runningMaxHeight = Math.max(runningMaxHeight, buildingsHeight);

    idx = idx + step;
  }

  if (direction === "EAST") buildingsWithSunsetViews.reverse();

  return buildingsWithSunsetViews;
};

// Solution
// O(n) time / O(n) space

const sunsetViews = (buildings, direction) => {
  const candidateBuildings = [];

  const startIdx = direction === "EAST" ? 0 : buildings.length - 1;
  const step = direction === "EAST" ? 1 : -1;

  let idx = startIdx;
  while (idx >= 0 && idx < buildings.length) {
    const buildingHeight = buildings[idx];

    while (
      buildings[candidateBuildings[candidateBuildings.length - 1]] <=
      buildingHeight
    ) {
      candidateBuildings.pop();
    }
    candidateBuildings.push(idx);

    idx = idx + step;
  }
  if (direction === "WEST") candidateBuildings.reverse();
  return candidateBuildings;
};
