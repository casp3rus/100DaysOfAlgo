// Solution 1 - iteration
// O(n*2^n) time / O(n*2^n) space

const powerset = (array) => {
  const subsets = [[]];
  for (const element of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(element));
    }
  }
  return subsets;
};

// Solution 2 - recursion
// O(n*2^n) time / O(n*2^n) space

const powerset = (array, idx = null) => {
  if (idx === null) {
    idx = array.length - 1;
  }
  if (idx < 0) {
    return [[]];
  }
  const element = array[idx];
  const subsets = powerset(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i];
    subsets.push(currentSubset.concat(element));
  }
  return subsets;
};
