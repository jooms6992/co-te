// https://leetcode.com/problems/two-sum/solutions/1606307/javascript-hash-table/?orderBy=most_votes&languageTags=javascript&topicTags=hash-table
// Hash
// Key-value쌍으로 데이터를 빠르게 찾아보세요.
// return indices of the two numbers

const nums = [4, 1, 9, 7, 5, 3, 16];
const target = 14;

function twoSum(nums, target) {
  const memo = {};
  for (let i = 0; i < nums.length; i++) {
    // memo[nums[i]] = i; 먼저 넣어주고 시작하면 자기 자신도 검사하므로 안됨 ex) target이 14일때 7이 들어오면 방금 막 넣어준 자기자신7과 일치해버림
    if (target - nums[i] in memo) {
      return [memo[target - nums[i]], i];
    }
    memo[nums[i]] = i;
  }
  return false;
}

console.log(twoSum(nums, target));
