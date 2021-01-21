// Solution 1
// O(wh) time / O(wh) space
// w - width of the matrix
// h - height of the matrix

const removeIslands = (matrix) => {
  const onesConnectedToBorder = [];
  for (let row = 0; row < matrix.length; row++) {
    onesConnectedToBorder.push([]);
    for (let col = 0; col < matrix[0].length; col++) {
      onesConnectedToBorder[row].push(false);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;

      if (!isBorder) continue;

      if (matrix[row][col] != 1) continue;

      findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);
    }
  }

  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length; col++) {
      if (onesConnectedToBorder[row][col]) continue;
      matrix[row][col] = 0;
    }
  }
  return matrix;
};

const findOnesConnectedToBorder = (
  matrix,
  startRow,
  startCol,
  onesConnectedToBorder
) => {
  const stack = [[startRow, startCol]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;

    const alreadyVisited = onesConnectedToBorder[currentRow][currentCol];
    if (alreadyVisited) continue;

    onesConnectedToBorder[currentRow][currentCol] = true;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);
    for (const neighbor of neighbors) {
      const [row, col] = neighbor;

      if (matrix[row][col] != 1) continue;

      stack.push(neighbor);
    }
  }
};

const getNeighbors = (matrix, row, col) => {
  const neighors = [];

  const numRows = matrix.length;
  const numCols = matrix[row].length;

  if (row - 1 >= 0) neighors.push([row - 1, col]); // UP
  if (row + 1 < numRows) neighors.push([row + 1, col]); //DOWN
  if (col - 1 >= 0) neighors.push([row, col - 1]); // LEFT
  if (col + 1 < numCols) neighors.push([row, col + 1]); // RIGHT

  return neighors;
};

// Solution 2
// O(wh) time / O(wh) space
// w - width of the matrix
// h - height of the matrix

const removeIslands = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;

      if (!isBorder) continue;
      if (matrix[row][col] != 1) continue;

      changeOnesConnectedToBorderToTwos(matrix, row, col);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const value = matrix[row][col];
      if (value === 1) {
        matrix[row][col] = 0;
      } else if (value === 2) {
        matrix[row][col] = 1;
      }
    }
  }
  return matrix;
};

const changeOnesConnectedToBorderToTwos = (matrix, startRow, startCol) => {
  const stack = [[startRow, startCol]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;

    matrix[currentRow][currentCol] = 2;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);
    for (const neighbor of neighbors) {
      const [row, col] = neighbor;

      if (matrix[row][col] != 1) continue;

      stack.push(neighbor);
    }
  }
};

const getNeighbors = (matrix, row, col) => {
  const neighors = [];

  const numRows = matrix.length;
  const numCols = matrix[row].length;

  if (row - 1 >= 0) neighors.push([row - 1, col]); // UP
  if (row + 1 < numRows) neighors.push([row + 1, col]); //DOWN
  if (col - 1 >= 0) neighors.push([row, col - 1]); // LEFT
  if (col + 1 < numCols) neighors.push([row, col + 1]); // RIGHT

  return neighors;
};
