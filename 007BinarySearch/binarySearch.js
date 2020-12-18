// Solution 1 - recursion
// O(log(n)) time / O(log(n)) space

const binarySearch = (array, target) => {
    return binarySearchHelper(array, target, 0, array.length -1)
}

const binarySearchHelper = (array, target, left, right) => {
    if (left > right) return -1
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]
    if (target === potentialMatch) {
        return middle
    } else if (target < potentialMatch) {
        return binarySearchHelper1(array, target, left, middle - 1)
    } else {
        return binarySearchHelper1(array, target, middle +1, right)
    }
}

// Solution 2 - iteration
// O(log(n)) time / O(1) space

const binarySearch = (array, target) => {
    return binarySearchHelper(array, target, 0, array.length)
}

const binarySearchHelper = (array, target, left, right) => {
    while ( left <= right) {
        const middle = Math.floor((left + right) / 2)
        const potentialMatch = array[middle]
        if (target === potentialMatch) {
            return middle
        } else if (target < potentialMatch) {
            right = middle -1
        } else {
            left = middle + 1
        }
    }
    return -1
}