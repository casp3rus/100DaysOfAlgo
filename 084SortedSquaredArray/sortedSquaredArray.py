# Solution 1
# O(nlog(n)) time / O(n) space
# n - length of the array

def sortedSquaredArray(array):
    sortedSquares = [0 for _ in array]

    for idx in range(len(array)):
        value = array[idx]
        sortedSquares[idx] = value * value

    sortedSquares.sort()
    return sortedSquares


# Solution 2
# O(n) time / O(n) space
# n - length of the array

def sortedSquaredArray(array):
    sortedSquares = [0 for _ in array]
    smallestValueIdx = 0
    largestValueIdx = len(array) - 1

    for idx in reversed(range(len(array))):
        smallerValue = array[smallestValueIdx]
        largerValue = array[largestValueIdx]

        if abs(smallerValue) > abs(largerValue):
            sortedSquares[idx] = smallerValue * smallerValue
            smallestValueIdx += 1
        else:
            sortedSquares[idx] = largerValue * largerValue
            largestValueIdx -= 1

    return sortedSquares
