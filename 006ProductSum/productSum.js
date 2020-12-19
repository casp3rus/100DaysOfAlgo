// Solution 1
// O(n) time / O(d) - space "d - depth of the nested array"

const productSum = (array, multiplier = 1) => {
    let sum = 0
    for (const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1)
        } else {
            sum += element
        }
    }
    return sum * multiplier
}