# Solution
# O(nlog(n)) time / O(1) space
# n - number of students

def class_photos(red_shirt_heights, blue_shirt_heights)
  red_shirt_heights.sort! { |a, b| b <=> a }
  blue_shirt_heights.sort! { |a, b| b <=> a }

  shirt_color_in_top_row = red_shirt_heights[0] < blue_shirt_heights[0] ? "BLUE" : "RED"

  (0..red_shirt_heights.length - 1).each { |idx|
    red_shirt_height = red_shirt_heights[idx]
    blue_shirt_height = blue_shirt_heights[idx]

    if shirt_color_in_top_row == "RED" && blue_shirt_height >= red_shirt_height
      return false
    elsif red_shirt_height >= blue_shirt_height
      return false
    end
  }
  return true
end
