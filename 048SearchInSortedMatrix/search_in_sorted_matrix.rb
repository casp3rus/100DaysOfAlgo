# Solution
# O(n+m) time / O(1) space

def search_in_sorted_matrix(matrix, target)
  row = 0
  col = matrix[0].length - 1
  while row < matrix.length && col >= 0
    if matrix[row][col] > target
      col -= 1
    elsif matrix[row][col] < target
      row += 1
    else
      return [row, col]
    end
  end
  return [-1, -1]
end
