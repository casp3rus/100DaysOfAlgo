// Solution 1
// O(n) time / O(1) space

const indexEqualsValue = (array) => {
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (index === value) {
      return index;
    }
  }
  return -1;
};

// Solution 2 - recursion
// O(log(n)) time / O(log(n)) space

const indexEqualsValue = (array) => {
  return indexEqualsValueHelper(array, 0, array.length - 1);
};

const indexEqualsValueHelper = (array, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;

  const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
  const middleValue = array[middleIndex];

  if (middleValue < middleIndex) {
    return indexEqualsValueHelper(array, middleIndex + 1, rightIndex);
  } else if (middleValue === middleIndex && middleIndex === 0) {
    return middleIndex;
  } else if (
    middleValue === middleIndex &&
    array[middleIndex - 1] < middleIndex - 1
  ) {
    return middleIndex;
  } else {
    return indexEqualsValueHelper(array, leftIndex, middleIndex - 1);
  }
};

// Solution 3 - iteration
// Olog(n) time / O(1) space

const indexEqualsValue = (array) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const middleValue = array[middleIndex];

    if (middleValue < middleIndex) {
      leftIndex = middleIndex + 1;
    } else if (middleValue === middleIndex && middleIndex === 0) {
      return middleIndex;
    } else if (
      middleValue === middleIndex &&
      array[middleIndex - 1] < middleIndex - 1
    ) {
      return middleIndex;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
};
