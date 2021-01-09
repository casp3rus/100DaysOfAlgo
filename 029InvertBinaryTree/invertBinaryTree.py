# Solution 1 - iteration
# O(n) time / O(n) space

def invertBinaryTree(tree):
    queue = [tree]
    while len(queue):
        currentNode = queue.pop(0)
        if currentNode is None:
            continue
        swapLeftAndRight(currentNode)
        queue.append(currentNode.left)
        queue.append(currentNode.right)


def swapLeftAndRight(tree):
    tree.left, tree.right = tree.right, tree.left

# Solution 2 - recursion
# O(n) time / O(d) space
# d - depth of the binary tree


def invertBinaryTree(tree):
    if tree is None:
        return
    swapLeftAndRight(tree)
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)


def swapLeftAndRight(tree):
    tree.left, tree.right = tree.right, tree.left


# This is the class of the input binary tree.

class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
