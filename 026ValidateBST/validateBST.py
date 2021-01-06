# Solution
# O(n) time / O(d) space
# d - depth of the tree

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def validateBST(tree):
    return validateBSTHelper(tree, float('-inf'), float('inf'))


def validateBSTHelper(tree, minValue, maxValue):
    if tree is None:
        return True
    if tree.value < minValue or tree.value >= maxValue:
        return False
    leftIsValid = validateBSTHelper(tree.left, minValue, tree.value)
    return leftIsValid and validateBSTHelper(tree.right, tree.value, maxValue)
