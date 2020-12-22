# Solution 1
# O(n^2) time / O(1) space

def selctionSort(array):
    currentIdx = 0
    while currentIdx < len(array) - 1:
        smallesIdx = currentIdx
        for i in range(currentIdx + 1, len(array)):
            if array[smallesIdx] > array[i]:
                smallesIdx = i
        swap(currentIdx, smallesIdx, array)
        currentIdx += 1
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]
