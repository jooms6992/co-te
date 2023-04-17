//  https://leetcode.com/problems/keys-and-rooms/

function canVisitAllRooms(rooms) {
  const visited = new Set();

  function dfs(v) {
    visited.add(v);
    for (let next_v of rooms[v]) {
      if (!visited.has(next_v)) {
        dfs(next_v);
      }
    }
  }

  function bfs(v) {
    visited.add(v);
    const queue = [];
    queue.push(v);
    while (queue.length > 0) {
      const cur_v = queue.shift();
      for (let next_v of rooms[cur_v]) {
        if (!visited.has(next_v)) {
          queue.push(next_v);
          visited.add(next_v);
        }
      }
    }
  }

  //   dfs(0);
  bfs(0);

  console.log(visited);

  if (visited.size === rooms.length) {
    return true;
  } else {
    return false;
  }
}

// rooms = [[1, 3], [2, 4], [0], [4], [], [3, 4]];
rooms = [[1], [2], [3], []];
console.log(canVisitAllRooms(rooms));
