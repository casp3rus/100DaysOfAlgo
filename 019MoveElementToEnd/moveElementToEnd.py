# Solution 1
# O(n) time / O(1) space

def moveElementToEnd(array, element):
    leftIdx = 0
    rightIdx = len(array) - 1
    while leftIdx < rightIdx:
        while leftIdx < rightIdx and array[rightIdx] == element:
            rightIdx -= 1
        if array[leftIdx] == element:
            array[leftIdx], array[rightIdx] = array[rightIdx], array[leftIdx]
        leftIdx += 1
    return array
