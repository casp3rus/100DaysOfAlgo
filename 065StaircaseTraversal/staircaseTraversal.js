// Solution 1
// O(k^n) time / O(n) space
// n - height of the staircase
// k - maximum number of steps allowed

const staircaseTraversal = (height, maxSteps) => {
  return numberOfWaysToTop(height, maxSteps);
};

const numberOfWaysToTop = (height, maxSteps) => {
  if (height <= 1) return 1;

  let numberOfWays = 0;

  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps);
  }
  return numberOfWays;
};

// Solution 2
// O(K * n) time / O(n) space
// n - height of the staircase
// k - maximum number of steps allowed

const staircaseTraversal = (height, maxSteps) => {
  return numberOfWaysToTop(height, maxSteps, { 0: 1, 1: 1 });
};

const numberOfWaysToTop = (height, maxSteps, memoize) => {
  if (height in memoize) return memoize[height];

  let numberOfWays = 0;
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps, memoize);
  }

  memoize[height] = numberOfWays;

  return numberOfWays;
};

// Solution 3
// O() time / O(n) space
// n - height of the staircase
// k - maximum number of steps allowed

const staircaseTraversal = (height, maxSteps) => {
  const waysToTop = new Array(height + 1).fill(0);
  waysToTop[0] = 1;
  waysToTop[1] = 1;

  for (let currentHeight = 2; currentHeight < height + 1; currentHeight++) {
    let step = 1;
    while (step <= maxSteps && step <= currentHeight) {
      waysToTop[currentHeight] =
        waysToTop[currentHeight] + waysToTop[currentHeight - step];
      step++;
    }
  }
  return waysToTop[height];
};

// Solution
// O(n) time / O(n) space
// n - height of the staircase

const staircaseTraversal = (height, maxSteps) => {
  let currentNumberOfWays = 0;
  const waysToTop = [1];

  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startOfWindow = currentHeight - maxSteps - 1;
    const endOfWindow = currentHeight - 1;
    if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];

    currentNumberOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNumberOfWays);
  }
  return waysToTop[height];
};
