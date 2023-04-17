# https://leetcode.com/problems/keys-and-rooms/

from collections import deque

def canVisitAllRooms(rooms):

    visited = set()

    def dfs(v):
        visited.add(v)
        for next_v in rooms[v]:
            if next_v not in visited:
                dfs(next_v)
    # dfs(0)

    def bfs(v):
        visited.add(v)
        q = deque()
        q.append(v)
        while q:
            cur_v = q.popleft()
            for next_v in rooms[cur_v]:
                if next_v not in visited:
                    q.append(next_v)
                    visited.add(next_v)

    bfs(0)

    if len(visited) == len(rooms):
        return True
    else:
        return False

# rooms = [[1,3],[2,4],[0],[4],[],[3,4]]
rooms = [[1],[2],[3],[]]
print(canVisitAllRooms(rooms))