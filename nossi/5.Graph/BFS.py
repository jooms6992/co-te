from collections import deque
# 그냥 외우셔요 템플릿처럼 중비하셔야돼요~ 이런거눈~ 뜬겁새로!?

graph = {
    'A': ['B', 'D', 'E'],
    'B': ['A', 'C', 'D'],
    'C': ['B'],
    'D': ['A', 'B'],
    'E': ['A']
}

# bfs의 특징 가까운지점부터 탐색한다 (너비우선탐색Breadth-first search)
# FIFO 그래서 queue를 쓰는거임
def bfs(graph, start_v):
    visited = [start_v]
    queue = deque(start_v)
    while queue:
        cur_v = queue.popleft()
        for v in graph[cur_v]:
            if v not in visited:
                visited.append(v)
                queue.append(v)
    return visited

print(bfs(graph, 'A'))