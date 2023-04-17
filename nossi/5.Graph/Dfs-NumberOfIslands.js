// https://leetcode.com/problems/number-of-islands/
// 외워야하는 기본적인 유형
'use strict';

function numIslands(grid) {
  let numbersOfIslands = 0;
  const row = grid.length;
  let col = grid[0].length;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfs(x, y) {
    grid[x][y] = '0';
    for (let [dx, dy] of directions) {
      const [next_x, next_y] = [x + dx, y + dy];
      if (!(next_x >= 0 && next_x < row && next_y >= 0 && next_y < col))
        continue;
      if (grid[next_x][next_y] == '0') continue;
      dfs(next_x, next_y);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == '0') continue;
      dfs(i, j);
      numbersOfIslands++;
    }
  }
  return numbersOfIslands;
}

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid));
