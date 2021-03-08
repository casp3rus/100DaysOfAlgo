# Input class.

class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


# Solution 1
# O(n^2) time / O(h) space
# n - number of nodes / length of preOrderTraversalValues array.
# h - height of the tree

def reconstructBst(preOrderTraversalValues):
    if len(preOrderTraversalValues) == 0:
        return None

    currentValue = preOrderTraversalValues[0]
    rightSubtreeRootIdx = len(preOrderTraversalValues)

    for idx in range(1, len(preOrderTraversalValues)):
        value = preOrderTraversalValues[idx]
        if value >= currentValue:
            rightSubtreeRootIdx = idx
            break

    leftSubtree = reconstructBst(
        preOrderTraversalValues[1:rightSubtreeRootIdx])
    rightSubtree = reconstructBst(
        preOrderTraversalValues[rightSubtreeRootIdx:])
    return BST(currentValue, leftSubtree, rightSubtree)

# Solution 2
# O(n) time / O(h) space
# n - number of nodes / length of preOrderTraversalValues array.
# h - height of the tree


class TreeInfo:
    def __init__(self, rootIdx):
        self.rootIdx = rootIdx


def reconstructBST(preOrderTraversalValues):
    treeInfo = TreeInfo(0)
    return reconstructBSTFromRange(float('-inf'), float('inf'), preOrderTraversalValues, treeInfo)


def reconstructBSTFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo):
    if currentSubtreeInfo.rootIdx == len(preOrderTraversalValues):
        return None

    rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx]
    if rootValue < lowerBound or rootValue >= upperBound:
        return None

    currentSubtreeInfo.rootIdx += 1
    leftSubtree = reconstructBSTFromRange(
        lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo)
    rightSubtree = reconstructBSTFromRange(
        rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo)
    return BST(rootValue, leftSubtree, rightSubtree)
