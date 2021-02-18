# Solution
#  O(n) time / O(1) space
#  n - length of the array

def subarray_sort(arr)
  min_out_of_order = Float::INFINITY
  max_out_of_order = -Float::INFINITY

  (0..arr.length - 1).each do |i|
    num = arr[i]

    if out_of_order(i, num, arr)
      min_out_of_order = [min_out_of_order, num].min
      max_out_of_order = [max_out_of_order, num].max
    end
  end

  return [-1, -1] if min_out_of_order == Float::INFINITY

  subarray_left_idx = 0
  subarray_left_idx += 1 while min_out_of_order >= arr[subarray_left_idx]

  subarray_right_idx = arr.length - 1
  subarray_right_idx -= 1 while max_out_of_order <= arr[subarray_right_idx]
  [subarray_left_idx, subarray_right_idx]
end

def out_of_order(i, num, arr)
  return num > arr[i + 1] if i == 0

  return num < arr[i - 1] if i == arr.length - 1

  num > arr[i + 1] || num < arr[i - 1]
end
