'use strict';

function shortPath(grid) {
  let shortestPathLength = -1;
  const row = grid.length;
  const col = grid[0].length;
  if (grid[0][0] === 1 && grid[row - 1][col - 1] === 1) {
    return shortestPathLength;
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const visited = JSON.parse(JSON.stringify(grid));
  const queue = [];
  visited[0][0] = true;
  queue.push([0, 0, 1]);
  while (queue.length > 0) {
    const [cur_r, cur_c, cur_len] = queue.shift();
    if (cur_r === row - 1 && cur_c === col - 1) {
      shortestPathLength = cur_len;
      break;
    }
    for (let [dr, dc] of directions) {
      const [next_r, next_c] = [cur_r + dr, cur_c + dc];
      if (!(next_r >= 0 && next_r < row && next_c >= 0 && next_c < col))
        continue;
      if (grid[next_r][next_c] === 1) continue;
      if (visited[next_r][next_c] === true) continue;
      visited[next_r][next_c] = true;
      queue.push([next_r, next_c, cur_len + 1]);
    }
  }
  return shortestPathLength;
}

const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];

console.log(shortPath(grid));
