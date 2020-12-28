# Solution
# O(n^2) time / O(n) space

def threeNumberSum(array, targetSumm):
    array.sort()
    triplets = []
    for i in range(len(array) - 2):
        left = i + 1
        right = len(array) - 1
        while left < right:
            currentSum = array[i] + array[left] + array[right]
            if currentSum == targetSumm:
                triplets.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif currentSum < targetSumm:
                left += 1
            elif currentSum > targetSumm:
                right -= 1
    return triplets
