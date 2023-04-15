function numIslands(grid) {
  let numbersOfIslands = 0;
  const row = grid.length;
  const col = grid[0].length;
  const visited = new Set();

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function bfs(x, y) {
    visited.add([x, y]);
    const q = [[x, y]];
    while (q.length) {
      [cur_x, cur_y] = q.shift();
      for ([dx, dy] in directions) {
        [next_x, next_y] = [cur_x + dx, cur_y + dy];
      }
      if (!(next_x >= 0 && next_x < row && next_y >= 0 && next_y < col))
        continue;
      if (grid[next_x][next_y] === '0') continue;
      if (visited.has([next_x, next_y])) continue;
      q.push([next_x, next_y]);
      visited.add([next_x, next_y]);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == '0') continue;
      if (visited.has([i, j])) continue;
      bfs(i, j);
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
