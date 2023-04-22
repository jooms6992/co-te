from collections import deque

def shortPath(grid):
    shortest_path_len = -1
    row = len(grid)
    col = len(grid[0])
    if grid[0][0] == 1 or grid[row - 1][col - 1] == 1:
        return shortest_path_len

    directions = [(0,1),(0,-1),(1,0),(-1,0),(1,1),(1,-1),(-1,1),(-1,-1)]
    
    visited = set()
    q = deque()
    visited.add((0,0))
    q.append((0,0,1))
    while q:
        cur_r,cur_c,cur_len = q.popleft()
        if cur_r == row - 1 and cur_c == col - 1:
            shortest_path_len = cur_len
            break
        for dr,dc in directions:
            next_r = cur_r + dr
            next_c = cur_c + dc
            if next_r >=0 and next_r < row and next_c >=0 and next_c < col:
                if grid[next_r][next_c] == 0 and (next_r, next_c) not in visited:
                    visited.add((next_r,next_c))
                    q.append((next_r, next_c,cur_len+1))

    

    return shortest_path_len



grid = [[0,0,0],[1,1,0],[1,1,0]]

print(shortPath(grid))