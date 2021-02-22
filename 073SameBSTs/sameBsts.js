// Solution 1
// O(n^2) time / O(n^2) space

const sameBsts = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) return false;

  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;

  if (arrayOne[0] !== arrayTwo[0]) return false;

  const leftOne = getSmaller(arrayOne);
  const leftTwo = getSmaller(arrayTwo);
  const rightOne = getBiggerOrEqual(arrayOne);
  const rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
};

const getSmaller = (array) => {
  const smaller = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) smaller.push(array[i]);
  }
  return smaller;
};

const getBiggerOrEqual = (array) => {
  const biggerOrEqual = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) biggerOrEqual.push(array[i]);
  }
  return biggerOrEqual;
};

// Solution 2
// O(n^2) time / O(d) space
// d - depth of the BST

const sameBsts = (arrayOne, arrayTwo) => {
  return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
};

const areSameBsts = (
  arrayOne,
  arrayTwo,
  rootIdxOne,
  rootIdxTwo,
  minVal,
  maxVal
) => {
  if (rootIdxOne === -1 || rootIdxTwo === -1) return rootIdxOne === rootIdxTwo;

  if (arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;

  const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, minVal);
  const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, minVal);
  const rightRootIdxOne = getIdxOfFirstBiggerOrEqual(
    arrayOne,
    rootIdxOne,
    maxVal
  );
  const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(
    arrayTwo,
    rootIdxTwo,
    maxVal
  );

  const currentValue = arrayOne[rootIdxOne];
  const leftAreSame = areSameBsts(
    arrayOne,
    arrayTwo,
    leftRootIdxOne,
    leftRootIdxTwo,
    minVal,
    currentValue
  );
  const rightAreSame = areSameBsts(
    arrayOne,
    arrayTwo,
    rightRootIdxOne,
    rightRootIdxTwo,
    currentValue,
    maxVal
  );

  return leftAreSame && rightAreSame;
};

const getIdxOfFirstSmaller = (array, startingIdx, minVal) => {
  for (let i = startingIdx + 1; i < array.length; i++) {
    if (array[i] < array[startingIdx] && array[i] >= minVal) return i;
  }
  return -1;
};

const getIdxOfFirstBiggerOrEqual = (array, startingIdx, maxValue) => {
  for (let i = startingIdx + 1; i < array.length; i++) {
    if (array[i] >= array[startingIdx] && array[i] < maxValue) return i;
  }
  return -1;
};
