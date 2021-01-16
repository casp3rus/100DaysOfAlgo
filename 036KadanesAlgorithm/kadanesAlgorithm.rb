# Solution
# O(n) time / O(1) space
# n - length of the input array

def kadanes_algorithm(array)
  maxEndingHere = array[0]
  maxSoFar = array[0]
  array.slice(1..-1).each do |num|
    maxEndingHere = [num, maxEndingHere + num].max
    maxSoFar = [maxSoFar, maxEndingHere].max
  end
  return maxSoFar
end
