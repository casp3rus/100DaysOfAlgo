# Solution 1 - recursion

# Average: O(log(n)) time / O(log(n)) space
# Worst: O(n) time / O(n) space

def findClosestValueInBST1(tree, target):
    return findClosestValueInBSTHelper1(tree, target, float("inf"))


def findClosestValueInBSTHelper1(tree, target, closest):
    if tree is None:
        return closest
    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value
    if target < tree.value:
        return findClosestValueInBSTHelper1(tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBSTHelper1(tree.right, target, closest)
    else:
        return closest

# Solution 2 - iteration

# Average: O(log(n)) time / O(1) space
# Worst: O(n) time / O(1) space


def findClosestValueInBST2(tree, target):
    return findClosestValueInBSTHelper2(tree, target, float("inf"))


def findClosestValueInBSTHelper2(tree, target, closest):
    currentNode = tree
    while currentNode is not None:
        if abs(target - closest) > abs(target - currentNode.value):
            closest = currentNode.value
        if target < currentNode.value:
            currentNode = currentNode.left
        elif target > currentNode.value:
            currentNode = currentNode.right
        else:
            break
    return closest
