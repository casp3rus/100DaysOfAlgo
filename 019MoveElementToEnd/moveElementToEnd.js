// Solution 1
// O(n) time / O(1) space

const moveElementToEnd = (array, element) => {
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  while (leftIdx < rightIdx) {
    while (leftIdx < rightIdx && array[rightIdx] === element) rightIdx--;
    if (array[leftIdx] === element) swap(leftIdx, rightIdx, array);
    leftIdx++;
  }
  return array;
};

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};
