# https://leetcode.com/problems/number-of-islands/
# 외워야하는 기본적인 유형

# vertex의 개수 === 섬의 개수

from collections import deque

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

def numIslands(grid):
    number_of_islands = 0
    row = len(grid)
    col = len(grid[0])
    visited = [[False]*col for _ in range(row)]

    for i in range(row):
        for j in range(col):
            if grid[i][j] == '1' and not visited[i][j]:
                # dfs()
                number_of_islands += 1
    return number_of_islands

print(numIslands(grid))


def dfs_search(graph, start, end):
    visited = set()
    stack = [(start, [start])]
    while stack:
        (vertex, path) = stack.pop()
        if vertex not in visited:
            if vertex == end:
                return path
            visited.add(vertex)
            for neighbor in graph[vertex]:
                stack.append((neighbor, path + [neighbor]))
    return visited