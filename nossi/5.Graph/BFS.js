'use strict';

function bfs(graph, startV) {
  const visited = [startV];
  const queue = [startV];
  while (queue.length > 0) {
    let curV = queue.shift();
    for (let v of graph[curV]) {
      if (!visited.includes(v)) {
        visited.push(v);
        queue.push(v);
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

console.log(bfs(graph, 'A'));
const q = new Queue();
