from collections import deque

def numIslands(grid):
    numbers_of_islands = 0
    row = len(grid)
    col = len(grid[0])
    visited = set()

    directions = [(0,-1),(0,1),(-1,0),(1,0)]

    def bfs(x,y):
        q = deque([(x, y)])
        visited.add((x, y))
        while q:
            cur_x, cur_y = q.popleft()
            for dx, dy in directions:
                next_x = cur_x + dx
                next_y = cur_y + dy
                if next_x >= 0 and next_x < row and next_y >= 0 and next_y < col:
                    if grid[next_x][next_y] == '0':
                        continue
                    if (next_x, next_y) in visited:
                        continue
                    q.append((next_x,next_y))
                    visited.add((next_x, next_y))

    for i in range(row):
        for j in range(col):
            if grid[i][j] == '0':
                continue
            if (i,j) in visited:
                continue
            bfs(i,j)
            numbers_of_islands += 1
    return numbers_of_islands


grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]]

print(numIslands(grid))