# Solution 1
# O(k^n) time / O(n) space
# n - height of the staircase
# k - maximum number of steps allowed

def staircaseTraversal(height, maxSteps):
    return numberOfWaysToTop(height, maxSteps)

def numberOfWaysToTop(height, maxSteps):
    if height <= 1:
        return 1

    numberOfWays = 0
    for step in range(1, min(maxSteps, height) + 1):
        numberOfWays += numberOfWaysToTop(height - step, maxSteps)

    return numberOfWays


# Solution 2
# O(n * k) time / O(n) space
# n - height of the staircase
# k - maximum number of steps allowed

def staircaseTraversal(height, maxSteps):
    return numberOfWaysToTop(height, maxSteps, {0: 1, 1: 1})


def numberOfWaysToTop(height, maxSteps, memoize):
    if height in memoize:
        return memoize[height]

    numberOfWays = 0
    for step in range(1, min(maxSteps, height) + 1):
        numberOfWays += numberOfWaysToTop(height - step, maxSteps, memoize)

    memoize[height] = numberOfWays

    return numberOfWays


# Solution 3
# O(n * k) time / O(n) space
# n - height of the staircase
# k - maximum number of steps allowed

def staircaseTraversal(height, maxSteps):
    waysToTop = [0 for _ in range(height + 1)]
    waysToTop[0] = 1
    waysToTop[1] = 1

    for currentHeight in range(2, height + 1):
        step = 1
        while step <= maxSteps and step <= currentHeight:
            waysToTop[currentHeight] = waysToTop[currentHeight] + \
                waysToTop[currentHeight - step]
            step += 1

    return waysToTop[height]


# Solution 4
# O(n) time / O(n) space
# n - height of the staircase

def staircaseTraversal(height, maxSteps):
    currentNumberOfWays = 0
    waysToTop = [1]

    for currentHeight in range(1, height + 1):
        startOfWindow = currentHeight - maxSteps - 1
        endOfWindow = currentHeight - 1
        if startOfWindow >= 0:
            currentNumberOfWays -= waysToTop[startOfWindow]

        currentNumberOfWays += waysToTop[endOfWindow]
        waysToTop.append(currentNumberOfWays)

    return waysToTop[height]
