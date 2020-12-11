// Solution 1
// O(n^2) time / O(1) space

const twoNumberSum1 = (array, targetSum) => {
  for (let x = 0; x < array.length - 1; x++) {
    for (let y = array.length - 1; y > x; y--) {
      if (array[x] + array[y] === targetSum) {
        return [array[x], array[y]];
      }
    }
  }
  return [];
};

// Solution 2
// O(n) time / O(n) space

const twoNumberSum2 = (array, targetSum) => {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
};

// Solution 3
// O(nLog(n)) time / O(1) space

const twoNumberSum3 = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
};
