# Solution
# O(n) time / O(n) space

def binaryTreeDiameter(tree):
    return getTreeInfo(tree).diameter

def getTreeInfo(tree):
    if tree is None:
        return TreeInfo(0, 0)

    leftTreeData = getTreeInfo(tree.left)
    rightTreeData = getTreeInfo(tree.right)

    longestPathThroughRoot = leftTreeData.height + rightTreeData.height
    maxDiameterSoFar = max(leftTreeData.diameter, rightTreeData.diameter)
    currentDiameter = max(longestPathThroughRoot, maxDiameterSoFar)
    currentHeight = 1 + max(leftTreeData.height, rightTreeData.height)

    return TreeInfo(currentDiameter, currentHeight)

class TreeInfo:
    def __init__(self, diameter, height):
        self.diameter = diameter
        self.height = height

# This is an input class of the Binary Tree

class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
