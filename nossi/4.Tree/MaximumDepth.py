# https://leetcode.com/problems/maximum-depth-of-binary-tree/
# level order BFS

from collections import deque

def maxDepth(root):
    max_depth = 0
    if root is None:
        return max_depth
    q = deque()
    q.append((root, 1))
    while q:
        cur_node, cur_depth = q.popleft()
        max_depth = max(max_depth, cur_depth)
        if cur_node.left:
            q.append((cur_node.left, cur_depth + 1))
        if cur_node.right:
            q.append((cur_node.right, cur_depth + 1))
    return max_depth

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