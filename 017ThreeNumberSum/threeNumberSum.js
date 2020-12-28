// Solution
// O(n^2) time / O(n) space

const threeNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    left = i + 1;
    right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
};
