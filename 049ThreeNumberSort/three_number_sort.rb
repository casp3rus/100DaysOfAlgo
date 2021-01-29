# Solution 1
# O(n) time / O(1) space
# n - length of the array

def three_number_sort(arr, order)
  value_count = [0, 0, 0]

  arr.each { |element|
    orderIdx = order.index(element)
    value_count[orderIdx] += 1
  }

  for i in 0..2
    value = order[i]
    count = value_count[i]

    num_elements_before = value_count.slice(0, i).sum()
    for n in 0..count
      current_idx = num_elements_before + n
      arr[current_idx] = value
    end
  end
  return arr
end

# Solution 2
# O(n) time / O(1) space
# n - length of the array

def three_number_sort(array, order)
  first_value = order[0]
  third_value = order[2]

  first_idx = 0
  0.upto(array.length) do |idx|
    if array[idx] == first_value
      array[first_idx], array[idx] = array[idx], array[first_idx]
      first_idx += 1
    end
  end

  third_idx = array.length - 1
  (array.length - 1).downto(0) do |idx|
    if array[idx] == third_value
      array[third_idx], array[idx] = array[idx], array[third_idx]
      third_idx -= 1
    end
  end
  return array
end

# Solution 3
# O(n) time / O(1) space
# n - length of the array

def three_number_sort(arr, order)
  first_value = order[0]
  second_value = order[1]

  first_idx = 0
  second_idx = 0
  third_idx = arr.length - 1

  while second_idx <= third_idx
    value = arr[second_idx]

    if value == first_value
      arr[first_idx], arr[second_idx] = arr[second_idx], arr[first_idx]
      first_idx += 1
      second_idx += 1
    elsif value == second_value
      second_idx += 1
    else
      arr[second_idx], arr[third_idx] = arr[third_idx], arr[second_idx]
      third_idx -= 1
    end
  end
  return arr
end
