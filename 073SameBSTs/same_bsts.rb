# Solution 1
# O(n^2) time / O(n^2) space

def same_bsts(array_one, array_two)
  if array_one.length != array_two.length
    return false
  end

  if array_one.length == 0 && array_two.length == 0
    return true
  end

  if array_one[0] != array_two[0]
    return false
  end

  left_one = get_smaller(array_one)
  left_two = get_smaller(array_two)
  right_one = get_bigger_or_equal(array_one)
  right_two = get_bigger_or_equal(array_two)

  return same_bsts(left_one, left_two) && same_bsts(right_one, right_two)
end

def get_smaller(arr)
  smaller = []
  (1..arr.length - 1).each do |i|
    if arr[i] < arr[0]
      smaller << arr[i]
    end
  end
  return smaller
end

def get_bigger_or_equal(arr)
  bigger_or_equal = []
  (1..arr.length - 1).each do |i|
    if arr[i] >= arr[0]
      bigger_or_equal << arr[i]
    end
  end
  return bigger_or_equal
end

# Solution 2
# O(n^2) time / O(d) space
# d - depth of BST

def same_bsts(array_one, array_two)
  return are_same_bsts(array_one, array_two, 0, 0, -Float::INFINITY, Float::INFINITY)
end

def are_same_bsts(array_one, array_two, root_idx_one, root_idx_two, min_val, max_val)
  if root_idx_one == -1 || root_idx_two == -1
    return root_idx_one == root_idx_two
  end

  if array_one[root_idx_one] != array_two[root_idx_two]
    return false
  end

  left_root_idx_one = get_idx_of_first_smaller(array_one, root_idx_one, min_val)
  left_root_idx_two = get_idx_of_first_smaller(array_two, root_idx_two, min_val)
  right_root_idx_one = get_idx_of_first_bigger_or_equal(array_one, root_idx_one, max_val)
  right_root_idx_two = get_idx_of_first_bigger_or_equal(array_two, root_idx_two, max_val)

  current_value = array_one[root_idx_one]
  left_are_same = are_same_bsts(array_one, array_two, left_root_idx_one, left_root_idx_two, min_val, current_value)
  right_are_same = are_same_bsts(array_one, array_two, right_root_idx_one, right_root_idx_two, current_value, max_val)

  return left_are_same && right_are_same
end

def get_idx_of_first_smaller(arr, starting_idx, min_val)
  (starting_idx + 1..arr.length - 1).each do |i|
    if arr[i] < arr[starting_idx] && arr[i] >= min_val
      return i
    end
  end
  return -1
end

def get_idx_of_first_bigger_or_equal(arr, starting_idx, max_val)
  (starting_idx + 1..arr.length - 1).each do |i|
    if arr[i] >= arr[starting_idx] && arr[i] < max_val
      return i
    end
  end
  return -1
end
