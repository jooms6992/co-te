// https://chamdom.blog/dfs-using-js/
'use strict';

const visited = {};

// Recursive DFS
// 재귀를 이용하면 시간초과가 날 수 있다. 그럴땐 스택을 이용한 iterative DFS를 이용해야 한다
function dfsRecursive(startV) {
  visited[startV] = true;
  for (let v of graph[startV]) {
    if (!(v in visited)) {
      dfs(v);
    }
  }
  return visited;
}

// stack의 LIFO특성을 이용한 깊이우선탐색
// iterative DFS
function dfsStack(startV) {
  const stack = [[startV, -1]];

  while (stack.length > 0) {
    let [curV, parent] = stack.pop();
    // 다시 부모 노드로 되돌아가기 위한 코드
    if (curV in visited) {
      continue;
    }
    stack.push([curV, parent]);
    //
    visited[curV] = true;
    for (let v of graph[curV]) {
      if (!(v in visited)) {
        stack.push([v, curV]);
      }
    }
  }
  return visited;
}

const graph = {
  A: ['B', 'D', 'E'],
  B: ['A', 'C', 'D'],
  C: ['B'],
  D: ['A', 'B'],
  E: ['A'],
};

console.log(dfsStack('A'));
