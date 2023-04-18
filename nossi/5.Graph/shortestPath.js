//  https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
'use strict';

function shortPath(grid) {
  let shortest_path_len = -1;
  const row = grid.length;
  const col = grid[0].length;
  if (grid[0][0] === 1 || grid[row - 1][col - 1] === 1) {
    return shortest_path_len;
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
  const q = [];
  const visited = JSON.parse(JSON.stringify(grid));

  visited[0][0] = true;
  q.push([0, 0, 1]);

  while (q.length > 0) {
    const [cur_r, cur_c, cur_len] = q.shift();
    if (cur_r === row - 1 && cur_c === col - 1) {
      shortest_path_len = cur_len;
      break;
    }
    for (let [dr, dc] of directions) {
      const [next_r, next_c] = [cur_r + dr, cur_c + dc];
      if (next_r >= 0 && next_r < row && next_c >= 0 && next_c < col) {
        if (grid[next_r][next_c] === 0 && visited[next_r][next_c] !== true) {
          q.push([next_r, next_c, cur_len + 1]);
          visited[next_r][next_c] = true;
        }
      }
    }
  }
  return shortest_path_len;
}

const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];

console.log(shortPath(grid));
