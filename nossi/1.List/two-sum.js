// https://leetcode.com/problems/two-sum/
const nums = [3, 2, 4];
const target = 6;

// 완전 탐색 O(n^2)
function twoSum(nums, target) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
}

console.log(twoSum(nums, target));

// two pointer
// 정렬은 O(nlogn)
function twoSumm(nums, target) {
  const sorted = [...nums].sort((a, b) => a - b);
  let l = 0;
  let r = sorted.length - 1;
  while (l !== r) {
    if (sorted[l] + sorted[r] == target) {
      return [nums.indexOf(sorted[l]), nums.indexOf(sorted[r], -1)];
    } else if (sorted[l] + sorted[r] > target) {
      r = r - 1;
    } else {
      l = l + 1;
    }
  }
  return false;
}

console.log(twoSumm(nums, target));
