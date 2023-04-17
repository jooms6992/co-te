from collections import deque
def canVisitAllRooms(rooms):

    visited = set()

    def bfs(v):
        visited.add(v)
        q = deque()
        q.append(v)
        while q:
            cur_v = q.popleft()
            for next_v in rooms[cur_v]:
                if next_v not in visited:
                    visited.add(next_v)
                    q.append(next_v)

    def dfs(v):
        visited.add(v)
        for next_v in rooms[v]:
            if next_v not in visited:
                dfs(next_v)

    # bfs(0)
    # dfs(0)

    if len(visited) == len(rooms):
        return True
    else:
        return False


# rooms = [[1,3],[2,4],[0],[4],[],[3,4]]
rooms = [[1],[2],[3],[]]
print(canVisitAllRooms(rooms))