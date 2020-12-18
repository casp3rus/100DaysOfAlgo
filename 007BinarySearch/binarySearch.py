# Solution 1 - recursion
# O(log(n)) time / O(log(n)) space

def binarySearch1(array, target):
    return binarySearchHelper1(array, target, 0, len(array) - 1)


def binarySearchHelper1(array, target, left, right):
    if left > right:
        return -1
    middle = (left + right) // 2
    potentialMatch = array[middle]
    if target == potentialMatch:
        return middle
    elif target < potentialMatch:
        return binarySearchHelper1(array, target, left, middle - 1)
    else:
        return binarySearchHelper1(array, target, middle + 1, right)

# Solution 2 - iteration
# O(log(n)) time / O(1) space


def binarySearch2(array, target):
    return binarySearchHelper1(array, target, 0, len(array) - 1)


def binarySearchHelper2(array, target, left, right):
    while left <= right:
        middle = (left + right) // 2
        potentialMatch = array[middle]
        if target == potentialMatch:
            return middle
        elif target < potentialMatch:
            right = middle - 1
        else:
            left = middle + 1
    return -1
