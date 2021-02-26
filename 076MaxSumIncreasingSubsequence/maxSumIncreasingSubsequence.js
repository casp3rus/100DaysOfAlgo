// Solution
// O(n^2) time / O(n) space
// n - length of the array

const maxSumIncreasingSubsequence = (array) => {
  const sequences = new Array(array.length);
  const sums = array.map((num) => num);
  let maxSumIdx = 0;

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    for (let j = 0; j < i; j++) {
      const otherNum = array[j];
      if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
        sums[i] = sums[j] + currentNum;
        sequences[i] = j;
      }
    }
    if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
  }
  return [sums[maxSumIdx], buildSubsequence(array, sequences, maxSumIdx)];
};

const buildSubsequence = (array, sequences, currentIdx) => {
  const subsequence = [];
  while (currentIdx !== undefined) {
    subsequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return subsequence;
};