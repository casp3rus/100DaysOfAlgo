// Solution 1
// O(n) time / O(1) space
// n - length of the array

const threeNumberSort = (array, order) => {
  const valueCounts = [0, 0, 0];

  for (const element of array) {
    const orderIdx = order.indexOf(element);
    valueCounts[orderIdx]++;
  }

  for (let idx = 0; idx < 3; idx++) {
    const value = order[idx];
    const count = valueCounts[idx];

    const numElementsBefore = valueCounts
      .slice(0, idx)
      .reduce((a, b) => a + b, 0);
    for (let n = 0; n < count; n++) {
      const currentIdx = numElementsBefore + n;
      array[currentIdx] = value;
    }
  }

  return array;
};

// Solution 2
// O(n) time / O(1) space
// n - length of the array

const threeNumberSort = (array, order) => {
  const firstValue = order[0];
  const thirdValue = order[2];

  let firstIdx = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === firstValue) {
      swap(firstIdx, idx, array);
      firstIdx++;
    }
  }

  let thirdIdx = array.length - 1;
  for (let idx = array.length - 1; idx >= 0; idx--) {
    if (array[idx] === thirdValue) {
      swap(thirdIdx, idx, array);
      thirdIdx--;
    }
  }
  return array;
};

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};

// Solution 3
// O(n) time / O(1) space
// n - length of the array

const threeNumberSort = (array, order) => {
  const firstValue = order[0];
  const secondValue = order[1];

  let firstIdx = 0;
  let secondIdx = 0;
  let thirdIdx = array.length - 1;

  while (secondIdx <= thirdIdx) {
    const value = array[secondIdx];

    if (value === firstValue) {
      swap(firstIdx, secondIdx, array);
      firstIdx++;
      secondIdx++;
    } else if (value === secondValue) {
      secondIdx++;
    } else {
      swap(secondIdx, thirdIdx, array);
      thirdIdx--;
    }
  }
  return array;
};

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};
