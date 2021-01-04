// Solution 1
// O(n^2) time / O(1) space

const firstDuplicateValue = (array) => {
  let minimumSecondIdx = array.length;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const valueToCompare = array[j];
      if (value === valueToCompare) {
        minimumSecondIdx = Math.min(minimumSecondIdx, j);
      }
    }
  }
  if (minimumSecondIdx === array.length) return -1;
  return array[minimumSecondIdx];
};

// Solution 2
// O(n) time / O(n) space

const firstDuplicateValue = (array) => {
  const seen = new Set();
  for (const value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
};

// Solution 3
// O(n) time / O(1) space

const firstDuplicateValue = (array) => {
  for (const value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) return absValue;
    array[absValue - 1] *= -1;
  }
  return -1;
};
