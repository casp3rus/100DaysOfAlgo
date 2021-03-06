// Solution 1
// O(nlog(n)) time / O(n) space

const sortedSquaredArray = (array) => {
  const sortedSquares = new Array(array.length).fill(0);

  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sortedSquares[idx] = value * value;
  }

  return sortedSquares.sort((a, b) => a - b);
};

// Solution 2
// O(n) time / O(n) space

const sortedSquaredArray = (array) => {
  const sortedSquares = new Array(array.length).fill(0);
  let smallestValueIdx = 0;
  let largestValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallestValueIdx];
    const largerValue = array[largestValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallestValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largestValueIdx--;
    }
  }
  return sortedSquares;
};
