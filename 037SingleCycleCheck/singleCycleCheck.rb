# Solution
# O(n) time / O(1) space
# n - length of the input array

def single_cycle_check(array)
  numElementsVisited = 0
  currentIdx = 0
  while numElementsVisited < array.length
    if numElementsVisited > 0 & currentIdx == 0
      return false
    end
    numElementsVisited += 1
    currentIdx = getNextIdx(currentIdx, array)
  end
  return currentIdx == 0
end

def getNextIdx(currentIdx, array)
  jump = array[currentIdx]
  getNextIdx = (currentIdx + jump) % array.length
  return getNextIdx >= 0 ? getNextIdx : getNextIdx + array.length
end
