# https://leetcode.com/problems/number-of-islands/
# 외워야하는 기본적인 유형

# vertex의 개수 === 섬의 개수

from collections import deque

def numIslands(grid):
    number_of_islands = 0
    row = len(grid)
    col = len(grid[0])
    visited = set()

    directions = [(0,-1),(0,1),(-1,0),(1,0)]

    def dfs(x,y):
        visited.add((x,y))
        for dx, dy in directions:
            next_x = x + dx
            next_y = y + dy
            if next_x >= 0 and next_x < row and next_y >= 0 and next_y < col:
                    if grid[next_x][next_y] == '0':
                        continue
                    if (next_x, next_y) in visited:
                        continue
                    dfs(next_x, next_y)

    for i in range(row):
        for j in range(col):
            if grid[i][j] == '1' and (i,j) not in visited:
                dfs(i,j)
                number_of_islands += 1
    return number_of_islands

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

print(numIslands(grid))