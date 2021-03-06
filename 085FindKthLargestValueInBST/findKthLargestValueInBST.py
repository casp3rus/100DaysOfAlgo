# Input class

classBinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# Solution 1
# O(n) time / O(n) space
# n - number of nodes in the tree


def findKthLargestValueInBST(tree, k):
    sortedNodeValues = []
    inOrderTraverse(tree, sortedNodeValues)
    return sortedNodeValues[len(sortedNodeValues) - k]


def inOrderTraverse(node, sortedNodeValues):
    if node == None:
        return

    inOrderTraverse(node.left, sortedNodeValues)
    sortedNodeValues.append(node.value)
    inOrderTraverse(node.right, sortedNodeValues)


# Solution 2
# O(h + k) time / O(h) space
# h - height of the binary tree

class TreeInfo:
    def __init__(self, numberOfNodesVisited, latestVisitedNodeValue):
        self.numberOfNodesVisited = numberOfNodesVisited
        self.latestVisitedNodeValue = latestVisitedNodeValue


def findKthLargestValueInBST(tree, k):
    treeInfo = TreeInfo(0, -1)
    reverseInOrderTraverse(tree, k, treeInfo)
    return treeInfo.latestVisitedNodeValue


def reverseInOrderTraverse(node, k, treeInfo):
    if node == None or treeInfo.numberOfNodesVisited >= k:
        return

    reverseInOrderTraverse(node.right, k, treeInfo)

    if treeInfo.numberOfNodesVisited < k:
        treeInfo.numberOfNodesVisited += 1
        treeInfo.latestVisitedNodeValue = node.value
        reverseInOrderTraverse(node.left, k, treeInfo)
