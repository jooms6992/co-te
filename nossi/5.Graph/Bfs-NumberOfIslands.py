# https://leetcode.com/problems/number-of-islands/

# 외워야하는 기본적인 유형

from collections import deque

def numIslands(grid):
    number_of_islands = 0
    row = len(grid)
    col = len(grid[0])
    visited = [[False]*col for _ in range(row)]

    # 기본적인 응용 외우세요🙃
    def bfs(x, y):
        dx = [-1,1,0,0]
        dy = [0,0,-1,1]
        # 동서남북
        visited[x][y] =True
        # 방문해준건 True로 체크
        queue = deque()
        queue.append((x,y))
        while queue:
            cur_x, cur_y = queue.popleft()
            # 동서남북 방문하는 법 외우세요
            for i in range(4):
                next_x = cur_x + dx[i]
                next_y = cur_y + dy[i]
                if next_x >= 0 and next_x < row and next_y >= 0 and next_y < col:
                    # 범위를 벗어나지 않게
                    if grid[next_x][next_y] == '1' and not visited[next_x][next_y]:
                        # 육지이거나 방문하지 않은 곳
                        visited[next_x][next_y] = True
                        # 방문
                        queue.append((next_x, next_y))
                        # 예약

    for i in range(row):
        for j in range(col):
            if grid[i][j] == '1' and not visited[i][j]:
                bfs(i,j)
                number_of_islands += 1
                # dfs()
    return number_of_islands
    
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

print(numIslands(grid))
