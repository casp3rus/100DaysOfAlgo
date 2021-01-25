# Solution 1 - iteration
# O(n*2^n) time / O(n*2^n) space

def powerset(array)
  subsets = [[]]
  array.each { |element|
    for i in 0..subsets.length - 1
      current_subset = subsets[i]
      subsets << (current_subset + [element])
    end
  }
  return subsets
end

# Solution 2 - recursion
# O(n*2^n) time / O(n*2^n) space

def powerset(array, idx = nil)
  if (idx == nil)
    idx = array.length - 1
  end
  if (idx < 0)
    return [[]]
  end
  element = array[idx]
  subsets = powerset(array, idx - 1)
  for i in 0..subsets.length - 1
    current_subset = subsets[i]
    subsets << current_subset + ([element])
  end
  return subsets
end
