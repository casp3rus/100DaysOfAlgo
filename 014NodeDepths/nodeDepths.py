# the class of the input binary tree

class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Solution 1 - recursion
# O(n) time / O(h) space
# h - height of the binary tree


def nodeDepths(root, depth=0):
    if root is None:
        return 0
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)

# Solution 2 - iteration
# O(n) time / O(h) space
# h - height of the binary tree


def nodeDepths(root):
    sumOfDepths = 0
    stack = [{"node": root, "depth": 0}]
    while len(stack) > 0:
        nodeInfo = stack.pop()
        noe, depth = nodeInfo["node"], nodeInfo["depth"]
        if node is None:
            continue
        sumOfDepths += depth
        stack.append({"node": node.left, "depth": depth +})
        stack.append({"node": node.right, "depth": depth +})
    return sumOfDepths
