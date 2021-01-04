# Solution 1
# O(n^2) time / O(1) space

def firstDuplicateValue(array):
    minimumSecondIdx = len(array)
    for i in range(len(array)):
        value = array[i]
        for j in range(i + 1, len(array)):
            valueToCompare = array[j]
            if value == valueToCompare:
                minimumSecondIdx = min(minimumSecondIdx, j)
    if minimumSecondIdx == len(array):
        return -1
    return array[minimumSecondIdx]

# Solution 2
# O(n) time / O(n) space


def firstDuplicateValue(array):
    seen = set()
    for value in array:
        if value in seen:
            return value
        seen.add(value)
    return -1

# Solution 3
# O(n^2) time / O(1) space


def firstDuplicateValue(array):
    for value in array:
        if array[abs(value) - 1] < 0:
            return abs(value)
        array[abs(value) - 1] *= -1
    return -1
