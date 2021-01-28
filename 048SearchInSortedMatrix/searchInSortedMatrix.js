// Solution
// Object(n+m) time / O(1) space

const SearchInSortedMatrix = (matrix, target) => {
  row = 0;
  col = matrix.length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col];
    }
  }
  return [-1, -1];
};
