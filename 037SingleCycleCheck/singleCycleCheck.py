# Solution
# O(n) time / O(1) space
# n - length of the input array

def singleCycleCheck(array):
    numElementsVisited = 0
    currentIdx = 0
    while numElementsVisited < len(array):
        if numElementsVisited > 0 and currentIdx == 0:
            return False
        numElementsVisited += 1
        currentIdx = getNextIdx(currentIdx, array)
    return currentIdx == 0


def getNextIdx(currentIdx, array):
    jump = array[currentIdx]
    getNextIdx = (currentIdx + jump) % len(array)
    return getNextIdx if getNextIdx >= 0 else getNextIdx + len(array)
