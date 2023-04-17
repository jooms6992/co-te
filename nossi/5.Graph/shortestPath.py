# https://leetcode.com/problems/shortest-path-in-binary-matrix/description/

from collections import deque

def shortPath(grid):
    shortest_path_len = -1
    row = len(grid)
    col = len(grid[0])
    if grid[0][0] == 1 or grid[row-1][col-1] == 1:
        return -1
    visited = set()
    directions = [(0,1),(0,-1),(1,0),(-1,0),(1,1),(1,-1),(-1,1),(-1,-1)]

    q = deque([(0,0,1)])
    visited.add((0,0))
    while q:
        cur_r, cur_c, cur_len = q.popleft()
        # 목적지에 도착했을때 그때의 cur_len을 shotest_path_len에 저장하면 된다.
        if cur_r == row-1 and cur_c == col-1:
            shortest_path_len = cur_len
            break

        for dr, dc in directions:
            next_r = cur_r + dr
            next_c = cur_c + dc
            if next_r >= 0 and next_r < row and next_c >= 0 and next_c < col:
                if grid[next_r][next_c] == 0 and (next_r,next_c) not in visited :
                    q.append((next_r, next_c, cur_len+1))
                    visited.add((next_r, next_c))

    return shortest_path_len

grid = [[0,0,0],[1,1,0],[1,1,0]]

print(shortPath(grid))