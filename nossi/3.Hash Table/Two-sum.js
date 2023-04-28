// https://leetcode.com/problems/two-sum/solutions/1606307/javascript-hash-table/?orderBy=most_votes&languageTags=javascript&topicTags=hash-table
// Hash
// Key-value쌍으로 데이터를 빠르게 찾아보세요.

const nums = [4, 1, 9, 7, 5, 3, 16];
const target = 14;

function twoSum(nums, target) {
  const memo = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in memo) {
      return [memo[target - nums[i]], i];
    }
    memo[nums[i]] = i;
  }
  return false;
}

console.log(twoSum(nums, target));
