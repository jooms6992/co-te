# 방문
# 12345
def preorder(cur_node):
    if cur_node is None:
        return
    # 방문을 먼저하고 자식노드들 한테 방문
    print(cur_node.value)
    preorder(cur_node.left)
    preorder(cur_node.right)

def inorder(cur_node):
    if cur_node is None:
        return
    # 한쪽 child먼저 다 방문한 다음에 root방문하고 다른 한쪽 child다 방문
    inorder(cur_node.left)
    print(cur_node.value)
    inorder(cur_node.right)

def postorder(cur_node):
    if cur_node is None:
        return
    # 모든 child들을 다 방문하고 돌아오는 길에 방문
    postorder(cur_node.left)
    postorder(cur_node.right)
    print(cur_node.value)