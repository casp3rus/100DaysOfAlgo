# Solution 1
# O(n^3) time / O(n) space

def longest_palindromic_substring(string)
  longest = ""

  for i in 0..string.length
    for j in i..string.length
      substring = string.slice(i, j + 1)
      if substring.length > longest.length && is_palindrome(substring)
        longest = substring
      end
    end
  end
  return longest
end

def is_palindrome(string)
  left_idx = 0
  right_idx = string.length - 1
  while left_idx < right_idx
    if string[left_idx] != string[right_idx]
      return false
    end
    left_idx += 1
    right_idx -= 1
  end
  return true
end

# Solution 2
# O(n^2) time / O(n) space

def longest_palindromic_substring(string)
  current_longest = [0, 1]
  for i in 0..string.length
    odd = get_longest_palindrome_from(string, i - 1, i + 1)
    even = get_longest_palindrome_from(string, i - 1, i)
    longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
    current_longest = current_longest[1] - current_longest[0] > longest[1] - longest[0] ? current_longest : longest
  end
  return string.slice(current_longest[0], current_longest[1])
end

def get_longest_palindrome_from(string, left_idx, right_idx)
  while left_idx >= 0 && right_idx < string.length
    if string[left_idx] != string[right_idx]
      break
    end
    left_idx -= 1
    right_idx += 1
  end
  return [left_idx + 1, right_idx]
end
