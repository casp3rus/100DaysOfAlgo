# Solution
# O(n) time / O(n) space

def largest_range(arr)
  best_range = []
  longest_length = 0
  nums = {}

  arr.each do |num|
    nums[num] = true
  end

  arr.each do |num|
    next unless nums[num]

    nums[num] = false
    current_length = 1
    left = num - 1
    right = num + 1

    while nums[left]
      nums[left] = false
      current_length += 1
      left -= 1
    end

    while nums[right]
      nums[right] = false
      current_length += 1
      right += 1
    end

    if current_length > longest_length
      longest_length = current_length
      best_range = [left + 1, right - 1]
    end
  end
  best_range
end
