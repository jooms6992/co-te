graph = {
    'A': ['B', 'D', 'E'],
    'B': ['A', 'C', 'D'],
    'C': ['B'],
    'D': ['A', 'B'],
    'E': ['A']
}

# graph = { ... }
visited = []

def dfs(cur_v):
    visited.append(cur_v)
    for v in graph[cur_v]:
        if v not in visited:
            dfs(v)

dfs('A')

# def dfss(graph, cur_v, visited=[]):
#     visited.append(cur_v)
#     for v in graph[cur_v]:
#         if v not in visited:
#             visited = dfss(graph, v, visited)
#     return visited

# print(dfss(graph,'A'))
