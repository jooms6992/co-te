# https://leetcode.com/problems/maximum-depth-of-binary-tree/
# postorder DFS

def maxDepth(root):
    if root is None:
        return 0
    left_depth = maxDepth(root.left)
    right_depth = maxDepth(root.right)
    return max(right_depth, left_depth) + 1

root = [3,9,20,None,None,15,7]

class TreeNode:
    def __init__(self, left=None,right=None,value=0):
        self.left = left
        self.right = right
        self.value = value

root = TreeNode(value=3)
root.left = TreeNode(value=9)
root.right = TreeNode(value=20)
root.right.left = TreeNode(value=15)
root.right.right = TreeNode(value=7)

print(maxDepth(root))