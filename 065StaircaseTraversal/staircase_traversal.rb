# Solution 1
# O(k^n) time / O(n) space
# n - height of the staircase
# k - maximum number of steps allowed

def staircase_traversal(height, max_steps)
  return number_of_ways_to_top(height, max_steps)
end

def number_of_ways_to_top(height, max_steps)
  if height <= 1
    return 1
  end

  number_of_ways = 0
  (1..[max_steps, height].min).each { |step|
    number_of_ways += number_of_ways_to_top(height - step, max_steps)
  }
  return number_of_ways
end

# Solution 2
# O(n * k) time / O(n) space
# n - height of the staircase
# k - maximum number of steps allowed

def staircase_traversal(height, max_steps)
  return number_of_ways_to_top(height, max_steps, { 0 => 1, 1 => 1 })
end

def number_of_ways_to_top(height, max_steps, memoize)
  if memoize[height]
    return memoize[height]
  end

  number_of_ways = 0
  (1..[max_steps, height].min).each { |step|
    number_of_ways += number_of_ways_to_top(height - step, max_steps, memoize)
  }
  memoize[height] = number_of_ways

  return number_of_ways
end

# Solution 3
# O(n * k) time / O(n) space
# n - height of the staircase
# k - maximum number of steps allowed

def staircase_traversal(height, max_steps)
  ways_to_top = Array.new(height, 0)
  ways_to_top[0] = 1
  ways_to_top[1] = 1

  (2..height).each { |current_height|
    step = 1
    while step <= max_steps && step <= current_height
      ways_to_top[current_height] = ways_to_top[current_height].to_i + ways_to_top[current_height - step].to_i
      step += 1
    end
  }
  return ways_to_top[height]
end

# Solution 4
# O(n) time / O(n) space
# n - height of the staircase

def staircase_traversal(height, max_steps)
  current_number_of_ways = 0
  ways_to_top = [1]

  (1..height + 1).each { |current_height|
    start_of_window = current_height - max_steps - 1
    end_of_window = current_height - 1
    if start_of_window >= 0
      current_number_of_ways -= ways_to_top[start_of_window]
    end

    current_number_of_ways += ways_to_top[end_of_window]
    ways_to_top << current_number_of_ways
  }
  return ways_to_top[height]
end
