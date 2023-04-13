# bfs의 가장 기본적인 코드 형태이다.
# 이건 완전 템플릿처럼 외워야한다.
# 방문과 접근은 다르다
# 방문은 접근해서 뭔가를 해야한다
# deque는 queue를 만들기 위해서 쓰이고
# queue는 bfs를 만들기 위해 필요하다 (FIFO)
from collections import deque
# 12345
def bfs(root):
    visited = []
    if root is None:
        return 0
    q = deque() # q:[]
    q.append(root) # q:[{node_A}]
    # 여기까지 초기세팅
    while q:
        # q가 비어질때까지
        cur_node = q.popleft() # cur_node:{node_A} q:[]
        # q의 맨 앞에 있는 노드에 접근
        visited.append(cur_node.value) # visited:[A]
        # 방명록 남김~❤

        # 방문 예정인 노드를 q에 저장한다(방문예약)
        if cur_node.left:
            q.append(cur_node.left) # q:[{node_B}] cur_node:{node_A}
        if cur_node.right:
            q.append(cur_node.right) # q:[{node_B}, {node_C}] cur_node:{node_A}
    return visited

# queue는 FIFO이기 때문에 먼저 방문예약한 곳 부터 방문한다