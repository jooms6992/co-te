# 접근, 재귀를 이용한 # 12345
def dfs(root):
    if root is None:
        return
    dfs(root.left)
    dfs(root.right)

# dfs(root) # root만 나한테줘 그러면 root가 가리키는 Tree에 속한 모든 노드를 접근해줄게
# 재귀적으로 subtree 특징을 이용해서
