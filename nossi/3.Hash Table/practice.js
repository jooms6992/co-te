'use strict';
const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  let longest = 0;

  const memo = new Map();
  for (let n of nums) {
    memo.set(n);
  }

  for (let num of memo.keys()) {
    if (!memo.has(num - 1)) {
      let target = num + 1;
      let cnt = 1;
      while (memo.has(target)) {
        target++;
        cnt++;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}

console.log(longestConsecutive(nums));
