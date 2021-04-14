# Solutiona
# O(nlog(n)) time / O(nlog(n)) space

def quick_sort(arr)
  quick_sort_helper(arr, 0, arr.length - 1)

  arr
end

def quick_sort_helper(arr, start_idx, end_idx)
  return if start_idx >= end_idx

  pivot_idx = start_idx
  left_idx = start_idx + 1
  right_idx = end_idx
  while right_idx >= left_idx
    if arr[left_idx] > arr[pivot_idx] && arr[right_idx] < arr[pivot_idx]
      swap(left_idx, right_idx, arr)
    end
    if arr[left_idx] <= arr[pivot_idx]
      left_idx += 1
    end
    if arr[right_idx] >= arr[pivot_idx]
      right_idx -= 1
    end
  end
  swap(pivot_idx, right_idx, arr)
  left_subarray_is_smaller = right_idx - 1 - start_idx < end_idx - (right_idx - 1)
  if left_subarray_is_smaller
    quick_sort_helper(arr, start_idx, right_idx - 1)
    quick_sort_helper(arr, right_idx + 1, end_idx)
  else
    quick_sort_helper(arr, right_idx + 1, end_idx)
    quick_sort_helper(arr, start_idx, right_idx - 1)
  end
end

def swap(i, j, arr)
  arr[i], arr[j] = arr[j], arr[i]
end
