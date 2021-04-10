# Solution 1
# O(n) time / O(n) space

def water_area(heights)
  maxes = Array.new(heights.length, 0)

  left_max = 0
  (0...heights.length - 1).each do |i|
    height = heights[i]
    maxes[i] = left_max
    left_max = [left_max, height].max
  end

  right_max = 0
  (heights.length - 1...0).each do |i|
    height = heights[i]
    min_height = [right_max, maxes[i]].min
    maxes[i] = if height < min_height
                 min_height - height
               else
                 0
               end
    right_max = [right_max, height].max
  end
  p maxes
  maxes.sum
end

# Solution 2
# O(n) time / O(1) space
