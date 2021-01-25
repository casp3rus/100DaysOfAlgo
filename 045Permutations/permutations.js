// Solution
// Upper Bound: O(n^2*n!) time / O(n*n!) space
// Roughly: O(n*n!) time / O(n*n!) space

const getPermutations = (array) => {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
};

const permutationsHelper = (array, currentPermutation, permutations) => {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
};

// Solution
// O() time / O() space

const getPermutations = (array) => {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
};

const permutationsHelper = (i, array, permutations) => {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
};

const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
