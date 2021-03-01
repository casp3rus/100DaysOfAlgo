// Solution 1
// O(n^2) time / O(n) Space

const minNumberOfJumps = (array) => {
  const jumps = new Array(array.length).fill(Infinity);
  jumps[0] = 0;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
      }
    }
  }
  return jumps[jumps.length - 1];
};

// Solution 2
// O(n) time / O(1) Space

const minNumberOfJumps = (array) => {
  if (array.length === 1) return 0;
  let jumps = 0;
  let maxReach = array[0];
  let steps = array[0];

  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, i + array[i]);
    steps--;
    if (steps === 0) {
      jumps++;
      steps = maxReach - i;
    }
  }
  return jumps + 1;
};
