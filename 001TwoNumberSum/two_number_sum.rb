# Solution 1
# O(n^2) time / O(1) space

def two_number_sum(array, target_sum)
  i = 0
  while i <= array.length - 1
    j = array.length - 1
    while j >= 0
      if array[i] + array[j] == target_sum && i != j
        return [array[i], array[j]]
      end
      j -= 1
    end
    i += 1
  end
  return []
end

# Solution 2
# O(n) time / O(n) space

def two_numer_sum(array, target_sum)
  nums = {}
  array.each { |num|
    potential_match = target_sum - num
    if nums[:potential_match]
      return [potential_match, num]
    else
      nums[:num] = true
    end
  }
  return []
end

# Solution 3
# O(nLog(n)) time / O(1) space

def two_number_sum(array, target_sum)
  array.sort
  left = 0
  right = array.length - 1
  while left < right
    current_sum = array[left] + array[right]
    if current_sum == target_sum
      return [array[left], array[right]]
    elsif current_sum < target_sum
      left += 1
    elsif current_sum > target_sum
      right -= 1
    end
  end
  return []
end
