# Solution 1
# O(nlog(n)) time / O(n) space

def sorted_squared_array(arr)
  sorted_squares = Array.new(arr.length, 0)

  (0..arr.length - 1).each { |idx|
    value = arr[idx]
    sorted_squares[idx] = value.to_i * value.to_i
  }
  sorted_squares.sort()
end

# Solution 2
# O(n) time / O(n) space

def sorted_squared_array(arr)
  sorted_squares = Array.new(arr.length, 0)
  smallest_value_idx = 0
  largest_value_idx = arr.length - 1

  (arr.length - 1).step(0, -1) do |idx|
    smaller_value = arr[smallest_value_idx]
    larger_value = arr[largest_value_idx]

    if smaller_value.abs > larger_value.abs
      sorted_squares[idx] = smaller_value.to_i * smaller_value.to_i
      smallest_value_idx += 1
    else
      sorted_squares[idx] = larger_value.to_i * larger_value.to_i
      largest_value_idx -= 1
    end
  end
  sorted_squares
end
