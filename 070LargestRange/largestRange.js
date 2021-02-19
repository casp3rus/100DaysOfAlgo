// Solution
// O(n) time / O(n) space

const largestRange = (array) => {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};

  for (const num of array) {
    nums[num] = true;
  }

  for (const num of array) {
    if (!nums[num]) continue;

    nums[num] = false;
    currentLength = 1;
    left = num - 1;
    right = num + 1;

    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }

    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
};
