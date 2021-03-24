# Solution 1 - recursion
# O(log(n)) time / O(log(n)) space

def shifted_binary_search(arr, target)
  shifted_binary_search_helper(arr, target, 0, arr.length - 1)
end

def shifted_binary_search_helper(arr, target, left, right)
  return -1 if left > right

  middle = ((left + right) / 2).floor
  potential_match = arr[middle]
  left_num = arr[left]
  right_num = arr[right]

  if target == potential_match
    middle
  elsif left_num <= potential_match
    if target < potential_match && target >= left_num
      shifted_binary_search_helper(arr, target, left, middle - 1)
    else
      shifted_binary_search_helper(arr, target, middle + 1, right)
    end
  elsif target > potential_match && target <= right_num
    shifted_binary_search_helper(arr, target, middle + 1, right)
  else
    shifted_binary_search_helper(arr, target, left, middle - 1)
  end
end

# Solution 2 - iteration
# O(log(n)) time / O(1) space

def shifted_binary_search(arr, target)
  shifted_binary_search_helper(arr, target, 0, arr.length - 1)
end

def shifted_binary_search_helper(arr, target, left, right)
  while left <= right
    middle = ((left + right) / 2).floor
    potential_match = arr[middle]
    left_num = arr[left]
    right_num = arr[right]

    if target == potential_match
      middle
    elsif left_num <= potential_match
      if target < potential_match && target >= left_num
        right = middle - 1
      else
        left = middle + 1
      end
    elsif target > potential_match && target <= right_num
      left = middle + 1
    else
      right = middle - 1
    end
  end
  -1
end
