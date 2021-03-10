// Solution
// O(2^(n + m)) time / O(n + m) space

const numberOfWaysToTraverseGraph = (height, width) => {
  if (width === 1 || height === 1) return 1;

  return (
    numberOfWaysToTraverseGraph(width - 1, height) +
    numberOfWaysToTraverseGraph(width, height - 1)
  );
};

// Solution 2
// O(n * m) time / O(n * m) space

const numberOfWaysToTraverseGraph = (width, height) => {
  const numberOfWays = [];
  for (let i = 0; i < height + 1; i++) {
    numberOfWays.push([]);
    for (let j = 0; j < width + 1; j++) {
      numberOfWays[i].push(0);
    }
  }

  for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) {
    for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) {
      if (widthIdx === 1 || heightIdx === 1) {
        numberOfWays[heightIdx][widthIdx] = 1;
      } else {
        const waysLeft = numberOfWays[heightIdx][widthIdx - 1];
        const waysUp = numberOfWays[heightIdx - 1][widthIdx];
        numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
      }
    }
  }
  return numberOfWays[height][width];
};

// Solution 3
// O(n + m) time / O(1) space

const numberOfWaysToTraverseGraph = (height, width) => {
  const xDistanceToCorner = width - 1;
  const yDistanceToCorner = height - 1;

  numerator = factorial(xDistanceToCorner + yDistanceToCorner);
  denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner);
  return numerator / denominator;
};

const factorial = (num) => {
  let result = 1;
  for (let n = 2; n < num + 1; n++) {
    result *= n;
  }
  return result;
};
