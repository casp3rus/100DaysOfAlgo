# Solution 1 - recursion
# O(2^n) time / O(n) space

def getNthFib1(n):
    if n == 2:
        return 1
    elif n == 1:
        return 0
    else:
        return getNthFib1(n - 1) + getNthFib1(n - 2)

# Solution 2 - memoization
# O(n) time / O(n) space


def getNthFib2(n, memoize={1: 0, 2: 1}):
    if n in memoize:
        return memoize[n]
    else:
        memoize[n] = getNthFib2(n - 1, memoize) + getNthFib2(n - 2, memoize)
        return memoize[n]

# Solution 3 - iteration
# O(n) time / O(1) space


def getNthFib3(n):
    lastTwo = [0, 1]
    counter = 3
    while(counter <= n):
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    return lastTwo[1] if n > 1 else lastTwo[0]
